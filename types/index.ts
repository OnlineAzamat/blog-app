export interface ChildProps {
	children: React.ReactNode
}

export interface IBlog {
  id: string
	title: string
	description: string
  tag: ICategoryAndTags
  author: IAuthor
  image: { url: string }
  category: ICategoryAndTags
  createdAt: string
  content: { html: string }
  slug: string
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
}