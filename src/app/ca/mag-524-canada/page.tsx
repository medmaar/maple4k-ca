import SeoPage, { seoMetadata } from "@/components/SeoPage";
import { getSeoPage } from "@/data/seo";

const page = getSeoPage("/ca/mag-524-canada");

export const metadata = seoMetadata(page);

export default function Page() {
  return <SeoPage page={page} />;
}
