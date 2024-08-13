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
        <div className='mt-5'>
          <ol className='list-decimal text-xs font-light text-white/60 sm:text-lg'>
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
      <div>
        
      </div>
    </Wrap>
  )
}
