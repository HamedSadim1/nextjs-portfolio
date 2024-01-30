import Card from "@/components/Card";
import PageTitle from "@/components/PageTitle";

export default function ProjectsPage() {
  return (
    <div>
      <PageTitle title="Projects" />
      <div className="flex flex-wrap gap-3 p-5 justify-between">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
