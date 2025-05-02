import '../App.css';
import React from 'react';
import bgrasm from '../man-in-black-suit-wearing-eye-glasses-sitting-on-gray-sofa-using-macbook-3772622.png'

function Home() {
  return (
    <>
    <section className='sectionbir'>

      <img src={bgrasm} className='background' />

      <div className='home1page'>
        <h3>Posted on startup</h3>
        <h1>Step-by-step guide to choosing <br /> great font pairs</h1>
        <p>By <span className='james'>James West </span> |  May 23, 2022 </p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu <br /> fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
        <button className="btnhome">Read More/</button>
      </div>
    </section>

    <div className='sectionikki'>
      <div>Featured Post</div>
      
    </div>  
    </>
  )
}

export default Home;
