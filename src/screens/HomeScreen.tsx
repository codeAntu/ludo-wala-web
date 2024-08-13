import Rating from '@/components/Rating'
import Header from '../components/Header'

export default function HomeScreen() {
  return (
    <div>
      <Header />
      <div className='px-5 pt-20 sm:px-20'>
        <Rating />
      </div>
    </div>
  )
}
