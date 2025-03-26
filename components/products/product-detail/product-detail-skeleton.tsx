import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const ProductImageSkeleton = () => {
  return (
    <div className="overflow-hidden rounded-lg">
      <Skeleton className="w-full h-[600px] object-cover" />
    </div>
  );
};

export const ProductDetailSkeleton = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* Title and Category Skeleton */}
      <div>
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-4 w-1/2 mt-2" />
      </div>

      {/* Price Skeleton */}
      <Skeleton className="h-6 w-24" />

      <Separator className="my-4" />

      {/* Quantity Selector Skeleton */}
      <Skeleton className="h-10 w-full" />

      <Separator className="my-4" />

      {/* Tabs Skeleton */}
      <Tabs defaultValue="description">
        <TabsList>
          <TabsTrigger value="description">
            <Skeleton className="h-4 w-16" />
          </TabsTrigger>
          <TabsTrigger value="details">
            <Skeleton className="h-4 w-16" />
          </TabsTrigger>
          <TabsTrigger value="shipping">
            <Skeleton className="h-4 w-16" />
          </TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="pt-4">
          <Skeleton className="h-20 w-full" />
        </TabsContent>
        <TabsContent value="details" className="pt-4">
          <Skeleton className="h-20 w-full" />
        </TabsContent>
        <TabsContent value="shipping" className="pt-4">
          <Skeleton className="h-20 w-full" />
        </TabsContent>
      </Tabs>
    </div>
  );
};
