import React from 'react'
import { Link } from 'react-router-dom'

export const StartPage = () => {
  return (
    <section className='start-container'>
        <div className='start-text'>
          <h3 className="start-logo">En Bostad</h3>
          Sidan där du hittar lediga hyreslägenheter i Stockholm.<br/> 
          En Bostad är platsen där alla kan hitta hem. <br/>
          Vare sig du letar efter din första lägenhet eller 
          ett hem till din stora familj. 
          <button className="start-button">
          <Link to='/home' className='start-button-link'>
            Hitta Hem
            </Link> 
        </button>
        </div>
    </section>
  )
}