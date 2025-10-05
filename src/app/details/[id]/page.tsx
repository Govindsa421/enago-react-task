import { getPaper } from "@/services/api";
import BackButton from "@/components/details/BackButton";
import NotFoundPage from "@/components/details/NotFoundPage";
import PaperDetailContent from "@/components/details/PaperDetailContent";

export default async function PaperDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const paper = await getPaper(id);

  if (!paper) {
    return <NotFoundPage />;
  }

  return (
    <div className="container">
      <BackButton />
      <PaperDetailContent paper={paper} />
    </div>
  );
}
