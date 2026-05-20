import { mockIntegrations } from "@/data/phase12";
import { SimpleWorkflowPage } from "@/features/phase12/phase12-pages";

export default function Page() {
  return <SimpleWorkflowPage module="integrations" title="Payment Gateway Integration" description="Gateway settings placeholder, transaction sync, failed payment queue, reconciliation placeholder, failed reason, and Phase 10 billing handoff." records={mockIntegrations.filter((item) => String(item.connector).includes("ERP") || String(item.connector).includes("ABHA"))} />;
}
