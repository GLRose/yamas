import Image from "next/image"
import { Award, ShieldCheck, Factory, Calendar } from "lucide-react"

const credentials = [
  { icon: ShieldCheck, label: "Organic & PDO Certified" },
  { icon: Award, label: "Award-Winning Quality" },
  { icon: Factory, label: "Large Production Capacity" },
  { icon: Calendar, label: "50+ Years Experience" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-medium tracking-widest text-primary uppercase mb-4">Our Partnership</p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6 text-balance">
              Direct from Greece's Finest Olive Groves all the way from Mykonos, Zakynthos, and Serres.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
              We've partnered directly with one of Greece's most respected olive oil producers, a family operation
              spanning three generations. Our producer holds FDA, and PDO certifications, ensuring every bottle
              meets the highest international standards.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              With state-of-the-art facilities and traditional harvesting methods, we guarantee consistent quality,
              competitive pricing, and reliable supply for importers and distributors worldwide.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {credentials.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
            <Image src="/olive-oil-production-facility-with-stainless-steel.jpg" alt="Olive oil production facility" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
