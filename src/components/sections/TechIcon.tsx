"use client";

import { useState } from "react";
import { getTechIconUrl } from "@/lib/tech-icons";

interface TechIconProps {
  name: string;
  size?: number;
  className?: string;
}

export default function TechIcon({ name, size = 20, className = "" }: TechIconProps) {
  const [failed, setFailed] = useState(false);
  const url = getTechIconUrl(name);

  if (!url || failed) {
    return (
      <span
        className={`inline-flex items-center justify-center rounded-md bg-primary/15 text-primary font-bold shrink-0 ${className}`}
        style={{ width: size, height: size, fontSize: size * 0.45 }}
        aria-hidden
      >
        {name.charAt(0)}
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={url}
      alt=""
      width={size}
      height={size}
      className={`shrink-0 object-contain ${className}`}
      onError={() => setFailed(true)}
      loading="lazy"
      decoding="async"
    />
  );
}
