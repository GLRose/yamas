export function Footer() {
  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-serif text-xl font-semibold tracking-wide">YAMAS</span>
            <p className="text-background/70 text-sm mt-1">Premium Greek Olive Oil</p>
          </div>

          <div className="flex items-center gap-8 text-sm">
            <a href="#about" className="text-background/70 hover:text-background transition-colors">
              About
            </a>
            <a href="#products" className="text-background/70 hover:text-background transition-colors">
              Products
            </a>
            <a href="#contact" className="text-background/70 hover:text-background transition-colors">
              Contact
            </a>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8">
          <p className="text-center text-background/50 text-sm">
            © {new Date().getFullYear()} Yamas Exports. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
