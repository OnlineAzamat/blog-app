import { ArrowUpRight, CalendarDays, Clock, Minus } from "lucide-react";
import Image from "next/image";
import parse from "html-react-parser";
import Link from "next/link";
import { getDetailedBlog } from "@/service/blog.service";
import { getReadingTime } from "@/lib/utils";
import { format } from "date-fns";
import ShareBtns from "../../_components/share-btns";
import ViewCounter from "@/components/shared/view-counter";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const blog = await getDetailedBlog(params.slug);

  return {
    title: blog.title,
    desciption: blog.description,
    openGraph: {
      images: blog.image.url
    }
  }
}

async function SlugPage({ params }: { params: { slug: string } }) {
  const blog = await getDetailedBlog(params.slug);

  return (
    <div className="pt-[15vh] max-sm:pt-[10vh] max-w-5xl mx-auto flex flex-col">
      <h1 className="lg:text-6xl md:text-5xl text-4xl max-md:text-2xl font-serif order-1">{blog.title}</h1>

      <div className="flex items-center flex-wrap max-md:justify-between gap-4 max-sm:gap-2 mt-4 order-2">
        <div className="flex items-center gap-2">
          <Image
            src={blog.author.image.url}
            alt={blog.author.name}
            width={30}
            height={30}
            className="object-cover rounded-sm"
          />
          <p className="max-md:text-xs">by {blog.author.name}</p>
        </div>
        <Minus className="max-md:hidden" />
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 max-md:w-4 max-md:h-4" />
          <p className="max-md:text-xs">{getReadingTime(blog.content.html)} min read</p>
        </div>
        <Minus className="max-md:hidden" />
        <div className="flex items-center gap-2">
          <CalendarDays className="w-5 h-5 max-md:w-4 max-md:h-4" />
          <p className="max-md:text-xs">{format(new Date(blog.createdAt), "MMM dd, yyyy")}</p>
        </div>
        <Minus className="max-md:hidden" />
        <ViewCounter views={blog.views} slug={blog.slug} />
      </div>

      <Image
        src={blog.image.url}
        alt={blog.title}
        width={`1120`}
        height={`595`}
        className="mt-4 rounded-md order-3 max-md:order-3"
      />

      <div className="flex md:gap-12 max-md:flex-col-reverse mt-12 relative order-4 max-md:order-4">
        <div className="flex flex-col space-y-3">
          <div className="sticky top-36">
            <p className="text-lg uppercase text-muted-foreground">Share</p>

            <ShareBtns />
          </div>
        </div>
        <div className="flex-1 prose dark:prose-invert">
          {parse(blog.content.html)}

          {blog.tags.map((item) => (
            <Link key={item.slug} href={`/tags/${item.slug}`} className="text-white no-underline hover:text-blue-500 transition-colors mr-4">
              #{item.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex mt-6 gap-6 items-center max-md:flex-col order-5 max-md:order-5">
        <Image
          src={blog.author.image.url}
          alt="author"
          width={155}
          height={155}
          className="rounded-md max-md:self-start"
        />

        <div className="flex-1 flex flex-col space-y-4">
          <h2 className="text-3xl font-sans">{blog.author.name}</h2>
          <p className="line-clamp-2 text-muted-foreground">{blog.author.bio}</p>
          <Link href={`/authors/${blog.author.id}`} className="flex items-center gap-2 hover:text-blue-500 underline transition-colors">See all posts by this author <ArrowUpRight /></Link>
        </div>
      </div>
    </div>
  )
}

export default SlugPage