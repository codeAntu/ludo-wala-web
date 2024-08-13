import Rating from '@/components/Rating'
import Header from '../components/Header'
import Badges from '@/components/Badges'
import Withdraw from '@/components/Withdraw'
import SkillBasedGames from '@/components/SkillBasedGames'
import Install from '@/components/Install'


export default function HomeScreen() {
  return (
    <div>
      <Header />
      <div className='flex flex-col gap-40 px-5 pb-52 pt-20 sm:px-20'>
        <Badges />
        <Withdraw />
        <Rating />
        <Install />
        <SkillBasedGames />
      </div>
    </div>
  )
}
