// Linkedin, GitHub, Twitter, Email icons included below.
// Email address: chrsthnsn@gmail
// GitHub: https://github.com/ChristyGHanson/
// LinkedIn: https://www.linkedin.com/in/christyghanson/
// Twitter: https://twitter.com/hagooshii/

import React from "react";

// IMPORTING A PNG FROM SRC/IMAGES
// import photo1 from './linkedin-logo.png';

export default function Footer() {
    return (
        <div className="footer">

            {/* IMPORTING USING REACT WON'T WORK */}
            {/* <a href="https://www.linkedin.com/in/christyghanson/"><img className="logo" src={photo1} width="50px" alt="" /></a> */}
            {/* <img
                className="logo"
                src={photo1}
                width="50px"
                alt=""
            /> */}

            {/* PUBLIC FOLDER did not work */}
            {/* <a href="https://www.linkedin.com/in/christyghanson/"> */}

            {/* Google drive did not work */}
            {/* <img className="logo" src="https://drive.google.com/file/d/1_3U6tpNrF0wSny1KRHXpWWJ5S0eLPJ6R/view?usp=drive_link" width="50px" alt="profile-pic" /> */}
            {/* </a> */}

            {/* imgur photo hosting - WORKS */}
            {/* LinkedIn - Imgur-hosted icon */}
            <a href="https://www.linkedin.com/in/christyghanson/" target="_blank" rel="noopener noreferrer"><img className="logo" src="https://i.imgur.com/LImiT1C.png" width="50px" title="source: imgur.com" alt="linkedin-icon" /></a>

            {/* GitHub - Imgur-hosted icon */}
            <a href="https://github.com/ChristyGHanson/" target="_blank" rel="noopener noreferrer"><img className="logo" src="https://i.imgur.com/MmEv2wD.png" width="50px" title="source: imgur.com" alt="github-icon" /></a>

            {/* Twitter - Imgur-hosted icon */}
            <a href="https://twitter.com/hagooshii/" target="_blank" rel="noopener noreferrer"><img className="logo" src="https://i.imgur.com/wkIJJ5y.png" width="50px" title="source: imgur.com" alt="twitter-icon" /></a>

            {/* Email - Imgur-hosted icon */}
            <a href="mailto:chrsthnsn@gmail" target="_blank" rel="noopener noreferrer"><img className="logo" src="https://i.imgur.com/VwZgwY2.png" width="50px" title="source: imgur.com" alt="email-icon" /></a>


        </div>
    );
};
