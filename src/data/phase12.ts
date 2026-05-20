export type Phase12Record = Record<string, string | number | boolean | string[]>;

export const mockIntegrations: Phase12Record[] = [
  { id: "int-001", connector: "ABHA Health ID", source: "Plasmit HMS", target: "ABHA sandbox placeholder", direction: "Bidirectional", environment: "Sandbox", lastSync: "Today 10:18", nextSync: "On demand", credentialExpiry: "18 days", failedReason: "Consent renewal required", status: "Sync pending" },
  { id: "int-002", connector: "PACS DICOM", source: "Radiology", target: "PACS placeholder", direction: "Outbound studies", environment: "Staging", lastSync: "Today 09:42", nextSync: "Every 15 min", credentialExpiry: "Valid 92 days", failedReason: "One study UID mismatch", status: "Failed" },
  { id: "int-003", connector: "LIS Analyzer", source: "Biochemistry analyzer", target: "LIS placeholder", direction: "Inbound results", environment: "Production placeholder", lastSync: "Today 11:04", nextSync: "Live queue", credentialExpiry: "Valid", failedReason: "None", status: "Connected placeholder" },
  { id: "int-004", connector: "ERP Finance", source: "Billing/Inventory", target: "ERP placeholder", direction: "Outbound vouchers", environment: "Staging", lastSync: "Yesterday", nextSync: "Tonight 23:00", credentialExpiry: "Expired", failedReason: "Credential rotation required", status: "Retrying" },
];

export const mockApiApps: Phase12Record[] = [
  { id: "api-001", appName: "Patient Portal App", environment: "Sandbox", maskedKey: "pk_live_****_9H2A", endpoints: 14, usage: "8.4k calls", rateLimit: "Normal", credentialExpiry: "29 days", status: "Active" },
  { id: "api-002", appName: "Insurance Desk Bridge", environment: "Staging", maskedKey: "sk_test_****_7Q1B", endpoints: 6, usage: "Rate limited placeholder", rateLimit: "Rate limited placeholder", credentialExpiry: "7 days", status: "Rate limited placeholder" },
  { id: "api-003", appName: "Legacy Billing Sync", environment: "Disabled", maskedKey: "revoked_****", endpoints: 3, usage: "0 calls", rateLimit: "NA", credentialExpiry: "Revoked", status: "Revoked placeholder" },
];

export const mockWebhookEvents: Phase12Record[] = [
  { id: "wh-001", endpoint: "billing.invoice.created", eventType: "Invoice", deliveryStatus: "Failed", retryCount: 3, failedReason: "Receiver timeout", maskedPayload: "{ invoiceId: ****1001 }", status: "Failed" },
  { id: "wh-002", endpoint: "patient.consent.updated", eventType: "Consent", deliveryStatus: "Delivered", retryCount: 0, failedReason: "None", maskedPayload: "{ patient: PLH**** }", status: "Synced" },
  { id: "wh-003", endpoint: "lab.result.critical", eventType: "Critical alert", deliveryStatus: "Retrying", retryCount: 2, failedReason: "HTTP 503 placeholder", maskedPayload: "{ order: LAB**** }", status: "Retrying" },
];

export const mockInteropMappings: Phase12Record[] = [
  { id: "map-001", interface: "HL7 ADT", messageOrResource: "ADT^A01", direction: "Inbound", mapping: "Patient/admission", lastMessage: "Today 10:12", errorState: "None", status: "Synced" },
  { id: "map-002", interface: "HL7 ORU", messageOrResource: "ORU^R01", direction: "Inbound", mapping: "Lab result", lastMessage: "Today 10:52", errorState: "OBX segment mismatch", status: "Failed" },
  { id: "map-003", interface: "FHIR Patient", messageOrResource: "Patient", direction: "Bidirectional", mapping: "Demographics", lastMessage: "Today 09:44", errorState: "Consent required", status: "Sync pending" },
  { id: "map-004", interface: "FHIR Observation", messageOrResource: "Observation", direction: "Outbound", mapping: "Vitals/lab", lastMessage: "Yesterday", errorState: "Mapping review pending", status: "Configured placeholder" },
];

