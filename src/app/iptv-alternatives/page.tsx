import SeoPage, { seoMetadata } from "../../components/SeoPage";
import { getSeoPage } from "../../data/seo";

const page = getSeoPage("/iptv-alternatives");

export const metadata = seoMetadata(page);

export default function Page() {
  return <SeoPage page={page} />;
}
