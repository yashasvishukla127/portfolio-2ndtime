import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
      <div className='bg-[#ec4e39] h-[50vh] relative'>
          <img src='/webdevloper.svg' className='h-40 w-auto animate-spin  absolute bottom-10 left-10 ' />
      </div>
  )
}

export default Footer