"use client"

import { useRouter } from "next/navigation";
import { MouseEvent } from "react";
import { Badge } from "./ui/badge";

type TagBadgeProps = {
  tagName: string;
  tagSlug: string;
}

export default function TagBadge({ tagName, tagSlug }: TagBadgeProps) {
  const router = useRouter();

  const onTagClick = (e: MouseEvent) => {
    e.stopPropagation();

    router.push(`/tags/${tagSlug}`);
  }

  return (
    <div className="flex items-center gap-2">
      <Badge variant={'secondary'} onClick={onTagClick}>{tagName}</Badge>
    </div>
  )
}