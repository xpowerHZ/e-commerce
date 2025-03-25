import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { NewsLetter } from "./components/NewsLetter";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { FeaturedCategories } from "./components/FeaturedCategories";
import { HomeHero } from "./components/HomeHero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HomeHero />

      {/* Featured Categories */}
      <FeaturedCategories categories={categories} />

      {/* Featured Products */}
      <FeaturedProducts featuredProducts={featuredProducts} />

      {/* Newsletter */}
      <NewsLetter />
    </div>
  );
}

const categories = [
  {
    name: "Kitchen",
    slug: "kitchen",
    image: "/placeholder.svg?height=600&width=600",
  },
  {
    name: "Home Decor",
    slug: "home-decor",
    image: "/placeholder.svg?height=600&width=600",
  },
  {
    name: "Stationery",
    slug: "stationery",
    image: "/placeholder.svg?height=600&width=600",
  },
];

const featuredProducts = [
  {
    id: "1",
    name: "Ceramic Tea Set",
    category: "Kitchen",
    price: 45.99,
    image: "/placeholder.svg?height=500&width=500",
  },
  {
    id: "2",
    name: "Linen Table Runner",
    category: "Home Decor",
    price: 28.5,
    image: "/placeholder.svg?height=500&width=500",
  },
  {
    id: "3",
    name: "Wooden Desk Organizer",
    category: "Stationery",
    price: 32.99,
    image: "/placeholder.svg?height=500&width=500",
  },
  {
    id: "4",
    name: "Handcrafted Planter",
    category: "Home Decor",
    price: 24.99,
    image: "/placeholder.svg?height=500&width=500",
  },
];
