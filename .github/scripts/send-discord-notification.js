const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

async function sendDiscordNotification(blogPost) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  
  if (!webhookUrl) {
    console.error('DISCORD_WEBHOOK_URL is not set');
    process.exit(1);
  }

  // Create a beautiful embed for the blog post
  const embed = {
    embeds: [{
      title: `📝 New Blog Post: ${blogPost.title}`,
      description: blogPost.summary || 'A new blog post has been published on IPCrawler!',
      color: 0x5865F2, // Discord blurple color
      fields: [
        {
          name: '📅 Published',
          value: new Date(blogPost.publishedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }),
          inline: true
        },
        {
          name: '🏷️ Category',
          value: blogPost.tag || 'General',
          inline: true
        }
      ],
      author: {
        name: 'IPCrawler Blog',
        icon_url: 'https://ipcrawler.com/favicon.ico',
        url: 'https://ipcrawler.com/blog'
      },
      url: `https://ipcrawler.com/blog/${blogPost.slug}`,
      timestamp: new Date().toISOString(),
      footer: {
        text: 'IPCrawler - Network Monitoring & Analysis',
        icon_url: 'https://ipcrawler.com/favicon.ico'
      }
    }],
    content: '🚀 **New blog post alert!** Check out our latest article:',
    username: 'IPCrawler Blog Bot',
    avatar_url: 'https://ipcrawler.com/favicon.ico'
  };

  // Add thumbnail if image is available
  if (blogPost.image) {
    embed.embeds[0].thumbnail = {
      url: blogPost.image.startsWith('http') 
        ? blogPost.image 
        : `https://ipcrawler.com${blogPost.image}`
    };
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(embed)
    });

    if (!response.ok) {
      throw new Error(`Discord API returned ${response.status}: ${response.statusText}`);
    }

    console.log(`✅ Discord notification sent for: ${blogPost.title}`);
  } catch (error) {
    console.error('❌ Failed to send Discord notification:', error);
    process.exit(1);
  }
}

async function main() {
  const changedFiles = process.argv[2];
  
  if (!changedFiles) {
    console.log('No changed files provided');
    process.exit(0);
  }

  const files = changedFiles.split(' ').filter(file => file.endsWith('.mdx'));
  
  for (const file of files) {
    const filePath = path.join(process.cwd(), file);
    
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      continue;
    }

    try {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(fileContent);
      
      // Extract slug from filename
      const filename = path.basename(file, '.mdx');
      const slug = filename;

      const blogPost = {
        title: data.title,
        summary: data.summary,
        publishedAt: data.publishedAt,
        tag: data.tag,
        image: data.image,
        slug: slug
      };

      await sendDiscordNotification(blogPost);
    } catch (error) {
      console.error(`Error processing file ${file}:`, error);
    }
  }
}

// Run the script
main().catch(console.error);