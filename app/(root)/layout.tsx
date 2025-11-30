import { ChildProps } from '@/types'
import Footer from './_components/footer'
import Navbar from './_components/navbar'
import GlobalSearch from './_components/global-search'

function Layout({ children }: ChildProps) {
	return (
		<main>
			<Navbar searchSlot={<GlobalSearch />} />
			<div className='container'>{children}</div>
			<Footer />
		</main>
	)
}

export default Layout
