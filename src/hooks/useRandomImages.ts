import { useEffect, useState } from "react";

export interface ImageData {
  id: string;
  url: string;
  title: string;
  photographer: string;
}

interface UnsplashPhoto {
  id: string;
  urls: {
    regular: string;
  };
  alt_description: string | null;
  user: {
    name: string;
  };
}

/**
 * Fetches random images from Unsplash API
 * Falls back to Lorem Picsum if Unsplash is unavailable
 */
export function useRandomImages(count: number = 5) {
  const [images, setImages] = useState<ImageData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        setError(null);

        // Try Unsplash API first
        try {
          const unsplashImages = await fetchFromUnsplash(count);
          setImages(unsplashImages);
          return;
        } catch {
          console.log("Unsplash API failed, falling back to Lorem Picsum");
        }

        // Fallback to Lorem Picsum
        const loremImages = await fetchFromLoremPicsum(count);
        setImages(loremImages);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch images");
        // Provide fallback images even on error
        setImages(getPlaceholderImages(count));
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [count]);

  return { images, loading, error };
}

async function fetchFromUnsplash(count: number): Promise<ImageData[]> {
  const response = await fetch(
    `https://api.unsplash.com/photos/random?count=${count}&client_id=YOUR_UNSPLASH_API_KEY`,
    { signal: AbortSignal.timeout(5000) }
  );

  if (!response.ok) {
    throw new Error("Unsplash API error");
  }

  const data = await response.json() as UnsplashPhoto[];
  return Array.isArray(data) ? data.map((photo: UnsplashPhoto) => ({
    id: photo.id,
    url: photo.urls.regular,
    title: photo.alt_description || "Gallery image",
    photographer: photo.user.name,
  })) : [];
}

async function fetchFromLoremPicsum(count: number): Promise<ImageData[]> {
  const images: ImageData[] = [];

  for (let i = 0; i < count; i++) {
    const randomWidth = 600 + Math.floor(Math.random() * 200);
    const randomHeight = 400 + Math.floor(Math.random() * 200);
    const randomSeed = Math.floor(Math.random() * 10000);

    images.push({
      id: `picsum-${i}-${randomSeed}`,
      url: `https://picsum.photos/${randomWidth}/${randomHeight}?random=${randomSeed}`,
      title: `Gallery image ${i + 1}`,
      photographer: "Picsum Photos",
    });
  }

  return images;
}

function getPlaceholderImages(count: number): ImageData[] {
  return Array.from({ length: count }, (_, i) => ({
    id: `placeholder-${i}`,
    url: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect fill='%23ddd' width='600' height='400'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23999' font-size='24'%3EImage ${i + 1}%3C/text%3E%3C/svg%3E`,
    title: `Placeholder image ${i + 1}`,
    photographer: "Placeholder",
  }));
}
