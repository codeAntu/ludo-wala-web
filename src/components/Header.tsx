import { MenuIcon } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const options = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Reft & Earn',
    href: '/refer',
  },
  {
    name: "FAQ's",
    href: '/faqs',
  },
  {
    name: 'Ludo Tournament',
    href: '/ludo',
    new: true,
  },
]

export default function Header() {
  return (
    <div className='fixed top-0 flex w-full items-center justify-center px-5 backdrop-blur-2xl'>
      <div className='mw flex w-full items-center justify-between py-3'>
        <img src='./icon.png' alt='icon' className='h-8 sm:h-11' />
        <div className='hidden gap-5 sm:flex'>
          {options.map((option) => (
            <Option key={option.name} name={option.name} href={option.href} isNew={option.new} />
          ))}
        </div>
        <div className='flex sm:hidden border px-1 rounded-lg border-white/50'>
          <MenuIcon className='text-white w-4'/>
        </div>
      </div>
    </div>
  )
}

function Option({ name, href, isNew }: { name: string; href: string; isNew?: boolean }) {
  const location = useLocation()

  return (
    <Link
      to={href}
      className={`text-[0.7rem] font-medium uppercase ${location.pathname === href ? 'text-white' : 'text-white/70'}`}
    >
      {name}

      {isNew && (
        <span className='rubik ml-2 rounded-full bg-rose-500 px-1.5 py-[0.1rem] text-[0.5rem] font-bold text-white'>
          New
        </span>
      )}
    </Link>
  )
}
