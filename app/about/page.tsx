import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function AboutPage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight mb-6">About Zakka Shop</h1>

        <div className="aspect-video overflow-hidden rounded-lg mb-8">
          <Image
            src="/placeholder.svg?height=720&width=1280"
            alt="Our shop"
            width={1280}
            height={720}
            className="object-cover w-full"
          />
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg leading-relaxed">
            Welcome to Zakka Shop, where we celebrate the beauty of everyday objects. The Japanese concept of "zakka"
            refers to items that improve your home, life, and appearance without being overly complicated or expensive.
            It's about finding joy in the small things and appreciating thoughtful design.
          </p>

          <p className="leading-relaxed mt-4">
            Our journey began in 2018 when our founder, Mei, returned from a trip to Japan inspired by the attention to
            detail and thoughtfulness put into everyday items. She started curating a collection of beautiful,
            functional objects that bring warmth and character to any space.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Philosophy</h2>

          <p className="leading-relaxed">
            At Zakka Shop, we believe that the objects we surround ourselves with should be both beautiful and useful.
            We carefully select each item in our collection based on its design, quality, and the joy it brings to
            everyday life. We work directly with artisans and small manufacturers who share our values of craftsmanship
            and sustainability.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-muted mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-heart"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <h3 className="font-medium">Thoughtful Design</h3>
              <p className="text-sm text-muted-foreground mt-2">
                We believe in objects that are designed with intention and care.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-muted mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-recycle"
                >
                  <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" />
                  <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" />
                  <path d="m14 16-3 3 3 3" />
                  <path d="M8.293 13.596 4.5 9.5l1.879-3.339a1.83 1.83 0 0 1 1.581-.882h3.177" />
                  <path d="m18 2 3 3-3 3" />
                  <path d="M7 5h2.879a1.83 1.83 0 0 1 1.581.882l2.347 4.118" />
                </svg>
              </div>
              <h3 className="font-medium">Sustainability</h3>
              <p className="text-sm text-muted-foreground mt-2">
                We prioritize eco-friendly materials and ethical production.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-muted mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-sparkles"
                >
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                  <path d="M5 3v4" />
                  <path d="M19 17v4" />
                  <path d="M3 5h4" />
                  <path d="M17 19h4" />
                </svg>
              </div>
              <h3 className="font-medium">Joy in Simplicity</h3>
              <p className="text-sm text-muted-foreground mt-2">
                We celebrate the beauty found in simple, everyday objects.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Team</h2>

          <p className="leading-relaxed">
            We're a small team of design enthusiasts passionate about bringing beautiful, functional objects into your
            everyday life. Each member of our team contributes their unique perspective and expertise to curate a
            collection that resonates with our customers.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-8">
            <div className="text-center">
              <div className="aspect-square overflow-hidden rounded-full mb-4 mx-auto w-32 h-32">
                <Image
                  src="/placeholder.svg?height=128&width=128"
                  alt="Mei Chen"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <h3 className="font-medium">Mei Chen</h3>
              <p className="text-sm text-muted-foreground">Founder & Creative Director</p>
            </div>
            <div className="text-center">
              <div className="aspect-square overflow-hidden rounded-full mb-4 mx-auto w-32 h-32">
                <Image
                  src="/placeholder.svg?height=128&width=128"
                  alt="Akira Tanaka"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <h3 className="font-medium">Akira Tanaka</h3>
              <p className="text-sm text-muted-foreground">Product Curator</p>
            </div>
            <div className="text-center">
              <div className="aspect-square overflow-hidden rounded-full mb-4 mx-auto w-32 h-32">
                <Image
                  src="/placeholder.svg?height=128&width=128"
                  alt="Sofia Martinez"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <h3 className="font-medium">Sofia Martinez</h3>
              <p className="text-sm text-muted-foreground">Customer Experience</p>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="bg-muted/50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Visit Our Store</h2>
            <p className="mb-4">
              We'd love to meet you in person! Visit our physical store to explore our full collection and experience
              the beauty of zakka items firsthand.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium mb-2">Store Hours</h3>
                <p className="text-sm text-muted-foreground">
                  Monday - Friday: 10am - 7pm
                  <br />
                  Saturday: 10am - 6pm
                  <br />
                  Sunday: 12pm - 5pm
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Location</h3>
                <p className="text-sm text-muted-foreground">
                  123 Design District
                  <br />
                  Portland, OR 97205
                  <br />
                  United States
                </p>
              </div>
            </div>
            <div className="mt-4">
              <Link href="/contact">
                <Button variant="outline" className="gap-1">
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

