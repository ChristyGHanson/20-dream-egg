import React from "react";
// importing App.js variables.
export default function Navbar({page, setPage}){
    return(
        // className is for adding styles later.
        <ul className="nav">
            <li><a href="#about" onClick={()=>{setPage("about")}}>About</a></li> 
            <li><a href="#portfolio" onClick={()=>{setPage("portfolio")}}>Portfolio</a></li>         
            <li><a href="#resume" onClick={()=>{setPage("resume")}}>Resume</a></li>         
            <li><a href="#contact" onClick={()=>{setPage("contact")}}>Contact</a></li>         



        </ul>   );


}
