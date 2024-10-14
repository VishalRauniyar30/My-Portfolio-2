import React from 'react'
import { BsInstagram, BsLinkedin } from 'react-icons/bs'
import { FaFacebookF, FaGithub } from 'react-icons/fa'

const urlRedirect = (url) => {
    window.location.href = url
}

const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div onClick={() => urlRedirect('https://www.facebook.com/share/TBU5gw2eJwE522ak/')}>
                <FaFacebookF />                
            </div>
            <div onClick={() => urlRedirect('https://www.instagram.com/niket_rauniyar30?utm_source=qr&igsh=bWVuZmV4NTFuYjJl')}>
                <BsInstagram />
            </div>
            <div onClick={() => urlRedirect('https://www.linkedin.com/in/vishal-kumar-36305b258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')}>
                <BsLinkedin />
            </div>
            <div onClick={() => urlRedirect('https://github.com/VishalRauniyar30')}>
                <FaGithub />
            </div>
        </div>
    )
}

export default SocialMedia