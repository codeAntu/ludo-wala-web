import React from 'react'
import Wrap from './Wrap'
import { APP_NAME } from '@/constants'

export default function Install() {
  const [isExpanded, setIsExpanded] = React.useState(false)
  return (
    <Wrap>
      <p className='heading'>how to </p>
      <p className='sub-heading'>Install {APP_NAME}</p>
      <p className='body-content'>
        Steps to install the Rush real money game app & win money online are :{' '}
        <span className='cursor-pointer text-violet-600' onClick={() => setIsExpanded(!isExpanded)}>
          ...{isExpanded ? 'less' : 'more'}
        </span>
      </p>
      {isExpanded && (
        <div className='mt-5 w-full'>
          <ol className='w-full list-decimal px-5 text-left text-xs font-light text-white/60 sm:text-lg'>
            <li className='leading-5 sm:leading-10'>
              Click “Download App” button to get an online cash games app for Android or iOS.
            </li>
            <li className='leading-5 sm:leading-10'>
              Tap “Download anyway” on the general warning message. Rush is 100% safe & secure & trusted by 5 Crore+
              real players.
            </li>
            <li className='leading-5 sm:leading-10'>
              Locate the real money games apk on your device to install & signup. Now start playing online game earn
              money.
            </li>
          </ol>
        </div>
      )}
      <div className='mt-10 flex h-96 w-full items-center justify-center'>
        <Card step={1} text={'Click “Download” Button to continue.'} />
        <Card step={2} text='Click on “Download Anyway” to start downloading.' />
        <Card step={3} text='Turn on “Allow Apps” from this source.' />
        <Card step={4} text='Click on “Install” to play games & earn real cash.' />
      </div>
    </Wrap>
  )
}

function Card({ step, text }: { step: number; text?: string }) {
  return (
    <div className='h-full w-1/4 p-1.5'>
      <div
        className={`bg-bg2 flex h-full flex-col justify-between rounded-[40px] p-6 ${step <= 2 ? 'border-little-left' : 'border-little-right'}`}
      >
        <div></div>
        <div>
          <p className='text-sm text-white/70'>Step {step}</p>
          <p className='grad2 mt-1'>{text}</p>
        </div>
        <img src={`./images/install/step-${step}.png`} alt='install1' className='mt-5 w-full' />
        <div></div>
      </div>
    </div>
  )
}
