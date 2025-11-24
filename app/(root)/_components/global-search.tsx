import { Badge } from '@/components/ui/badge'
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import { Input } from '@/components/ui/input'
import { popularCategories, popularTags } from '@/constants'
import { getBlogsBySearch } from '@/service/search.service'
import { useDebounce } from '@/tools/debounce'
import { Minus, Search } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState, ChangeEvent } from 'react'

function GlobalSearch() {
  const [search, setSearch] = useState("");
  const debounced = useDebounce(search, 400);

  useEffect(() => {
    if (debounced.trim().length === 0) return;
    getBlogsBySearch(debounced)
      .then((res) => console.log(res))
      .catch(err => console.error(err))
  }, [debounced]);
  
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
			      onBlur={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
					/>

					<div className='flex flex-col space-y-2 mt-4'>
            <div className="flex items-center flex-wrap gap-2">
              <p className='font-creteRound text-2xl'>See posts by categories</p>
              <Minus />
              <Link href={'/categories'} className='text-blue-500 underline hover:opacity-90'>
                <DrawerClose>See all</DrawerClose>
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
              <Link href={'/tags'} className='text-blue-500 underline hover:opacity-90'>
                <DrawerClose>See all</DrawerClose>
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

          <div className="flex justify-between flex-wrap">
            {

            }
          </div>
				</div>
			</DrawerContent>
		</Drawer>
	)
}

export default GlobalSearch
