import Rating from '@/components/Rating'
import Header from '../components/Header'
import Badges from '@/components/Badges'
import Withdraw from '@/components/Withdraw'

export default function HomeScreen() {
  return (
    <div>
      <Header />
      <div className='px-5 pt-20 sm:px-20 flex flex-col gap-28'>
        <Badges />
        <Withdraw />
        <Rating />
      </div>
    </div>
  )
}
