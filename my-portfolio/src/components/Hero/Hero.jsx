import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'

const Hero = () => {
    return (
        <div className='hero'>
            <img src={profile_img} alt="" className='profile-pic' />
            <h1 className='description-header'> I am Michael Ager Midenga, fullstack developer based in Kenya.</h1>
            
            <p className='description-paragraph'>I am a teacher of English, Literature, and Computer Studies by profession who also doubles up as a fullstack developer.
                Skilled in modern frameworks and backend logic, I bridge education and technology to create meaningful solutions.</p>

            <div className="hero-action">
                <div className="hero-connect">Connect with me</div>
                <div className="hero-resume">My resume</div>
            </div>

        </div>
    )
}

export default Hero
