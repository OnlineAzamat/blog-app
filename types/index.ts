export interface ChildProps {
  children: React.ReactNode
}

export interface IBlog {
  id: string
  title: string
  description: string
  tags: ICategoryAndTags[]
  author: IAuthor
  image: { url: string }
  category: ICategoryAndTags
  createdAt: string
  content: { html: string }
  slug: string
  views: number
}

export interface IArchivedBlogs {
  year: string
  blogs: IBlog[]
}

export interface IAuthor {
  id: string
  name: string
  bio: string
  image: { url: string }
  blogs: IBlog[]
}

export interface ICategoryAndTags {
  name: string
  slug: string
  blogs: IBlog[]
}