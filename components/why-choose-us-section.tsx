import { Handshake, TrendingDown, Truck, ShieldCheck } from "lucide-react"

const advantages = [
  {
    icon: Handshake,
    title: "Direct Producer Relationship",
    description: "No middlemen. We work directly with our producer, ensuring quality control and competitive pricing.",
  },
  {
    icon: TrendingDown,
    title: "Competitive Pricing",
    description: "Direct sourcing allows us to offer wholesale rates that help your business margins.",
  },
  {
    icon: Truck,
    title: "Reliable Supply Chain",
    description: "Consistent stock availability with flexible order quantities to match your demand.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Guarantees",
    description: "Full documentation, lab reports, and certifications provided with every shipment.",
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest text-primary-foreground/70 uppercase mb-4">
            Our Advantages
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">Why Partner With Us</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((item) => (
            <div key={item.title} className="text-center">
              <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-5">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="font-medium text-lg mb-3">{item.title}</h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
