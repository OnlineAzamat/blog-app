import { Loader2, Minus, Search } from 'lucide-react'
import Link from 'next/link'
import { useState, ChangeEvent } from 'react'
import { debounce } from "lodash"

// === Components ===
import SearchCard from '@/components/cards/search'
import { Badge } from '@/components/ui/badge'
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { popularCategories, popularTags } from '@/constants'
import { getBlogsBySearch } from '@/service/search.service'
import { IBlog } from '@/types'

function GlobalSearch() {
  const [isLoading, setIsLoading] = useState(false);
  const [blogs, setBlogs] = useState<IBlog[]>([]);

  const handleSearch = async (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value.toLowerCase();

    if (text && text.length > 2) {
      setIsLoading(true)
      const data = await getBlogsBySearch(text);
      setBlogs(blogs)
      setIsLoading(false)
    } else {
      setBlogs([])
      setIsLoading(false)
    }
  };

  const debounceSearch = debounce(handleSearch, 400);
  
	return (
		<Drawer>
			<DrawerTrigger>
				<div className='hover:bg-blue-400/20 cursor-pointer rounded-sm transition-colors flex items-center gap-1 px-3 py-2'>
					<span className='hidden md:flex'>Search</span>
					<Search className='w-4 h-4' />
				</div>
			</DrawerTrigger>
			<DrawerContent>
				<div className='container max-w-6xl mx-auto py-12'>
					<Input
						className='bg-secondary'
						placeholder='Type to search blog...'
			      onBlur={debounceSearch}
            disabled={isLoading}
					/>

          {isLoading ? <Loader2 className='mt-4 mx-auto animate-spin' /> : null}
          {blogs.length ? <div className='text-2xl font-creteRound mt-8'>{blogs.length} results found.</div> : null }
          <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 mt-2">
            {blogs && blogs.map(blog => <SearchCard key={blog.slug} {...blog} />) }
          </div>
          {blogs.length ? <Separator className='mt-3' /> : null}

					<div className='flex flex-col space-y-2 mt-4'>
            <div className="flex items-center flex-wrap gap-2">
              <p className='font-creteRound text-2xl'>See posts by categories</p>
              <Minus />
              <Link href={'/categories'}>
                <DrawerClose className='text-blue-500 underline hover:opacity-90'>See all</DrawerClose>
              </Link>
            </div>
            
						<div className='flex flex-wrap gap-2'>
							{popularCategories.map(item => (
								<Badge key={item.slug} variant={'secondary'}>
									{item.name}
								</Badge>
							))}
						</div>
					</div>

					<div className='flex flex-col space-y-2 mt-4'>
            <div className="flex items-center flex-wrap gap-2">
						  <p className='font-creteRound text-2xl'>See posts by tags</p>
              <Minus />
              <Link href={'/tags'}>
                <DrawerClose className='text-blue-500 underline hover:opacity-90'>See all</DrawerClose>
              </Link>
            </div>
						<div className='flex flex-wrap gap-2'>
							{popularTags.map(item => (
								<Badge key={item.slug} variant={'secondary'}>
									{item.name}
								</Badge>
							))}
						</div>
					</div>
				</div>
			</DrawerContent>
		</Drawer>
	)
}

export default GlobalSearch
