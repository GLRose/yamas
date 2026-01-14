import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/beautiful-greek-olive-grove-landscape-with-olive-t.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <nav className="absolute top-0 left-0 right-0 px-6 py-6">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <span className="font-serif text-2xl text-background font-semibold tracking-wide">YAMAS</span>
              <a
                href="#contact"
                className="text-background/90 hover:text-background text-sm font-medium tracking-wide transition-colors"
              >
                Contact
              </a>
            </div>
          </nav>

          <div className="max-w-3xl pt-20">
            <h1 className="font-serif text-5xl md:text-7xl text-background font-medium leading-tight text-balance mb-6">
              Premium Greek Olive Oil for Import
            </h1>
            <p className="text-lg md:text-xl text-background/90 leading-relaxed mb-10 max-w-2xl">
              Partnered with Greece's largest olive oil producer — FDA certified Extra Virgin Olive Oil, extensive lab testing, and consistency certified.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-background text-foreground hover:bg-background/90 font-medium px-8"
                asChild
              >
                <a href="#contact">Request Samples</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-background text-background hover:bg-background/10 font-medium px-8 bg-transparent"
                asChild
              >
                <a href="#products">View Products</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
