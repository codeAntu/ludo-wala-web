import '../temp.css'

export default function Download() {
  return (
    <div className='fixed bottom-0 left-0 flex w-full flex-col items-center justify-center bg-gradient-to-b from-[#7400aa] to-[#3d0657] px-3 pb-2 md:flex-row md:gap-20 md:py-3'>
      <div className='py-3 text-center text-xl font-bold text-white'>
        <p className='fast-pulse'>Download App & Get ₹50 free!</p>
      </div>
      <button className='rubik inline-block w-full max-w-sm flex-none rounded-full border-2 border-white/40 bg-g px-8 py-2 text-center text-base font-bold text-white sm:w-2/5 lg:text-xl'>
        Get Download Link
      </button>
    </div>
  )
}