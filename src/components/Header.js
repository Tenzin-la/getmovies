import { Link, NavLink } from "react-router-dom";
import './Header.css'
import { useState } from "react";

export default function Header() {

  const [Mobile, setMobile] = useState(false)


  return (
    <div className="header">
      <div className="container flexSB">
        <nav className="flexSB">
          <div className="logo">
            <h1>FakeFlix</h1>
          </div>
          <ul className={Mobile ? "navMenu-list" : "flexSB"} onClick={() => setMobile(false)}>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/movies/popular'>Popular</NavLink>
            <NavLink to='/movies/top_rated'>Top Rated</NavLink>
            <NavLink to='/movies/upcoming'>Upcoming</NavLink>
            <NavLink to='/pricing'>Pricing</NavLink>

          </ul>

          <button className="toggle" onClick={() => setMobile(!Mobile)}>
            {Mobile ? <i className="fa-solid fa-xmark"></i> : <i className="fa fa-bars"></i>}
          </button>
        </nav>

        <div className="account flexSB">
          <i className="fa fa-search"></i>
          <i className="fa fa-bell"></i>
          <i className="fa fa-user"></i>
          <button>Subscribe Now</button>
        </div>
      </div>
    </div>
  )
}