export const mockAbhaSync: Phase12Record[] = [
  { id: "abha-001", patient: "Meera J. / PLH-220908", healthId: "meera****@abdm", consent: "Active", verification: "Verified placeholder", linkedState: "Linked", lastSync: "Today 09:20", status: "Synced" },
  { id: "abha-002", patient: "Ravi K. / PLH-221114", healthId: "Not linked", consent: "Renewal required", verification: "Pending", linkedState: "Unlinked", lastSync: "Never", status: "Sync pending" },
  { id: "abha-003", patient: "Sana K. / PLH-210076", healthId: "sana****@abdm", consent: "Withdrawn", verification: "Blocked", linkedState: "Restricted", lastSync: "Blocked", status: "Restricted" },
];

export const mockSecurityEvents: Phase12Record[] = [
  { id: "sec-001", actor: "Rohit Bansal", role: "Billing Executive", module: "Billing", action: "Refund export attempted", ipDevice: "10.0.4.18 / Chrome", severity: "Risk flagged", timestamp: "Today 11:16", sensitiveAccess: "Yes", status: "Risk flagged" },
  { id: "sec-002", actor: "Hospital Admin", role: "Hospital Admin", module: "Admin", action: "Permission matrix reviewed", ipDevice: "10.0.1.4 / Edge", severity: "Normal", timestamp: "Today 09:45", sensitiveAccess: "No", status: "Resolved" },
  { id: "sec-003", actor: "Unknown", role: "NA", module: "Login", action: "Blocked IP attempt", ipDevice: "203.0.113.42 / Unknown", severity: "Blocked", timestamp: "Today 08:12", sensitiveAccess: "Attempt", status: "Blocked" },
];

export const mockAccessReviews: Phase12Record[] = [
  { id: "acr-001", roleName: "Billing Executive", sensitivePermissions: "Refund, discount, export", reviewer: "Hospital Admin", lastChange: "Today 10:20", risk: "Warning", status: "Review pending" },
  { id: "acr-002", roleName: "Doctor", sensitivePermissions: "Clinical record, CDS review", reviewer: "Medical Director", lastChange: "Yesterday", risk: "Normal", status: "Resolved" },
  { id: "acr-003", roleName: "Super Admin", sensitivePermissions: "All modules", reviewer: "Board sign-off", lastChange: "7 days ago", risk: "Risk flagged", status: "Review pending" },
];

export const mockAuthPolicies: Phase12Record[] = [
  { id: "auth-001", policy: "MFA for privileged users", currentState: "Enabled placeholder", gap: "2 admins not enrolled", owner: "IT", due: "Today", status: "Warning" },
  { id: "auth-002", policy: "Password rotation", currentState: "90 days", gap: "No gap", owner: "Security", due: "Reviewed", status: "Resolved" },
  { id: "auth-003", policy: "Session timeout", currentState: "30 minutes", gap: "Mobile exception review", owner: "IT", due: "Tomorrow", status: "Review pending" },
];

export const mockSessions: Phase12Record[] = [
  { id: "ses-001", user: "Hospital Admin", device: "Chrome Windows", ip: "10.0.1.4", location: "Main campus", lastActivity: "Now", risk: "Normal", status: "Normal" },
  { id: "ses-002", user: "Billing Executive", device: "Unknown browser", ip: "10.0.4.18", location: "External VPN", lastActivity: "4 min ago", risk: "Suspicious", status: "Risk flagged" },
  { id: "ses-003", user: "Former staff", device: "Mobile", ip: "Blocked", location: "Unknown", lastActivity: "Denied", risk: "Blocked", status: "Force logout pending" },
];

