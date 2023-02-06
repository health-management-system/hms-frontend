import React from "react"
import "./Navbar.css"

export class NavBar extends React.Component{
    render(){
        
        return(
                <nav className="Nav">
                    <div className="nav__toggler">
                        <div className="#"></div>
                        <div className="#"></div>
                        <div className="#"></div>
                    </div>
                    
                    <ul className="nav__menu" >
                        <li className="#nav_item"><a href="" className="nav_link">Home</a></li>
                        <li className="#nav_item"><a href="" className="nav_link">History</a></li>
                        <li className="#nav_item"><a href="" className="nav_link">Appointments</a></li>
                        <li className="#nav_item"><a href="" className="nav_link">Settings</a></li>
                        <li className="#nav_item"><a href="" className="nav_link">Contact Us</a> </li>
                    </ul>

                    <a href="#" className="nav__brand" >Logo</a>
                
                </nav>
        )
    }
}