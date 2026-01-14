import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const products = [
  {
    name: "Extra Virgin Olive Oil",
    description: "Cold-pressed, first extraction. Acidity <0.5%. Rich, fruity flavor profile.",
    image: "/chryselia.jpeg",
    tags: ["Organic Available", "PDO Certified", "FDA Certified"],
  },
  {
    name: "Classic Olive Oil",
    description: "Certified field rotated cultivation. Acidity <0.3%.",
    image: "/chryselia_classic.jpg",
    tags: ["Clean Taste", "Great for Cooking"],
  },
  {
    name: "Zeta-Theta",
    description: "Flexible packaging options. Custom branding.",
    image: "/bulk-olive-oil-stainless-steel-containers-industri.jpg",
    tags: ["Custom Packaging", "White Label", "Health Supplement", "Polyphenols"],
  },
]

const specifications = [
  { label: "Acidity Levels", value: "0.2% - 0.5%" },
  { label: "Harvest Method", value: "Mechanical" },
  { label: "Storage", value: "Controlled" },
  { label: "Packaging", value: "500ml - 5L & Bulk" },
]

export function ProductsSection() {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest text-primary uppercase mb-4">Product Range</p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6">Our Olive Oil Selection</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From premium extra virgin to bulk supply, we offer flexible options to meet your import requirements.
            Samples available upon request.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {products.map((product) => (
            <Card key={product.name} className="overflow-hidden border-border/50 bg-card">
              <div className="relative aspect-square">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-medium text-foreground mb-2">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{product.description}</p>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs font-medium">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-secondary rounded-lg p-8">
          <h3 className="font-serif text-2xl font-medium text-foreground mb-6 text-center">Key Specifications</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {specifications.map((spec) => (
              <div key={spec.label} className="text-center">
                <p className="text-sm text-muted-foreground mb-1">{spec.label}</p>
                <p className="font-medium text-foreground">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
