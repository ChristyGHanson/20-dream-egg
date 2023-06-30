// linkedin, github, email logos
// mailto:chrsthnsn@gmail
// https://github.com/ChristyGHanson/
// https://www.linkedin.com/in/christyghanson/
import React from "react";
// importing App.js variables.
export default function Footer(){
    return(
        <div className="footer">
            <a href="https://www.linkedin.com/in/christyghanson/"><img className="logo" src="/linkedin-logo.png" width="50px"></img></a>  
            <a href="https://github.com/ChristyGHanson/"><img className="logo" src="/github-logo.png" width="50px"></img></a>  
            <a href="mailto:chrsthnsn@gmail"><img className="logo" src="/email-logo.avif" width="50px"></img></a>       
        </div>

    );


}
