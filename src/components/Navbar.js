import '../App.css'
import * as React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navbar() {



  return (
    <nav className="navbar">
      <div className='logo'>/Finsweet</div>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact us</a></li>
      </ul>

      <div className="Btns">
        <button className="btn">Subsribe</button>
      </div>
    </nav>
  )
}

export default Navbar
