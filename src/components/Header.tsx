import { Link } from 'react-router-dom'

const options = [
  {
    name: 'Home',
    href: '/',
  },
]

export default function Header() {
  return (
    <div className='flex w-full items-center justify-center'>
      <div className='w-full max-w-screen-xl bg-white/50'>
        <img src='./icon.png' alt='icon' className='mx-auto size-16' />
        <div>
          {options.map((option) => (
            <Option key={option.name} name={option.name} href={option.href} />
          ))}
        </div>
      </div>
    </div>
  )
}

function Option({ name, href }: { name: string; href: string }) {
  return (
    <Link to={href} className='text-white/50 hover:text-white'>
      {name}
    </Link>
  )
}
