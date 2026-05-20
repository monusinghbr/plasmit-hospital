"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import {
  defaultPreference,
  foregroundForHex,
  hexToHsl,
  isHexColor,
  themePresets,
  uiPreferenceStorageKey,
} from "@/config/theme";
import type { UiPreference } from "@/types";

type UiPreferenceContextValue = {
  preference: UiPreference;
  setPreference: (preference: UiPreference) => void;
  resetPreference: () => void;
  applyPrimaryColor: (preference: UiPreference) => void;
};

const UiPreferenceContext = React.createContext<UiPreferenceContextValue | null>(null);

function readPreference(): UiPreference {
  if (typeof window === "undefined") return defaultPreference;
  const raw = window.localStorage.getItem(uiPreferenceStorageKey);
  if (!raw) return defaultPreference;
  try {
    const parsed = JSON.parse(raw) as UiPreference;
    if (parsed.version !== 1) return defaultPreference;
    return { ...defaultPreference, ...parsed };
  } catch {
    return defaultPreference;
  }
}

function softFromHsl(hsl: string) {
  const [h, s] = hsl.split(" ");
  return `${h} ${s} 96%`;
}

function applyPrimaryVariables(preference: UiPreference) {
  const root = document.documentElement;
  const preset = themePresets.find((item) => item.id === preference.colorPreset);
  const custom = preference.colorPreset === "custom" ? preference.customPrimary : undefined;
  const hsl = custom && isHexColor(custom) ? hexToHsl(custom) : preset?.hsl ?? themePresets[0].hsl;
  const foreground = custom && isHexColor(custom) ? foregroundForHex(custom) : preset?.foreground ?? themePresets[0].foreground;
  root.style.setProperty("--primary", hsl);
  root.style.setProperty("--primary-foreground", foreground);
  root.style.setProperty("--primary-soft", custom ? softFromHsl(hsl) : preset?.soft ?? themePresets[0].soft);
  root.style.setProperty("--ring", hsl);
  root.style.setProperty("--sidebar-active", hsl);
  root.style.setProperty("--sidebar-active-foreground", foreground);
  root.dataset.density = preference.density;
}

export function UiPreferenceProvider({ children }: { children: React.ReactNode }) {
  const { setTheme } = useTheme();
  const [preference, setPreferenceState] = React.useState<UiPreference>(readPreference);

  React.useEffect(() => {
    setTheme(preference.mode);
    applyPrimaryVariables(preference);
  }, [preference, setTheme]);

  const setPreference = React.useCallback(
    (nextPreference: UiPreference) => {
      setPreferenceState(nextPreference);
      window.localStorage.setItem(uiPreferenceStorageKey, JSON.stringify(nextPreference));
      setTheme(nextPreference.mode);
      applyPrimaryVariables(nextPreference);
    },
    [setTheme],
  );

  const resetPreference = React.useCallback(() => {
    setPreference(defaultPreference);
  }, [setPreference]);

  const value = React.useMemo(
    () => ({
      preference,
      setPreference,
      resetPreference,
      applyPrimaryColor: applyPrimaryVariables,
    }),
    [preference, resetPreference, setPreference],
  );

  return <UiPreferenceContext.Provider value={value}>{children}</UiPreferenceContext.Provider>;
}

export function useUiPreference() {
  const context = React.useContext(UiPreferenceContext);
  if (!context) {
    throw new Error("useUiPreference must be used inside UiPreferenceProvider");
  }
  return context;
}
