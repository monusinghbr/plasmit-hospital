import { mockMobileViews } from "@/data/phase12";
import { SimpleWorkflowPage } from "@/features/phase12/phase12-pages";

export default function Page() {
  return <SimpleWorkflowPage module="mobile" title="Doctor Mobile App UI" description="Doctor dashboard, OPD queue, rounds, prescription review, assigned patient context, critical alerts, offline sync, and restricted action placeholders." records={mockMobileViews.filter((item) => item.roleView === "Doctor")} />;
}
