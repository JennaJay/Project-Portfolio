import React from "react";
import Horiseon from "../images/Horiseon.png";
import Quiz from "../images/Quiz.png";
import Notes from "../images/Notes.png";
import Weather from "../images/Weather.png";
import Planner from "../images/Planner.png"
import miniPortfolio from "../images/miniPortfolio.png"
import { Link } from "react-router-dom";


function Portfolio() {
return (

    <div className="port-container">
        <h1 className="projects">Projects</h1>
        <div className="container">
            <div className="row">
                <h2 className="title">Horiseon Site Update</h2>
                <img className="projectImage" width={250} height={100} src={Horiseon} alt="Horiseon"/>  
                <h3>deployedLink:<a href="http://Jennajay.github.io/Horiseon-Site-Update">http://Jennajay.github.io/Horiseon-Site-Update</a></h3>
                <h3>githubLink:<a href="https://github.com/JennaJay/Horiseon-Site-Update">https://github.com/JennaJay/Horiseon-Site-Update</a></h3>

                <h2 className="title">JavaScript Quiz Time</h2>
                <img className="projectImage" width={250} height={100} src={Quiz} alt="Quiz" /> 
                <h3>deployedLink:<a href="http://JennaJay.github.io/Javascript-quiz-time">http://JennaJay.github.io/Javascript-quiz-time</a></h3>
                <h3>githubLink:<a href="https://github.com/JennaJay/Javascript-quiz-time">https://github.com/JennaJay/Javascript-quiz-time</a></h3>

                <h2 className="title">Note Taker</h2>
                <img className="projectImage" width={250} height={100} src={Notes} alt="Notes" />
                <h3>deployedLink:<a href="https://note-taker-ch-2fccc6f24074.herokuapp.com">https://note-taker-ch-2fccc6f24074.herokuapp.com</a></h3>
                <h3>githubLink:<a href="https://github.com/JennaJay/Note-Taker">https://github.com/JennaJay/Note-Taker</a></h3>

                <h2 className="title">Weather</h2>
                <img className="projectImage" width={250} height={100} src={Weather} alt="Weather" />
                <h3>deployedLink:<a href="http://JennaJay.github.io/Weather-Forecast/Index.html">http://JennaJay.github.io/Weather-Forecast/Index.html</a></h3>
                <h3>githubLink:<a href="https://github.com/JennaJay/Weather-Forecast">https://github.com/JennaJay/Weather-Forecast</a></h3>

                <h2 className="title">Daily Planner</h2>
                <img className="projectImage" width={250} height={100} src={Planner} alt="Planner" />
                <h3>deployedLink:< a href="http://JennaJay.github.io/Work-Day-Planner">http://JennaJay.github.io/Work-Day-Planner</a></h3>
                <h3>githubLink:<a href="https://github.com/JennaJay/Work-Day-Planner">https://github.com/JennaJay/Work-Day-Planner</a></h3>

                <h2 className="title">Portfolio</h2>
                <img className="projectImage" width={250} height={100} src={miniPortfolio} alt="miniPortfolio" />
                <h3>deployedLink:<a href="http://JennaJay.github.io/Class-Portfolio2">http://JennaJay.github.io/Class-Portfolio2</a></h3>
                <h3>githubLink:<a href="https://github.com/JennaJay/Class-Portfolio2">https://github.com/JennaJay/Class-Portfolio2</a></h3>
            </div>
        </div>
    </div>

);
}

export default Portfolio