import React from 'react'

export default function BannerImage({text}) {
  return (
    <div className='flex justify-center mt-16 items-center h-[150px] sm:h-[250px] md:h-[220px]'>
            <span className='text-[36px] leading-[40px] font-semibold text-[#343541]'>{text}</span>
        </div>
  )
}
