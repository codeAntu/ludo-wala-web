import { Link, useLocation } from 'react-router-dom';

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
  },
]

export default function Header() {
  return (
    <div className='flex w-full items-center justify-center'>
      <div className='flex w-full max-w-[1200px] items-center justify-between'>
        <img src='./icon.png' alt='icon' className='size-14' />
        <div className='flex gap-5'>
          {options.map((option) => (
            <Option key={option.name} name={option.name} href={option.href} />
          ))}
        </div>
      </div>
    </div>
  )
}

function Option({ name, href }: { name: string; href: string }) {
  const location = useLocation()

  return (
    <Link
      to={href}
      className={`text-[0.7rem] font-medium uppercase ${location.pathname === href ? 'text-white' : 'text-white/70'}`}
    >
      {name}
    </Link>
  )
}
