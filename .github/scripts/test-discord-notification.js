// Test script to preview Discord notification locally
// Usage: DISCORD_WEBHOOK_URL=your_webhook_url node .github/scripts/test-discord-notification.js

const mockBlogPost = {
  title: "Introducing IPCrawler 2.0: Enhanced Network Monitoring",
  summary: "Discover the powerful new features in IPCrawler 2.0, including real-time alerts, advanced analytics, and improved performance monitoring capabilities.",
  publishedAt: new Date().toISOString(),
  tag: "Product Update",
  image: "/images/blog/ipcrawler-2-0.png",
  slug: "introducing-ipcrawler-2-0"
};

async function sendDiscordNotification(blogPost) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  
  if (!webhookUrl) {
    console.error('DISCORD_WEBHOOK_URL is not set');
    console.log('Usage: DISCORD_WEBHOOK_URL=your_webhook_url node .github/scripts/test-discord-notification.js');
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

  console.log('Sending Discord notification...');
  console.log('Preview:', JSON.stringify(embed, null, 2));

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

    console.log(`✅ Discord notification sent successfully!`);
  } catch (error) {
    console.error('❌ Failed to send Discord notification:', error);
    process.exit(1);
  }
}

// Run the test
sendDiscordNotification(mockBlogPost).catch(console.error);