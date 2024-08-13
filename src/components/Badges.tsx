export default function Badges() {

  const images = [
    './images/badges/RNG_Certified.png',
    './images/badges/Made_in_india.png',
    './images/badges/No_Bots.png',
    './images/badges/Secure_Payment.png',
    './images/badges/Instant_Withdrawal.png',
    './images/badges/Customer_support.png',
  ]

  return (
    <div className='w-full'>
      <div className="flex gap-7 items-center justify-center w-full py-5 ">
        {
          images.map((image, index) => (
            <img key={index} src={image} alt="badge" className="h-[88px] " />
          ))
        }
      </div>
    </div>
  )
}
