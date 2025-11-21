import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.jpg'



const About = () => {
    return (
        <div className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img  src={profile_img} alt="" />
                </div>

                <div className="about-right">
                    <div className="about-paragraph">
                        <p>I am an experienced Fullstack Developer looking for avenues where I can exhaust my skills to build projects that will make the world a better place.</p>
                        <p>Not only am I an experienced Fullstack Developer, but also an experienced Educator of English and Literature able to teach
                            both Junior Secondary School and Senior Secondary School. I can also double up as a Computer Studies instructor for both Junior Secondary and Senior Secondary.
                        </p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p> <hr style={{ width: "90%" }} />
                        </div>
                        <div className="about-skill">
                            <p>React JS</p> <hr style={{ width: "80%" }} />
                        </div>
                        <div className="about-skill">
                            <p>JavaScript</p> <hr style={{ width: "80%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Next JS</p> <hr style={{ width: "50%" }} />
                        </div>
                        <div className="about-skill">
                            <p>TypeScript</p> <hr style={{ width: "50%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Node JS</p> <hr style={{ width: "50%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Express JS</p> <hr style={{ width: "60%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Mongo DB</p> <hr style={{ width: "90%" }} />
                        </div>
                    </div>
                    <div className="about-achievements">
                        <div className="about-achievement">
                            <h1>3+</h1>
                            <p>YEARS OF EXPERIENCE</p>
                        </div>
                        <hr />
                        <div className="about-achievement">
                            <h1>10+</h1>
                            <p>PROJECTS COMPLETED</p>
                        </div>
                        <hr />
                        <div className="about-achievement">
                            <h1>5+</h1>
                            <p>HAPPY CLIENTS</p>
                        </div>
                    </div>

                </div>
{/*51 minutes */}

            </div>
        </div>
    )
}

export default About
