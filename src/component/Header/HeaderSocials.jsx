import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {GoMarkGithub} from 'react-icons/go'

export const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href = "https://linkedin.com/aradhyas8" target= "_blank"><BsLinkedin/></a>
        <a href = "https://github.com/aradhyas8" target= "_blank"><GoMarkGithub/></a>
    </div>
  )
}
export default HeaderSocials