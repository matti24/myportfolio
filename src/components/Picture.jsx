const srcSet = (image, ext) =>
  image.widths.map((w) => `/images/${image.base}-${w}.${ext} ${w}w`).join(", ");

export function Picture({ image, alt, sizes, eager = false, className = "" }) {
  const largest = image.widths[image.widths.length - 1];
  return (
    <picture>
      <source type="image/avif" srcSet={srcSet(image, "avif")} sizes={sizes} />
      <source type="image/webp" srcSet={srcSet(image, "webp")} sizes={sizes} />
      <img
        src={`/images/${image.base}-${largest}.webp`}
        alt={alt}
        width={image.width}
        height={image.height}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : undefined}
        decoding="async"
        className={className}
      />
    </picture>
  );
}
