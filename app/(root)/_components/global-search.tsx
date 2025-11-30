import { getTags } from '@/service/tag.service'
import { getCategories } from '@/service/category.service'
import GlobalSearchClient from './global-search-client';

async function GlobalSearch() {
  const tags = await getTags(); // [ { name: string, slug: string } ]
  const categories = await getCategories(); // [ { name: string, slug: string } ]
  
	return (
		<GlobalSearchClient tags={tags} categories={categories} />
	)
}

export default GlobalSearch