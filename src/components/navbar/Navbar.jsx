import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";


function Navbar (){
  const [open,setOpen] = useState(false)

  const user = true;

    return(
      <nav>
          <div className="left">
            <a href="/" className="logo">
              <img src="/logo.png" alt="" />
              <span>SunnyEstate</span>
            </a>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Agents</a>
          </div>
          <div className="right">
          {user ? (
            <div className="user">
            <img src="https://media.gettyimages.com/id/1289461335/photo/portrait-of-a-handsome-black-man.jpg?s=612x612&w=gi&k=20&c=tLXHz94Tj89nEyeEm4qZuEJdR24qLDO_Xpq-SSQzGuw=" alt="" />
              <span>John Doe</span>
              <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
              </Link>
          </div>
        ) :(<><a href="/">Sign in</a>
          <a href="/" className="register">Sign up</a></>)}
          <div className="menuIcon">
            <img src="/menu.png" alt="" onClick={() => setOpen((prev => !prev))}/>
          </div>
          <div className= {open ? "menu active" : "menu"}>
          <a href="/">Home</a> 
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Agents</a>
            <a href="/">Sign in</a>
            <a href="/">Sign up</a>

          </div>
          
          </div>
      </nav>
    )


}
export default Navbar