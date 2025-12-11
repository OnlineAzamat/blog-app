'use client'

import { navLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import ModeToggle from '@/components/shared/mode-toggle'

function MobileNav() {
  const pathname = usePathname()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='ghost' size='icon' className='md:hidden'>
          <Menu className='h-5 w-5' />
        </Button>
      </SheetTrigger>
      <SheetContent side='right'>
        <div className='flex flex-col gap-4 mt-4'>
          <Link href={'/'} className='font-bold text-2xl font-sans'>
            Aklog
          </Link>
          <Separator />
          <div className='flex flex-col gap-3'>
            {navLinks.map(nav => (
              <Link
                key={nav.route}
                href={nav.route}
                className={cn(
                  'hover:bg-blue-400/20 py-2 px-3 cursor-pointer rounded-sm transition-colors text-lg',
                  pathname === nav.route && 'text-blue-400'
                )}
              >
                {nav.name}
              </Link>
            ))}
          </div>
          <Separator />
          <div className='flex items-center gap-4'>
            <span>Theme:</span>
            <ModeToggle />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
