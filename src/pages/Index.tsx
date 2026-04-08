import usePageSEO from "@/hooks/use-page-seo";
import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import PhotoStrip from "@/components/home/PhotoStrip";
import ClientLogos from "@/components/home/ClientLogos";
import CoreServicesOverview from "@/components/home/CoreServicesOverview";
import StatsSection from "@/components/home/StatsSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import ProcessSection from "@/components/home/ProcessSection";
import CertificationsSection from "@/components/home/CertificationsSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import BeforeAfterSection from "@/components/home/BeforeAfterSection";
import GalleryPreview from "@/components/home/GalleryPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";
import MapSection from "@/components/home/MapSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  usePageSEO({ title: "Laboratory Equipment Manufacturer Bhopal", description: "I-Lab - Leading manufacturer of laboratory equipment, furniture, water treatment plants, chemicals & clean room systems in Bhopal, Madhya Pradesh since 2009. ISO certified, 500+ clients across India.", keywords: "laboratory equipment manufacturer Bhopal, lab equipment supplier India, water treatment plant manufacturer Bhopal, clean room manufacturer Madhya Pradesh, laminar airflow manufacturer, lab furniture Bhopal, ETP STP manufacturer, water treatment chemicals, biochemical production lab, mushroom spawn lab", canonical: "https://ilabgroup.in/" });
  return (
    <Layout>
      <HeroSection />
      <PhotoStrip />
      <ClientLogos />
      <CoreServicesOverview />
      <StatsSection />
      <IndustriesSection />
      <ProcessSection />
      <CertificationsSection />
      <WhyChooseUs />
      <FeaturedProducts />
      <BeforeAfterSection />
      <GalleryPreview />
      <TestimonialsSection />
      <FAQSection />
      <MapSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
