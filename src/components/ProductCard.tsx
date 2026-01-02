"use client";

import { useState } from "react";
import Image from "next/image";
import { TwitterIcon } from "./Icons";
import ImageLightbox from "./Imagelightbox";
import { useLanguage } from "./LanguageProvider";
import { type Product } from "@/data/products";
import { siteConfig } from "@/lib/config";
import { formatPrice, generateTwitterDMLink } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const { t } = useLanguage();

  const dmLink = generateTwitterDMLink(siteConfig.twitterHandle, product.name);

  // Use images array if available, otherwise use single image
  const allImages = product.images && product.images.length > 0
    ? product.images
    : [product.image];

  const handleImageClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setSelectedImageIndex(0);
    setIsLightboxOpen(true);
  };

  const handleThumbnailClick = (idx: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedImageIndex(idx);
    setIsLightboxOpen(true);
  };

  return (
    <>
      <article
        className="
          group relative
          bg-white dark:bg-surface-dark
          border-2 border-border-light/60 dark:border-border-dark/60
          hover:border-primary-light/50 dark:hover:border-primary-dark/50
          rounded-3xl overflow-hidden
          transition-all duration-300 ease-out
          hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-light/10 dark:hover:shadow-primary-dark/10
          animate-fade-up opacity-0
        "
        style={{ animationDelay: `${index * 75}ms`, animationFillMode: "forwards" }}
      >
        {/* Image container - rounded corners */}
        <div className="relative aspect-[4/5] overflow-hidden m-3 rounded-2xl bg-surface-light dark:bg-background-dark">
          {/* Main product image - clickable */}
          <button
            onClick={handleImageClick}
            className="absolute inset-0 w-full h-full cursor-zoom-in focus:outline-none"
            aria-label={`View ${product.name} images`}
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className={`
                object-cover
                transition-transform duration-500 ease-out
                group-hover:scale-110
                ${product.status === "sold" ? "grayscale opacity-70" : ""}
              `}
            />
          </button>

          {/* Status badge - top right */}
          {product.status && product.status !== "available" && (
            <div className="absolute top-3 right-3 z-20">
              <span className={`
                inline-block px-3 py-1
                text-xs font-bold uppercase tracking-wide
                rounded-full shadow-md
                ${product.status === "sold"
                  ? "bg-red-500 text-white"
                  : "bg-amber-400 text-amber-900"}
              `}>
                {t.productCard[product.status]}
              </span>
            </div>
          )}

          {/* Multiple images - small dots indicator */}
          {allImages.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {allImages.slice(0, 5).map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => handleThumbnailClick(idx, e)}
                  className={`
                    w-2 h-2 rounded-full transition-all duration-200
                    ${idx === 0 ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white'}
                  `}
                  aria-label={`View image ${idx + 1}`}
                />
              ))}
            </div>
          )}

          {/* Tags pills - floating */}
          <div className="absolute top-3 left-3 z-10 flex flex-wrap gap-1">
            {product.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="
                  inline-block px-2.5 py-0.5
                  text-xs font-medium
                  bg-white/90 dark:bg-black/70 backdrop-blur-sm
                  text-text-light dark:text-white
                  rounded-full shadow-sm
                "
              >
                {t.categories[tag as keyof typeof t.categories] || tag}
              </span>
            ))}
          </div>

          {/* Hover overlay with zoom icon */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>

        {/* Content - minimal */}
        <div className="px-4 pb-4 pt-1">
          {/* Name */}
          <h3 className="
            font-medium text-base leading-snug
            text-text-light dark:text-text-dark
            line-clamp-2
          ">
            {product.name}
          </h3>

          {/* Price & Button row */}
          <div className="flex items-center justify-between mt-3">
            <span className="
              font-bold text-lg
              text-primary-light dark:text-primary-dark
            ">
              {formatPrice(product.price)}
            </span>

            {/* Minimal CTA Button */}
            <a
              href={dmLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-1.5 
                px-4 py-2
                font-medium text-sm rounded-full
                bg-primary-light text-white
                dark:bg-primary-dark dark:text-white
                hover:scale-105 hover:shadow-lg hover:shadow-primary-light/25
                active:scale-95
                transition-all duration-200
              "
            >
              <TwitterIcon size={14} />
              <span>DM</span>
            </a>
          </div>
        </div>
      </article>

      {/* Lightbox */}
      <ImageLightbox
        images={allImages}
        initialIndex={selectedImageIndex}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        productName={product.name}
      />
    </>
  );
}