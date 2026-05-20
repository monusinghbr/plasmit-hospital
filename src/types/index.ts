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

export type AdminStatus = "Active" | "Inactive" | "Locked" | "Invited" | "Draft" | "Future Ready";
export type RiskLevel = "Low" | "Medium" | "High" | "Critical";

export type AdminRoleRecord = {
  id: string;
  name: Role;
  type: "System" | "Custom";
  description: string;
  departmentScope: string;
  status: "Active" | "Inactive";
  userCount: number;
  modulesAllowed: number;
  permissionCount: number;
  protected: boolean;
  risk: RiskLevel;
  updatedAt: string;
};

export type PermissionRecord = {
  id: string;
  module: string;
  page: string;
  tab: string;
  action: string;
  description: string;
  sensitive: boolean;
  enabled: boolean;
  dependency: "Module" | "Page" | "Tab" | "Action" | "Sensitive";
};

export type UserRecord = {
  id: string;
  employeeCode: string;
  name: string;
  email: string;
  mobile: string;
  roleIds: string[];
  departmentIds: string[];
  designation: string;
  status: AdminStatus;
  lastLoginAt: string;
  locked: boolean;
  failedLogins: number;
};

export type DepartmentRecord = {
  id: string;
  code: string;
  name: string;
  type: "Clinical" | "Diagnostic" | "Administrative" | "Support" | "Finance" | "Store";
  head: string;
  location: string;
  users: number;
  status: "Active" | "Inactive";
  enabledWorkflows: string[];
};

export type BranchRecord = {
  id: string;
  code: string;
  name: string;
  city: string;
  type: "Main Hospital" | "Future Branch";
  departments: number;
  status: "Active" | "Future Ready";
};

export type SecuritySession = {
  id: string;
  user: string;
  role: Role;
  device: string;
  ipAddress: string;
  location: string;
  loginTime: string;
  lastActivity: string;
  status: "Active" | "Idle" | "Expired";
};

export type TrustedDevice = {
  id: string;
  name: string;
  user: string;
  browser: string;
  lastUsed: string;
  trustStatus: "Trusted" | "Review" | "Blocked";
  risk: RiskLevel;
};

export type IpRule = {
  id: string;
  range: string;
  type: "Allow" | "Block";
  description: string;
  addedBy: string;
  status: "Active" | "Inactive";
};

export type AuditLog = {
  id: string;
  timestamp: string;
  actorUserId: string;
  actorName: string;
  actorRole: Role;
  module: string;
  eventType: string;
  target: string;
  severity: "Info" | "Warning" | "Critical" | "Security";
  ipAddress: string;
  device: string;
  before: string;
  after: string;
  sensitiveFieldsMasked: boolean;
};

export type PatientStatus =
  | "Active"
  | "Inactive"
  | "Unknown emergency"
  | "Deceased"
  | "Merged placeholder"
  | "Duplicate review"
  | "Archived placeholder";

export type PatientGender = "Female" | "Male" | "Other" | "Unknown";
export type AbhaStatus = "Not linked" | "Link pending" | "Linked" | "Verification failed" | "Consent required" | "Sync pending";

export type PatientRecord = {
  id: string;
  uhid: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  dateOfBirth: string;
  age: number;
  gender: PatientGender;
  bloodGroup: string;
  mobile: string;
  maskedMobile: string;
  email: string;
  address: string;
  city: string;
  state: string;
  pinCode: string;
  status: PatientStatus;
  abhaStatus: AbhaStatus;
  lastVisitAt: string;
  department: string;
  alertFlags: string[];
  identityCompleteness: number;
  isMinor: boolean;
  guardianRequired: boolean;
  maskedIdNumber: string;
  documentStatus: "Verified" | "Pending verification" | "Rejected" | "Expired";
};

export type PatientVisit = {
  id: string;
  patientId: string;
  visitType: "OPD" | "IPD" | "Emergency" | "Lab" | "Radiology" | "Pharmacy" | "Billing";
  department: string;
  provider: string;
  referenceNumber: string;
  status: "Completed" | "Active" | "Pending" | "Cancelled";
  visitedAt: string;
  summary: string;
  amount: string;
};

export type FamilyMember = {
  id: string;
  patientId: string;
  name: string;
  relationship: string;
  linkedUhid?: string;
  ageGender: string;
  mobile: string;
  primaryContact: boolean;
  status: "Linked" | "Not linked" | "Emergency contact";
};

export type PatientDocument = {
  id: string;
  patientId: string;
  name: string;
  category: string;
  fileType: "PDF" | "JPG" | "PNG";
  uploadedAt: string;
  uploadedBy: string;
  verificationStatus: "Pending verification" | "Verified" | "Rejected" | "Expired" | "Archived";
  linkedVisitId?: string;
  comments: string;
};

export type ConsentForm = {
  id: string;
  patientId: string;
  type: string;
  version: string;
  status: "Not signed" | "Signed" | "Expired" | "Withdrawn" | "Pending guardian";
  signedBy: string;
  relationship: string;
  signedAt: string;
  expiresAt: string;
  linkedVisitId?: string;
};

export type DuplicatePatientMatch = {
  id: string;
  primaryPatientId: string;
  matchedPatientId: string;
  matchReason: string;
  confidence: number;
  status: "Pending review" | "Merge requested" | "Not duplicate" | "Resolved";
  createdAt: string;
};

export type EmergencyPatient = {
  id: string;
  temporaryId: string;
  approxAge: number;
  gender: PatientGender;
  broughtBy: string;
  contactNumber: string;
  department: string;
  identityMarks: string;
  unknownReason: string;
  status: "Unknown emergency";
};
