import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRandomImages } from "@/hooks/useRandomImages";

interface PhotoCarouselProps {
  imageCount?: number;
  autoPlayInterval?: number;
  showThumbnails?: boolean;
}

export function PhotoCarousel({
  imageCount = 5,
  autoPlayInterval = 5000,
  showThumbnails = true,
}: PhotoCarouselProps) {
  const { images, loading } = useRandomImages(imageCount);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Auto-play carousel
  useEffect(() => {
    if (!autoPlay || images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, images.length, autoPlayInterval]);

  if (loading) {
    return (
      <div className="flex h-[20rem] sm:h-[28rem] lg:h-[36rem] w-full items-center justify-center bg-linear-to-r from-[#f0f7ff] to-[#e8f2ff]">
        <div className="text-center">
          <div className="mb-4 inline-block h-12 w-12 animate-spin rounded-full border-4 border-[#ddd] border-t-primary"></div>
          <p className="text-[#355779]">Loading gallery...</p>
        </div>
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className="flex h-[20rem] sm:h-[28rem] lg:h-[36rem] w-full items-center justify-center bg-linear-to-r from-[#f0f7ff] to-[#e8f2ff]">
        <p className="text-[#355779]">Unable to load gallery images</p>
      </div>
    );
  }

  const currentImage = images[currentIndex];

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setAutoPlay(false);
    // Resume autoplay after 10 seconds of manual interaction
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  // Touch handlers for mobile swiping
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.changedTouches[0].clientX);
    handleSwipe();
  };

  const handleSwipe = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  return (
    <div className="space-y-4">
      {/* Main Carousel */}
      <div
        className="group relative h-[20rem] sm:h-[28rem] lg:h-[36rem] w-full overflow-hidden rounded-lg shadow-lg"
        onMouseEnter={() => setAutoPlay(false)}
        onMouseLeave={() => setAutoPlay(true)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Current Image */}
        <div className="relative h-full w-full">
          <img
            src={currentImage.url}
            alt={currentImage.title}
            className="h-full w-full object-cover transition-opacity duration-500"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src =
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400'%3E%3Crect fill='%23ddd' width='800' height='400'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23999' font-size='24'%3EImage failed to load%3C/text%3E%3C/svg%3E";
            }}
          />

          {/* Overlay with info */}
          <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black via-black/50 to-transparent px-6 py-4 text-white">
            <p className="text-sm font-medium">{currentImage.title}</p>
            <p className="text-xs text-gray-300">
              Photo by {currentImage.photographer}
            </p>
          </div>

          {/* Slide counter */}
          <div className="absolute right-4 top-4 rounded-full bg-black/50 px-3 py-1 text-sm text-white">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {/* Previous Button */}
        <button
          type="button"
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-primary opacity-100 sm:opacity-0 sm:transition-all sm:duration-200 sm:hover:bg-white sm:group-hover:opacity-100"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-primary opacity-100 sm:opacity-0 sm:transition-all sm:duration-200 sm:hover:bg-white sm:group-hover:opacity-100"
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Thumbnails */}
      {showThumbnails && (
        <div className="flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {images.map((image, index) => (
            <button
              key={image.id}
              onClick={() => goToSlide(index)}
              className={`relative h-20 w-24 shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-200 ${
                index === currentIndex
                  ? "border-primary shadow-md"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              <img
                src={image.url}
                alt={`Thumbnail ${index + 1}`}
                className="h-full w-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='80'%3E%3Crect fill='%23ddd' width='100' height='80'/%3E%3C/svg%3E";
                }}
              />
            </button>
          ))}
        </div>
      )}

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-primary"
                : "w-2 bg-[#d6e3f2] hover:bg-[#a8c5e3]"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
