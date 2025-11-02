import { Skeleton } from "@/components/ui/skeleton";

/**
 * Skeleton component voor het laden van de project grid.
 * Toont 6 placeholder kaarten met afbeeldingen, titels, beschrijvingen en tags.
 * Gebruikt shadcn/ui Skeleton component voor consistente styling.
 */
export function ProjectGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="space-y-4">
          <Skeleton className="h-48 w-full rounded-lg" />
          <div className="space-y-2">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
          <div className="flex gap-2">
            <Skeleton className="h-6 w-16 rounded-full" />
            <Skeleton className="h-6 w-20 rounded-full" />
            <Skeleton className="h-6 w-14 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * Skeleton component voor het laden van de hero sectie.
 * Toont placeholders voor avatar, naam, bio, social links, beschrijving en CTA knoppen.
 * Matcht de layout van de echte HeroSection component.
 */
export function HeroSkeleton() {
  return (
    <div className="w-full max-w-5xl flex flex-col lg:flex-row items-center justify-center gap-12 py-12 lg:py-28">
      <div className="flex flex-col gap-4 items-center text-center lg:w-1/3">
        <Skeleton className="w-48 h-48 rounded-full" />
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-6 w-64" />
        <div className="flex gap-4">
          <Skeleton className="w-10 h-10 rounded-full" />
          <Skeleton className="w-10 h-10 rounded-full" />
          <Skeleton className="w-10 h-10 rounded-full" />
        </div>
      </div>
      <div className="lg:w-2/3 space-y-6">
        <div className="space-y-4">
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-3/4" />
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Skeleton className="h-12 w-40" />
          <Skeleton className="h-12 w-40" />
        </div>
      </div>
    </div>
  );
}
