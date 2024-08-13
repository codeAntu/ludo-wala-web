import Wrap from './Wrap'

const review = {
  review:
    'I earned ₹1 Lakh from this game. I quickly withdrew the winnings to my bank account. It is safe & easy to use app.',
  name: 'Vishal Gupta',
  won: '₹3,12,856',
  location: 'Bhadohi, Uttar Pradesh',
  profile: './images/games/Quizzy.png',
}

export default function Reviews() {
  return (
    <Wrap>
      <div className='flex items-center justify-center gap-7'>
        <Review />
        <Review />
        <Review />
      </div>
    </Wrap>
  )
}

function Review() {
  return (
    <div className='rounded-3xl bg-[#290140] p-5 text-white'>
      <div className='rounded-2xl bg-[#340e49] p-4 text-amber-300 font-medium text-[0.8rem] h-28'>{review.review}</div>
      <div className='pb-2 pt-4 px-4 flex items-center justify-between'>
        <div className='flex flex-col gap-1'>
          <div className='test-2xl font-bold '>{review.name}</div>
          
          <div className='text-green-500 text-xs font-semibold'> Won {review.won}</div>
          <div className='text-xs font-semibold text-white/50 '>{review.location}</div>
        </div>
        <div className=''> 
          <img src={review.profile} alt='' className='aspect-square w-20 rounded-full'/>
        </div>
      </div>
    </div>
  )
}
