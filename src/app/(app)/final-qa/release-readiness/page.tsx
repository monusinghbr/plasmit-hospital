import { mockQaChecks } from "@/data/phase12";
import { SimpleWorkflowPage } from "@/features/phase12/phase12-pages";

export default function Page() {
  return <SimpleWorkflowPage module="qa" title="Release Readiness" description="Phase completion, blockers, waivers, residual risks, sign-off owners, release notes placeholder, route coverage, and print-ready sign-off." records={mockQaChecks.filter((item) => item.area === "Release readiness")} />;
}
