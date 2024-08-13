export default function Withdraw() {
  const payments = [
    './images/payments/G_pay.png',
    './images/payments/Phone_pe.png',
    './images/payments/Paytm.png',
    './images/payments/BHIM.png',
    './images/payments/amazon_pay.png',
  ]

  return (
    <div className='flex flex-col items-center justify-center gap-16'>
      <div className='mw flex w-full flex-col items-center justify-center'>
        <p className='heading'>Instantly</p>
        <p className='sub-heading'>Withdraw Winnings</p>
      </div>
      <div
        style={{
          backgroundImage: "url('./images/bg.png')",
        }}
        className='flex items-center justify-center gap-7 bg-cover py-28 px-32'
      >
        {payments.map((payment, index) => (
          <div key={index} className='m-4'>
            <img src={payment as string} alt='payment' className='h-[52px]' />
          </div>
        ))}
      </div>
    </div>
  )
}
