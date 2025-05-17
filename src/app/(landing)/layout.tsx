import FooterSection from "@/components/sections/footer-section"
import { Navbar } from "@/components/layout/navbar"

export default function LandingLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return(
        <>
            <Navbar />
            {children}
            <FooterSection />
        </>
    )
}