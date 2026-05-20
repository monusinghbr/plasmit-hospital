"use client";

import * as React from "react";

import { AppSidebar } from "@/components/shell/app-sidebar";
import { TopHeader } from "@/components/shell/top-header";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <div className="flex min-h-dvh">
        <AppSidebar collapsed={collapsed} onCollapsedChange={setCollapsed} />
        <div className="flex min-w-0 flex-1 flex-col">
          <TopHeader />
          <main className="min-w-0 flex-1 px-4 pb-8 md:px-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