export const mockDevices: Phase12Record[] = [
  { id: "dev-001", device: "Nurse station tablet", owner: "ICU", deviceId: "tab-****-22", trust: "Trusted", lastSeen: "Today", risk: "Normal", status: "Normal" },
  { id: "dev-002", device: "Unknown Android", owner: "Unclaimed", deviceId: "and-****-91", trust: "Untrusted", lastSeen: "Today 07:50", risk: "Risk flagged", status: "Blocked" },
];

export const mockBackups: Phase12Record[] = [
  { id: "bkp-001", backupSet: "Daily app data snapshot", schedule: "Daily 02:00", storage: "Encrypted placeholder", lastRun: "Today 02:04", restoreState: "Not requested", rpo: "24h", status: "Completed" },
  { id: "bkp-002", backupSet: "Document archive", schedule: "Hourly", storage: "Warm storage placeholder", lastRun: "Failed at 10:00", restoreState: "Not requested", rpo: "1h", status: "Failed" },
  { id: "bkp-003", backupSet: "DR drill", schedule: "Monthly", storage: "DR site placeholder", lastRun: "15 May 2026", restoreState: "Restore requested placeholder", rpo: "4h", status: "Drill pending" },
];

export const mockConsents: Phase12Record[] = [
  { id: "con-001", patient: "Meera J. / PLH-220908", consentType: "ABHA linking", source: "Patient registration", expiry: "20 May 2027", restriction: "None", status: "Active" },
  { id: "con-002", patient: "Sana K. / PLH-210076", consentType: "WhatsApp communication", source: "Mobile app", expiry: "Withdrawn today", restriction: "Block non-emergency", status: "Withdrawn" },
  { id: "con-003", patient: "Ravi K. / PLH-221114", consentType: "Remote monitoring", source: "IPD discharge", expiry: "In 6 days", restriction: "Renewal needed", status: "Expiring soon" },
];

export const mockCompliance: Phase12Record[] = [
  { id: "cmp-001", checklist: "Privacy policy review", owner: "Compliance officer", evidence: "Policy doc placeholder", dueDate: "Today", gap: "Legal hold section pending", readiness: "Gap", status: "Warning" },
  { id: "cmp-002", checklist: "Encryption coverage", owner: "IT", evidence: "Key report placeholder", dueDate: "Reviewed", gap: "Rotation due", readiness: "Partial", status: "Review pending" },
  { id: "cmp-003", checklist: "Release sign-off", owner: "Hospital Admin", evidence: "Final QA report", dueDate: "Before release", gap: "Accessibility check pending", readiness: "Blocked", status: "Blocked" },
];

export const mockRetentionIncidents: Phase12Record[] = [
  { id: "ret-001", policy: "OPD records retention", archiveState: "Archive placeholder", legalHold: "No", incident: "None", owner: "Compliance", resolution: "Reviewed", status: "Resolved" },
  { id: "ret-002", policy: "Visitor logs", archiveState: "Review due", legalHold: "No", incident: "Data minimization check", owner: "Security", resolution: "Pending", status: "Review pending" },
  { id: "ret-003", policy: "Privacy incident", archiveState: "Locked", legalHold: "Yes", incident: "Wrong recipient communication placeholder", owner: "Compliance", resolution: "Open", status: "Risk flagged" },
];

export const mockMobileViews: Phase12Record[] = [
  { id: "mob-001", roleView: "Doctor", primaryTasks: "OPD queue, rounds, prescription review", offlineState: "Pending sync placeholder", pushPermission: "Allowed", restrictedActions: 2, status: "Pending sync placeholder" },
  { id: "mob-002", roleView: "Nurse", primaryTasks: "Vitals, MAR, nursing notes", offlineState: "Available", pushPermission: "Allowed", restrictedActions: 1, status: "Available" },
  { id: "mob-003", roleView: "Patient", primaryTasks: "Appointments, reports, bills, profile", offlineState: "Restricted own data", pushPermission: "Blocked", restrictedActions: 4, status: "Restricted" },
  { id: "mob-004", roleView: "Management", primaryTasks: "Revenue, occupancy, alerts", offlineState: "Read-only", pushPermission: "Allowed", restrictedActions: 3, status: "Available" },
];

