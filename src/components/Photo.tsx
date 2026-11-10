import { useEffect, useMemo, useState, type ImgHTMLAttributes } from "react";
import { asset, DEFAULT_FALLBACK, EMERGENCY_IMAGE } from "../lib/assets";
import { cn } from "../utils/cn";

type PhotoProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  src: string;
  fallback?: string;
};

export function Photo({
  src,
  fallback = DEFAULT_FALLBACK,
  className,
  alt = "",
  onError,
  loading = "lazy",
  decoding = "async",
  ...props
}: PhotoProps) {
  const sources = useMemo(
    () => [asset(src), asset(fallback), EMERGENCY_IMAGE],
    [src, fallback]
  );
  const [sourceIndex, setSourceIndex] = useState(0);

  useEffect(() => setSourceIndex(0), [src, fallback]);

  return (
    <img
      {...props}
      src={sources[sourceIndex]}
      alt={alt}
      loading={loading}
      decoding={decoding}
      referrerPolicy="no-referrer"
      className={cn(className)}
      onError={(event) => {
        if (sourceIndex < sources.length - 1) setSourceIndex((index) => index + 1);
        onError?.(event);
      }}
    />
  );
}
