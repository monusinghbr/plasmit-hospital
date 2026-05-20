import { mockMobileViews } from "@/data/phase12";
import { SimpleWorkflowPage } from "@/features/phase12/phase12-pages";

export default function Page() {
  return <SimpleWorkflowPage module="mobile" title="Nurse Mobile App UI" description="Nurse task list, vitals, MAR review, nursing notes, escalation alerts, ward/bed context, offline sync, and push placeholders." records={mockMobileViews.filter((item) => item.roleView === "Nurse")} />;
}
