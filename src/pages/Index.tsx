import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BestsellersSection from "@/components/BestsellersSection";
import RecentlyViewedSection from "@/components/RecentlyViewedSection";
import GiftNotesSection from "@/components/GiftNotesSection";
import FeaturedCollectionsSection from "@/components/FeaturedCollectionsSection";
import ExploreCollectionSection from "@/components/ExploreCollectionSection";
import GiftsCelebrateSection from "@/components/GiftsCelebrateSection";
import CraftsmanshipSection from "@/components/CraftsmanshipSection";
import NotJustTrendSection from "@/components/NotJustTrendSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import InstagramSection from "@/components/InstagramSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <Header />
      <main>
        <HeroSection />
        <BestsellersSection />
        <RecentlyViewedSection />
        <GiftNotesSection />
        <FeaturedCollectionsSection />
        <ExploreCollectionSection />
        <GiftsCelebrateSection />
        <CraftsmanshipSection />
        <NotJustTrendSection />
        <TestimonialsSection />
        <InstagramSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
