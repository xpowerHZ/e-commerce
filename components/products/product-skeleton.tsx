import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export const ProductSkeleton = () => {
  return (
    <Card className="h-full overflow-hidden border-0 shadow-sm transition-all hover:shadow-md">
      <div className="aspect-square relative overflow-hidden">
        <Skeleton className="h-full w-full absolute bg-neutral-100 dark:bg-neutral-800" />
      </div>
      <CardContent className="p-4">
        <Skeleton className="h-5 w-3/4 mb-2 bg-neutral-100 dark:bg-neutral-800" />
        <Skeleton className="h-4 w-1/2 mb-3 bg-neutral-100 dark:bg-neutral-800" />
        <Skeleton className="h-5 w-1/4 mt-2 bg-neutral-100 dark:bg-neutral-800" />
      </CardContent>
    </Card>
  )
}