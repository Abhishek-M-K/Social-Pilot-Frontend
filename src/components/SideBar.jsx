// import { RedirectToSignIn } from '@clerk/clerk-react'
// import { SignedOut } from '@clerk/clerk-react'
import React from 'react'

const SideBar = () => {
  return (
    <div className='absolute top-4 bottom-4 left-4 right-4' >
      <div className='bg-[orange] mb-4 font-mona' >SocialPilot</div>
      <div className='flex flex-col items-start gap-8 text-lg leading-normal font-mona'>
        <a href="">DashBoard</a>
        <a href="">Recruitment</a>
        <a href="">Onboarding/Connect</a>
        <a href="">Recruitment Post</a>
        {/* <SignedOut>
          <RedirectToSignIn/>
        </SignedOut> */}

      </div>

    </div>
  )
}

export default SideBar
