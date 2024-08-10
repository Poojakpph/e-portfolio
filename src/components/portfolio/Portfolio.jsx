import React from 'react'
import "./portfolio.css"
import img1 from "../../assets/food-delivery.png"
import img2 from "../../assets/crypto.png"
import img3 from "../../assets/infosumz.png"
import img4 from "../../assets/admin.png"
import img5 from "../../assets/uchat.jpg"
import img6 from "../../assets/newsapp.png"

const data=[
     {
          id:1,
          image: img1,
          title: 'ALPH VILLAGE - Full Stack Food Website',
          viewcode: 'https://github.com/Poojakpph/Food-delivery-website'
      },
      {
          id:2,
          image: img2,
          title: 'CRYPTOCORTEXT - Cryptocurrency Application',
          viewcode: 'https://cryptocortext.netlify.app/'
      },
      {
          id:3,
          image: img3,
          title: 'INFOSUMZ - Summarize Articles ',
          viewcode: 'https://infosumz.netlify.app/'
      },
     {
          id:4,
          image: img4,
          title: 'ADMINDASH - Dashboard Application',
          viewcode: 'https://dash-boardadmin.netlify.app/'
     },
   
     {
          id:5,
          image: img5,
          title: 'UCHAT APP - Chat App UI',
          viewcode: 'https://github.com/Poojakpph/chat_application_new'
     },
  
     {
          id:6,
          image: img6,
          title: 'NewsHunt - News API Application',
          viewcode: 'https://github.com/Poojakpph/NewsApp'
     },

]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Personal projects</span>

      <div className="container portfolio__container">{
        data.map(({id, image, title, viewcode})=>{
           return(
              <article className="portfolio__item" key={id}>
                    <div className="portfolio__item-img"> <img src={image} alt={title} /> </div>
                    <h3>{title}</h3>
                    <div className="portfolio__item-cta">
                    <a href={viewcode} className='btn' target='_blank'>View Source</a>
                    </div>
              </article> 
            )
         })
       }
    
      </div>
    </section>
  )
}

export default Portfolio
