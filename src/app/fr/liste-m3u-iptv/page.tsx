import SeoPage, { seoMetadata } from "../../../components/SeoPage";
import { getSeoPage } from "../../../data/seo";

const page = getSeoPage("/fr/liste-m3u-iptv");

export const metadata = seoMetadata(page);

export default function Page() {
  return <SeoPage page={page} />;
}
