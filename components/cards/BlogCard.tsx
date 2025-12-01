"use client"

import { IBlog } from "@/types"
import { CalendarDays, Clock, Dot, Minus, Tag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { cn, getReadingTime } from "@/lib/utils"
import { format } from "date-fns"

import { Badge } from "../ui/badge"

interface Props extends IBlog {
  isVertical?: boolean
}

function BlogCard(blog: Props) {
  return (
    <div className={cn(
      "grid gap-4 group",
      blog.isVertical ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'
    )}>
      <Link className="block relative bg-secondary rounded-md" href={`/blogs/${blog.slug}`}>
        <Image 
          width={650} 
          height={335} 
          src={blog.image.url}
          alt={blog.title} 
          className="px-2 md:px-7 rounded-2xl group-hover:-translate-y-7 -translate-y-6 transition-all object-cover grayscale group-hover:grayscale-0 max-md:-translate-y-2 max-md:group-hover:-translate-y-3" 
        />
      </Link>
      <div className="flex flex-col space-y-4">
        <Link href={`/blogs/${blog.slug}`}>
          {/* Time info */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <CalendarDays className="w-5 h-5" />
              <p>{format(new Date(blog.createdAt), "MMM dd, yyyy")}</p>
            </div>
            <Minus />
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <p>{getReadingTime(blog.content.html)} min read</p>
            </div>
          </div>
          {/* Title */}
          <h2 className="text-3xl max-md:text-2xl max-sm:text-xl max-sm:line-clamp-1 font-creteRound group-hover:text-blue-500 transition-colors">{blog.title}</h2>
          <p className="text-muted-foreground text-sm sm:text-base line-clamp-3">{blog.description}</p>
        </Link>
        {/* Author */}
        <div className="flex items-center gap-1 sm:gap-4">
          <div className="flex items-center gap-2">
            <Image 
              src={blog.author.image?.url}
              alt={blog.author.name}
              width={30}
              height={30}
              className="object-cover rounded-sm"
            />
            <p className="text-sm sm:text-base">by {blog.author.name}</p>
          </div>
          <Dot />
          <Link href={`/categories/${blog.category.slug}`} className="flex items-center gap-2">
            <Badge variant={'outline'}>{blog.category.name}</Badge>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogCard;