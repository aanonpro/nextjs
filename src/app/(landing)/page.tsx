import HeroSection from "@/components/sections/hero-section";
import PricingComparatorSection from "@/components/sections/pricing-comparator-section";
import PricingSection from "@/components/sections/pricing-section";
import TestimonialSection from "@/components/sections/testimonial-section";
import StatsSection from "@/components/sections/stats-section";

export default function Page() {
    return (
        // <h2 className="text-center text-2xl">Welcome to landing page</h2>
        <>
            <HeroSection />
            <StatsSection />

            <PricingSection />

            <PricingComparatorSection />

            {/* <TestimonialSection /> */}

        </>
    )
}