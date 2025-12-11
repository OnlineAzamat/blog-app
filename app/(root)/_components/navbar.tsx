'use client'

import ModeToggle from '@/components/shared/mode-toggle'
import { navLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import MobileNav from './mobile-nav'
import { ReactNode } from 'react'

interface NavbarProps {
  searchSlot: ReactNode
}

function Navbar({ searchSlot }: NavbarProps) {
  const pathname = usePathname();

  return (
    <div className='h-24 max-sm:h-16 backdrop-blur-sm border-b fixed z-40 inset-0 bg-background'>
      <div className='container max-w-6xl w-full h-24 max-sm:h-16 mx-auto flex items-center justify-between'>
        {/* Logo */}
        <Link href={'/'}>
          <h1 className='text-4xl max-sm:text-3xl font-sans'>Aklog</h1>
        </Link>
        {/* Nav links */}
        <div className='gap-2 hidden md:flex '>
          {navLinks.map(nav => (
            <Link
              key={nav.route}
              href={nav.route}
              className={cn(
                'hover:bg-blue-400/20 py-1 px-3 cursor-pointer rounded-sm transition-colors',
                pathname === nav.route && 'text-blue-400'
              )}
            >
              {nav.name}
            </Link>
          ))}
        </div>
        {/* Search & Actions */}
        <div className='flex items-center gap-1'>
          {/* Search - Desktop: Normal, Mobile: Floating Bottom Right */}
          <div>
            {searchSlot}
          </div>

          <div className='hidden md:flex'>
            <ModeToggle />
          </div>

          <MobileNav />
        </div>
      </div>
    </div>
  )
}

export default Navbar
