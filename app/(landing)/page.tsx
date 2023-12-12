import LandingContent from "@/components/landing-content";
import { LandingNavbar } from "@/components/landing-navbar";
import LandingHero from "@/components/langding-hero";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
    return ( 
    <div className="h-full">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
      </div>
     );
}
 
export default LandingPage;