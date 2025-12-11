import BlogCard from "@/components/cards/BlogCard";
import { getDetailedAuthor } from "@/service/author.service"
import Image from "next/image";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const author = await getDetailedAuthor(params.slug);

  return {
    title: author.name,
    desciption: author.bio,
    openGraph: {
      images: author.image.url
    }
  }
}

async function Page({ params }: { params: { id: string } }) {
  const author = await getDetailedAuthor(params.id);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mt-24 lg:pt-16 md:pt-12 max-sm:pt-4 flex gap-6 items-center max-md:flex-col">
        <Image
          src={author.image.url}
          alt={author.name}
          width='200'
          height='200'
          className="rounded-md max-md:self-start"
        />
        <div className="flex-1 flex flex-col space-y-4">
          <p className="text-muted-foreground">
            <span className="font-bold text-white">{author.blogs.length}</span> Published posts
          </p>
          <h2 className="text-3xl font-sans">{author.name}</h2>
          <p className="line-clamp-2 text-muted-foreground max-w-xl">{author.bio}</p>
        </div>
      </div>

      <h2 className="text-center text-4xl section-title font-sans my-12">
        <span>Published posts</span>
      </h2>

      <div className="flex flex-col space-y-24 mt-24">
        {author.blogs.map(blog => (
          <BlogCard key={blog.id} {...blog} isVertical />
        ))}
      </div>
    </div>
  )
}

export default Page