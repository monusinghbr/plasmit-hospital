import { mockQaChecks } from "@/data/phase12";
import { SimpleWorkflowPage } from "@/features/phase12/phase12-pages";

export default function Page() {
  return <SimpleWorkflowPage module="qa" title="Accessibility QA" description="Keyboard, focus trap/return, contrast, labels, color-independent status, form errors, screen reader, and touch target checks." records={mockQaChecks.filter((item) => item.area === "Accessibility QA")} />;
}
