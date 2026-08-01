import Image from "next/image";

type FakeImageProps = {
  width: number;
  height: number;
  seed?: string | number;
  grayscale?: boolean;
  blur?: boolean;
  alt?: string;
  className?: string;
};

export default function FakeImage({
  width,
  height,
  seed,
  grayscale = false,
  blur = false,
  alt = "",
  className,
}: FakeImageProps) {
  const params = new URLSearchParams();
  if (grayscale) params.set("grayscale", "");
  if (blur) params.set("blur", "");

  const base = seed !== undefined ? `https://picsum.photos/seed/${seed}/${width}/${height}` : `https://picsum.photos/${width}/${height}`;
  const query = params.toString();
  const src = query ? `${base}?${query}` : base;

  return <Image src={src} alt={alt} width={width} height={height} className={className} />;
}
