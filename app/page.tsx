import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProductsSection } from "@/components/products-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <WhyChooseUsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
