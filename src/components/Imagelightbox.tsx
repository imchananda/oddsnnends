"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { CloseIcon } from "./Icons";

interface ImageLightboxProps {
    images: string[];
    initialIndex?: number;
    isOpen: boolean;
    onClose: () => void;
    productName: string;
}

export default function ImageLightbox({
    images,
    initialIndex = 0,
    isOpen,
    onClose,
    productName,
}: ImageLightboxProps) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    // Reset index when opening with new initial index
    useEffect(() => {
        if (isOpen) {
            setCurrentIndex(initialIndex);
        }
    }, [isOpen, initialIndex]);

    // Handle keyboard navigation
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            switch (e.key) {
                case "Escape":
                    onClose();
                    break;
                case "ArrowLeft":
                    goToPrevious();
                    break;
                case "ArrowRight":
                    goToNext();
                    break;
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [isOpen, currentIndex]);

    const goToPrevious = useCallback(() => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }, [images.length]);

    const goToNext = useCallback(() => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, [images.length]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-label={`Image gallery for ${productName}`}
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/90 backdrop-blur-sm animate-fade-in"
                onClick={onClose}
            />

            {/* Close button */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Close gallery"
            >
                <CloseIcon size={24} />
            </button>

            {/* Image counter */}
            <div className="absolute top-4 left-4 z-10 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium">
                {currentIndex + 1} / {images.length}
            </div>

            {/* Main image container */}
            <div className="relative w-full h-full flex items-center justify-center p-4 md:p-16">
                {/* Previous button */}
                {images.length > 1 && (
                    <button
                        onClick={goToPrevious}
                        className="absolute left-2 md:left-8 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                        aria-label="Previous image"
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                    </button>
                )}

                {/* Image */}
                <div className="relative w-full max-w-4xl aspect-square animate-scale-in">
                    <Image
                        src={images[currentIndex]}
                        alt={`${productName} - Image ${currentIndex + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 80vw"
                        className="object-contain"
                        priority
                    />
                </div>

                {/* Next button */}
                {images.length > 1 && (
                    <button
                        onClick={goToNext}
                        className="absolute right-2 md:right-8 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                        aria-label="Next image"
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </button>
                )}
            </div>

            {/* Thumbnail strip */}
            {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2 p-2 rounded-xl bg-white/10 backdrop-blur-sm">
                    {images.map((img, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`relative w-12 h-12 md:w-16 md:h-16 rounded-lg overflow-hidden transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${index === currentIndex
                                    ? "ring-2 ring-white scale-110"
                                    : "opacity-60 hover:opacity-100"
                                }`}
                            aria-label={`View image ${index + 1}`}
                            aria-current={index === currentIndex ? "true" : "false"}
                        >
                            <Image
                                src={img}
                                alt={`Thumbnail ${index + 1}`}
                                fill
                                sizes="64px"
                                className="object-cover"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}