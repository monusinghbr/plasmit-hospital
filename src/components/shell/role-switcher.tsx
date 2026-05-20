"use client";

import * as Select from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";

import { useRole } from "@/components/providers/role-provider";

export function RoleSwitcher() {
  const { role, setRole, roles } = useRole();

  return (
    <Select.Root value={role} onValueChange={(value) => setRole(value as typeof role)}>
      <Select.Trigger className="flex h-9 min-w-0 items-center justify-between gap-2 rounded-md border border-border bg-surface px-3 text-sm text-foreground outline-none hover:bg-surface-muted focus:ring-2 focus:ring-ring md:min-w-44">
        <Select.Value />
        <Select.Icon>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="z-[80] max-h-80 overflow-hidden rounded-md border border-border bg-surface shadow-soft">
          <Select.Viewport className="p-1">
            {roles.map((item) => (
              <Select.Item
                className="cursor-pointer rounded px-2 py-2 text-sm text-foreground outline-none hover:bg-surface-muted focus:bg-surface-muted data-[state=checked]:bg-primary-soft"
                key={item}
                value={item}
              >
                <Select.ItemText>{item}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
