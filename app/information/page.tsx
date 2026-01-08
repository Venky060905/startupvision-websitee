import type { Metadata } from "next";
import InformationPage from "@/components/information-page";

export const metadata: Metadata = {
  title: "Information & Schemes",
  description:
    "Explore MSME schemes, Startup India benefits, GST compliance, ITR filing, NAIF funding and MSME loans.",
  keywords: [
    "MSME schemes",
    "Startup India benefits",
    "GST compliance",
    "ITR filing India",
    "NAIF funding",
  ],
};

export default function Page() {
  return <InformationPage />;
}
