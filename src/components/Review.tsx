import Wrap from './Wrap'

interface Review {
  review: string
  name: string
  won: string
  location: string
  profile: string
}

const reviews = [
  {
    review:
      'I earned ₹1 Lakh from this game. I quickly withdrew the winnings to my bank account. It is safe & easy to use app.',
    name: 'Vishal Gupta',
    won: '₹3,12,856',
    location: 'Bhadohi, Uttar Pradesh',
    profile: './images/users/user-1.png',
  },
  {
    review:
      'I earned over ₹50,000 in Rush App. It has an easy-to-use interface that motivates you to play more and earn big!',
    name: 'Devashish Tomar',
    won: '₹54,325',
    location: 'Dehradun, Uttarakhand',
    profile: './images/users/user-2.png',
  },
  {
    review:
      'Main pichle 2 saal se Rush App pe khel raha hu. Maine ₹10,000 se zyaada jeeta hai iss pe. 100% safe aur secure hai ye app!',
    name: 'Alok Behera',
    won: '₹12,765',
    location: 'Kanpur, Uttar Pradesh',
    profile: './images/users/user-3.png',
  },
  {
    review: 'I love spending my free time on Rush App. It is an excellent platform to play games and win money.',
    name: 'Rajesh Sharma',
    won: '₹54,356',
    location: 'Udhampur, J&K',
    profile: './images/users/user-4.png',
  },
  {
    review:
      'Rush App mein ₹70,000 se zyaada jeeta hai. Iss app ka graphics best hai jo gaming experience ko acha karta hai!',
    name: 'Aman Kumar',
    won: '₹74,356',
    location: 'Khagaria, Bihar',
    profile: './images/users/user-5.png',
  },
]

export default function Reviews() {
  return (
    <Wrap>
      <div className='flex flex-wrap items-center justify-center'>
        {reviews.map((review, index) => (
          <Review key={index} review={review} />
        ))}
      </div>
    </Wrap>
  )
}

function Review({ review }: { review: Review }) {
  return (
    <div className='w-1/3 p-4'>
      <div className='rounded-3xl bg-[#290140] p-5 text-white'>
        <div className='h-28 rounded-2xl bg-[#340e49] p-4 text-[0.8rem] font-medium text-amber-300'>
          {review.review}
        </div>
        <div className='flex items-center justify-between px-4 pb-2 pt-4'>
          <div className='flex flex-col gap-1'>
            <div className='flex items-center gap-2'>
              <div className='test-2xl font-bold'>{review.name}</div>
              <img src='./images/verify.png' alt='' className='aspect-square w-4' />
            </div>
            <div className='text-xs font-semibold text-green-500'> Won {review.won}</div>
            <div className='text-xs font-semibold text-white/50'>{review.location}</div>
          </div>
          <div className=''>
            <img src={review.profile} alt='' className='aspect-square w-20 rounded-full' />
          </div>
        </div>
      </div>
    </div>
  )
}
