"use client";

import WhoIsXyndrix from "../Components/ui/who-is-xyndrix";
import VisionMissionSection from "../Components/ui/vision-mission-section";
import CustomerLogoMarquee from "../Components/ui/customer-logo-marquee";
import StatsSection from "../Components/ui/animated-stats-hero";

function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black">
      {/* Who is Xyndrix Section */}
      <WhoIsXyndrix />

      {/* Vision & Mission Section */}
      <VisionMissionSection />

      {/* Our Impact in Numbers */}
      <StatsSection />

      {/* Our Trusted Partners */}
      <CustomerLogoMarquee
        customLogos={[
          {
            id: "karupa",
            name: "Karupa Foundation",
            src: "https://karupafoundation.com/images/logo%20final.jpg",
          },
          {
            id: "kahe",
            name: "KAHE",
            src: "https://img.kompass.com/sys-master-images/h24/h5a/9687875125278/kahe-jpg",
          },
          {
            id: "surya",
            name: "Surya Coconut",
            src: "https://www.suryacoconut.shop/assets/surya-logo-D7BLbdcg.png",
          },
          {
            id: "sevvel-shelters",
            name: "Sevvel Shelters",
            src: "/sevvel-shelters-logo.png",
          },
        ]}
        title="Our Trusted Partners"
        subtitle="Organizations that trust us to deliver innovative digital solutions"
        speed={2.3}
      />
    </div>
  );
}

export default AboutPage;