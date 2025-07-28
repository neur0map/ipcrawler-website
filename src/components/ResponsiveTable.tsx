'use client';

import React from 'react';
import { Table } from '@once-ui-system/core';

interface ResponsiveTableProps {
  headers: string[];
  rows: (string | React.ReactNode)[][];
}

export function ResponsiveTable({ headers, rows }: ResponsiveTableProps) {
  const tableData = {
    headers: headers.map((header, index) => ({
      content: header,
      key: `header-${index}`
    })),
    rows: rows
  };

  return (
    <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
      <div className="min-w-full inline-block align-middle">
        <div className="overflow-hidden">
          <Table data={tableData} />
        </div>
      </div>
    </div>
  );
}