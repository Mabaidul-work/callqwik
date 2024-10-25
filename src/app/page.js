import {
  Footer,
  Header,
  HeroSection,
  Pricing,
  SalesChallanges,
  Testimonials,
  WorkingSteps,
} from "@/components";
import { CompanyList } from "@/components/ui";
import { integrationCompanies, trustedCompanies } from "@/constants/data";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <CompanyList
        companies={trustedCompanies}
        sectionHeaderName={"Trusted by B2B companies globally"}
        marqueeEffect={false}
        headerTextSizes="text-xl md:text-2xl lg:text-3xl"
      />
      <SalesChallanges />
      <WorkingSteps />

      <CompanyList
        companies={integrationCompanies}
        sectionHeaderName={"Integrations"}
        marqueeEffect={false}
        headerTextSizes="text-2.5xl md:text-3xl lg:text-5.5xl"
      />

      <Pricing />

      <Testimonials />
      <Footer />
    </div>
  );
}
