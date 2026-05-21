"use client";

import * as React from "react";

import { AppFooter } from "@/components/shell/app-footer";
import { AppSidebar } from "@/components/shell/app-sidebar";
import { TopHeader } from "@/components/shell/top-header";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <div className="min-h-dvh max-w-full bg-background text-foreground">
      <div className="flex min-h-dvh min-w-0 max-w-full">
        <AppSidebar collapsed={collapsed} onCollapsedChange={setCollapsed} />
        <div className="flex min-w-0 flex-1 flex-col">
          <TopHeader />
          <main className="min-w-0 max-w-full flex-1 px-4 pb-8 md:px-6">{children}</main>
          <AppFooter />
        </div>
      </div>
    </div>
  );
}