export const mockRemoteMonitoring: Phase12Record[] = [
  { id: "rm-001", patient: "Ravi K. / PLH-221114", device: "BP cuff placeholder", feedStatus: "Live placeholder", lastReading: "132/84, HR 82", threshold: "Normal", escalation: "None", status: "Available" },
  { id: "rm-002", patient: "Meera J. / PLH-220908", device: "Pulse ox placeholder", feedStatus: "Stale 42 min", lastReading: "SpO2 91%", threshold: "Low oxygen alert", escalation: "Nurse callback", status: "Escalated" },
  { id: "rm-003", patient: "Sana K. / PLH-210076", device: "Glucometer placeholder", feedStatus: "Offline", lastReading: "Yesterday", threshold: "Consent renewal", escalation: "Blocked", status: "Offline placeholder" },
];

export const mockAiItems: Phase12Record[] = [
  { id: "ai-001", surface: "Clinical assistant", patientContext: "Meera J. OPD", suggestion: "Consider reviewing lipid trend", confidence: "72% placeholder", modelVersion: "clinical-assist-v0", dataFreshness: "Today", reviewer: "Doctor", status: "Needs review" },
  { id: "ai-002", surface: "Voice prescription", patientContext: "OPD note", suggestion: "Transcript extracted 2 medicines", confidence: "86% placeholder", modelVersion: "voice-rx-v0", dataFreshness: "Live transcript", reviewer: "Doctor", status: "Draft" },
  { id: "ai-003", surface: "Radiology AI", patientContext: "CT chest study", suggestion: "Finding suggestion pending radiologist review", confidence: "64% placeholder", modelVersion: "rad-assist-v0", dataFreshness: "Study received today", reviewer: "Radiologist", status: "Suggested" },
  { id: "ai-004", surface: "Smart alerts", patientContext: "ICU bed 4", suggestion: "Sepsis risk escalation placeholder", confidence: "78% placeholder", modelVersion: "risk-v0", dataFreshness: "Vitals 15 min old", reviewer: "Nurse/Doctor", status: "Escalated" },
  { id: "ai-005", surface: "CDS", patientContext: "Prescription review", suggestion: "Allergy and interaction review", confidence: "Rule-based placeholder", modelVersion: "cds-rules-v0", dataFreshness: "Medication list current", reviewer: "Doctor", status: "Overridden" },
];

export const mockQaChecks: Phase12Record[] = [
  { id: "qa-001", area: "Responsive QA", coverage: "Phone/tablet/desktop/wide", finding: "No page-level horizontal scroll", owner: "Frontend", due: "Before release", residualRisk: "Low", status: "Passed" },
  { id: "qa-002", area: "Accessibility QA", coverage: "Keyboard, focus, contrast, labels", finding: "Screen-reader pass pending", owner: "QA", due: "Before release", residualRisk: "Medium", status: "In progress" },
  { id: "qa-003", area: "Performance QA", coverage: "Tables, drawers, skeletons, bundle placeholder", finding: "Large table virtualization future ticket", owner: "Frontend", due: "Waiver review", residualRisk: "Medium", status: "Waived placeholder" },
  { id: "qa-004", area: "Print/export QA", coverage: "Masking, print-safe layouts", finding: "Export backend pending", owner: "Product", due: "Future phase", residualRisk: "Known placeholder", status: "Passed" },
  { id: "qa-005", area: "Release readiness", coverage: "Blockers, sign-off, route coverage", finding: "Final sign-off pending", owner: "Hospital Admin", due: "Release gate", residualRisk: "Pending", status: "Blocked" },
];
