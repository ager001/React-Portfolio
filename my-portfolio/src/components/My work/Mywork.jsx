import React from 'react'
import './Mywork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'






const Mywork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <div key={index} className="mywork-format">
              <h1>{work.w_no}</h1>
              <a href={work.w_link} target="_blank" rel="noreferrer">
                <img src={work.w_img} alt={work.w_name} />
              </a>
              <h2>{work.w_name}</h2>
            </div>
          );
        })}
      </div>

    </div>
  )
}

export default Mywork
