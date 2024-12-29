"use client";
import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import BlurFade from "./magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;
const CATEGORIES = ["All", "Technology", "Philosophy", "Geopolitics"];

export default function BlogList({ posts }: { posts: any[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [isScrolling, setIsScrolling] = useState(false); // New state to track scrolling
  const containerRef = useRef<HTMLDivElement | null>(null);
  const buttonRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const [underlineStyle, setUnderlineStyle] = useState({
    width: 0,
    left: 0,
  });

  const updateUnderlinePosition = useCallback(() => {
    if (isScrolling) return; // Skip updating while scrolling
    const button = buttonRefs.current.get(selectedCategory);
    if (button) {
      const rect = button.getBoundingClientRect();
      const containerRect = containerRef.current?.getBoundingClientRect() || { left: -25 };

      setUnderlineStyle({
        width: rect.width,
        left: ((rect.left - containerRect.left) - 25) + (containerRef.current?.scrollLeft || 0),
      });
    }
  }, [selectedCategory, isScrolling]);

  useEffect(() => {
    updateUnderlinePosition();

    window.addEventListener("resize", updateUnderlinePosition);
    return () => {
      window.removeEventListener("resize", updateUnderlinePosition);
    };
  }, [updateUnderlinePosition]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);

    const button = buttonRefs.current.get(category);
    if (button && containerRef.current) {
      const container = containerRef.current;

      const containerRect = container.getBoundingClientRect();
      const buttonRect = button.getBoundingClientRect();
      const containerScrollLeft = container.scrollLeft;

      const offset =
        buttonRect.left - containerRect.left - containerRect.width / 2 + buttonRect.width / 2;

      setIsScrolling(true); // Start scrolling
      container.scrollTo({
        left: containerScrollLeft + offset,
        behavior: "smooth",
      });

      // Recalculate underline position after scrolling completes
      setTimeout(() => {
        setIsScrolling(false); // Stop scrolling
        updateUnderlinePosition();
      }, 0); // Match the scroll animation duration
    }
  };

  const filteredPosts = posts.filter((post) => {
    if (selectedCategory === "All") return true;
    return post.metadata.category === selectedCategory;
  });

  return (
    <>
      {/* Navbar */}
      <div
        className="flex space-x-6 border-b mb-8 overflow-x-auto overflow-y-clip scrollbar-hide sticky top-[50px] z-10 pt-5 bg-white dark:bg-black"
        ref={containerRef}
      >
        {CATEGORIES.map((category) => (
          <BlurFade delay={BLUR_FADE_DELAY} key={category}>
            <button
              ref={(el) => {
                if (el) buttonRefs.current.set(category, el);
                else buttonRefs.current.delete(category);
              }}
              onClick={() => handleCategoryClick(category)}
              className={`text-lg font-medium pb-1 -mb-2 ${
                selectedCategory === category
                  ? "font-bold text-black dark:text-white"
                  : "text-muted-foreground"
              }`}
            >
              <p className="tracking-tighter">{category}</p>
            </button>
          </BlurFade>
        ))}
        {/* Underline */}
        <motion.div
          className="absolute bottom-0 h-[2px] bg-black dark:bg-white"
          style={{ width: underlineStyle.width, left: underlineStyle.left }}
          layout
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 25,
          }}
        />
      </div>

      {/* Blog Posts */}
      <div className="flex flex-col gap-y-6">
        {filteredPosts.map((post) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2} key={post.slug}>
            <Link
              className="flex flex-col space-y-1"
              href={`/blog/${post.slug}`}
            >
              <p className="text-xs text-muted-foreground">
                {post.metadata.publishedAt}
              </p>
              <div className="w-full flex flex-col">
                <p className="font-medium text-2xl tracking-tight">
                  {post.metadata.title}
                </p>
                <p className="mt-2 text-md text-muted-foreground">
                  {post.metadata.summary}
                </p>
              </div>
            </Link>
          </BlurFade>
        ))}
      </div>
    </>
  );
}
