'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

interface SafeImageProps extends Omit<ImageProps, 'src'> {
  src: string;
  fallbackClassName?: string;
}

export default function SafeImage({ src, alt, className, fallbackClassName = 'bg-[#152e20]', ...props }: SafeImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={`w-full h-full ${fallbackClassName} flex items-center justify-center p-4`}>
        <span className="text-pure-white/40 text-xs md:text-sm font-semibold uppercase tracking-widest text-center">
          Image Asset Missing
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      {...props}
    />
  );
}
