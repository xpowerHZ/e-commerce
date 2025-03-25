"use client"
import { useState, useEffect } from "react"
import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { SearchIcon } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Search() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Get initial value from URL
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "")

  // Update state when URL search param changes
  useEffect(() => {
    const currentSearchParam = searchParams.get("search") || ""
    setSearchQuery(currentSearchParam)
  }, [searchParams])

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (pathname !== "/products") {
      router.push(`/products?search=${encodeURIComponent(searchQuery)}`)
    } else {
      // On the products page, update the URL without full navigation
      const params = new URLSearchParams(searchParams.toString())
      if (searchQuery) {
        params.set("search", searchQuery)
      } else {
        params.delete("search")
      }
      const newUrl = `${pathname}?${params.toString()}`
      router.push(newUrl, { scroll: false })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-sm">
      <div className="relative flex w-full items-center">
        <Input
          type="search"
          placeholder="Search products..."
          className="w-full appearance-none bg-background pr-10 md:w-[200px] lg:w-[300px]"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button type="submit" size="icon" variant="ghost" className="absolute right-0 top-0 h-full px-3">
          <SearchIcon className="h-4 w-4 text-muted-foreground" />
          <span className="sr-only">Search</span>
        </Button>
      </div>
    </form>
  )
}

