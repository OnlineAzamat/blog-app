"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

interface ViewCounterProps {
  slug: string;
  views: number;
}

const ViewCounter = ({ slug, views: initialViews }: ViewCounterProps) => {
  const [views, setViews] = useState(initialViews || 0);

  useEffect(() => {
    const incrementView = async () => {
      try {
        const storedViews = JSON.parse(localStorage.getItem("blog_views") || "{}");

        if (storedViews[slug]) return;

        const res = await fetch("/api/views", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ slug, views: views + 1 }),
        });

        if (res.ok) {
          setViews((prev) => prev + 1);
          storedViews[slug] = true;
          localStorage.setItem("blog_views", JSON.stringify(storedViews));
        }
      } catch (error) {
        console.error("Error incrementing view count", error);
      }
    };

    incrementView();
  }, [slug]);

  return (
    <div className="flex items-center gap-2">
      <Eye className="w-5 h-5 max-md:w-4 max-md:h-4" />
      <p className="max-md:text-xs">{views}</p>
    </div>
  );
};

export default ViewCounter;