import React from 'react'
import {social} from '../data'

const Socials = () => {
  return (
    <ul className='flex space-x-5 '>
      {
        social.map((item,index) => {
          return <li className='text-accent flex justify-center' key={index}>
            <a href={item.href}>{item.icon}</a>
          </li>
        })
      }
    </ul>
  )
}

export default Socials