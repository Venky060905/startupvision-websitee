import type { Metadata } from "next";
import HomeClient from "./home-client";

export const metadata: Metadata = {
  title: "StartupVision | Business Consulting for Indian Startups & MSMEs",
  description:
    "StartupVision helps startups and MSMEs with Startup India, MSME registration, GST, funding, incubation and compliance services.",
  keywords: [
    "Startup consulting India",
    "MSME registration",
    "Startup India certificate",
    "GST filing",
    "Business funding India",
    "Incubation centers India",
  ],
};

export default function Page() {
  return <HomeClient />;
}
