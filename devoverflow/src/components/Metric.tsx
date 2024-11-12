import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface MetricProps {
  imgUrl: string; // URL for the image (avatar, icon, etc.)
  alt: string; // Alt text for the image
  value: string | number; // Displayed value, e.g., author's name or upvotes count
  title: string; // Title or description text
  href?: string; // Optional link to wrap around the component
  isAuthor?: boolean; // Optional flag indicating if this is an author metric
  textStyles?: string; // Optional string for custom text styles (CSS classes)
  imgStyles?: string;
}

const Metric = ({
  imgUrl,
  alt,
  value,
  title,
  href,
  textStyles,
  imgStyles,
  isAuthor,
}: MetricProps) => {
  const metricContent = (
    <>
      <Image
        src={imgUrl}
        alt={alt}
        height={16}
        width={16}
        className={cn("rounded-full object-contain", imgStyles)}
      />
      <span className={cn(textStyles, "flex gap-1")}>
        {value}{" "}
        <span
          className={cn(
            "small-regular line-clamp-1",
            isAuthor && "max-sm:hidden"
          )}
        >
          {title}
        </span>
      </span>
    </>
  );
  return href ? (
    <Link
      href={href}
      className="flex-center gap-1"
    >
      {metricContent}
    </Link>
  ) : (
    <div className="flex-center gap-1">{metricContent}</div>
  );
};

export default Metric;
