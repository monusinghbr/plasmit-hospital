import { mockMobileViews } from "@/data/phase12";
import { SimpleWorkflowPage } from "@/features/phase12/phase12-pages";

export default function Page() {
  return <SimpleWorkflowPage module="mobile" title="Patient Mobile App UI" description="Appointments, reports, prescriptions, bills, profile, notifications, own-data restriction, payment placeholder, and ABHA placeholder." records={mockMobileViews.filter((item) => item.roleView === "Patient")} />;
}
