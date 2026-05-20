import type { LucideIcon } from "lucide-react";

export type Role =
  | "Super Admin"
  | "Hospital Admin"
  | "Doctor"
  | "Nurse"
  | "Receptionist"
  | "Lab Technician"
  | "Radiologist"
  | "Pharmacist"
  | "Billing Executive"
  | "HR Manager"
  | "Management";

export type StatusTone = "success" | "warning" | "danger" | "info" | "critical" | "muted";

export type NavigationItem = {
  id: string;
  label: string;
  icon: LucideIcon;
  route: string;
  group: string;
  allowedRoles: Role[];
  status?: "ready" | "planned";
};

export type NotificationPriority = "high" | "medium" | "low";
export type NotificationStatus = "unread" | "read" | "acknowledged";

export type NotificationItem = {
  id: string;
  type:
    | "Clinical alert"
    | "Critical lab alert"
    | "Appointment alert"
    | "Billing approval"
    | "Pharmacy stock alert"
    | "Bed management alert"
    | "Security alert"
    | "System message"
    | "Task assignment";
  title: string;
  message: string;
  priority: NotificationPriority;
  status: NotificationStatus;
  module: string;
  patient?: string;
  createdAt: string;
};

export type SearchResult = {
  id: string;
  type: "Patient" | "Doctor" | "Appointment" | "Module" | "Bill" | "Lab report" | "Radiology report" | "Action";
  title: string;
  description: string;
  meta: string;
  route: string;
};

export type UiPreference = {
  version: 1;
  mode: "light" | "dark" | "system";
  colorPreset: "clinical-blue" | "care-green" | "trust-teal" | "emergency-red" | "executive-neutral" | "custom";
  customPrimary?: string;
  density: "comfortable" | "compact";
  sidebar: "expanded" | "collapsed" | "auto";
};
