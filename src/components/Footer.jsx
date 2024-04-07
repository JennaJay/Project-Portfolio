import React from 'react';
import github from "../images/github-mark-white.png";

function Footer() {
  
    return (

        <div className="footer">
            <img className="gitIcon" width={25} height={25} src={github} alt="gitHub"/>
            <h6><a href="https://github.com/JennaJay">Github</a></h6>
        </div>
    )
}

export default Footer
