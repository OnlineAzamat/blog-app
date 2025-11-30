import { getArchivedBlogs, getBlogs } from "@/service/blog.service"
import { format } from "date-fns";
import { Archive, Dot, Home } from "lucide-react"
import { Metadata } from "next";
import Link from "next/link"

export const metadata: Metadata = {
  title: "Archive blogs"
}

async function ArchivePage() {
  const years = await getArchivedBlogs();
  
  return (
    <div className="max-w-6xl mx-auto">
      <div className="relative mt-24 lg:pt-16 md:pt-12 max-sm:pt-4 flex items-center justify-end flex-col">
        <p className="text-lg text-muted-foreground">Showing posts from</p>
        <h2 className="text-center text-4xl section-title font-creteRound mt-2"><span>Archive</span></h2>

        <div className="flex gap-1 items-center mt-4">
          <Home className="w-4 h-4" />
          <Link 
            href={'/'}
            className="opacity-90 hover:underline hover:opacity-100"
          >Home</Link>
          <Dot />
          <Link 
            href={'/blogs'}
            className="opacity-90 hover:underline hover:opacity-100"
          >Blogs</Link>
          <Dot />
          <p className="text-muted-foreground">Archive</p>
        </div>
      </div>
      {years.map((year) => (
        <div key={year.year} className="flex flex-col space-y-3 mt-8">
          <div className="relative">
            <span className="text-5xl font-creteRound relative z-20">{year.year}</span>
            <Archive className="absolute w-16 h-16 -translate-x-4 -translate-y-12 opacity-10" />
          </div>
          <div className="flex flex-col space-y-2 mt-8">
            {year.blogs.map((blog) => (
              <div key={blog.title} className="flex gap-2 text-lg text-muted-foreground">
                <p>{format(new Date(blog.createdAt), "dd MMM")}</p>
                <Dot className="text-white w-8 h-8" />
                <Link href={`/blogs/${blog.slug}`} className="hover:text-white hover:underline cursor-pointer">{blog.title}</Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ArchivePage