import { mockMobileViews } from "@/data/phase12";
import { SimpleWorkflowPage } from "@/features/phase12/phase12-pages";

export default function Page() {
  return <SimpleWorkflowPage module="mobile" title="Management Mobile App UI" description="Executive summary, revenue, occupancy, claims, receivables, alerts, restricted drill-down, and mobile sign-off placeholders." records={mockMobileViews.filter((item) => item.roleView === "Management")} />;
}
