"use client";

import * as React from "react";

import { AppFooter } from "@/components/shell/app-footer";
import { AppSidebar } from "@/components/shell/app-sidebar";
import { TopHeader } from "@/components/shell/top-header";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <div className="min-h-dvh overflow-x-hidden bg-background text-foreground">
      <div className="flex min-h-dvh min-w-0 overflow-x-hidden">
        <AppSidebar collapsed={collapsed} onCollapsedChange={setCollapsed} />
        <div className="flex min-w-0 flex-1 flex-col overflow-x-hidden">
          <TopHeader />
          <main className="min-w-0 flex-1 overflow-x-hidden px-4 pb-8 md:px-6">{children}</main>
          <AppFooter />
        </div>
      </div>
    </div>
  );
}
