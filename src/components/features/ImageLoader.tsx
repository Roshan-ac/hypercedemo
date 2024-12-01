import { Skeleton } from "@/components/ui/skeleton"

interface ImageLoaderProps {
  count?: number;
}

export const ImageLoader: React.FC<ImageLoaderProps> = ({ count = 4 }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {Array.from({ length: count }).map((_, index) => (
        <div 
          key={index} 
          className="relative group block overflow-hidden rounded"
        >
          <div className="overflow-hidden aspect-square">
            <Skeleton className="w-full h-full object-cover rounded" />
          </div>
          <div className="absolute left-3 top-3">
            <Skeleton className="sm:px-3 sm:py-1.5 px-1.5 py-1 w-20 h-6 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default ImageLoader