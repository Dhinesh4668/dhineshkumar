import React, { useState } from "react";
import axios from "axios";
import { HomeBannerimage } from "../assets/images";
import '../Styles/HomeStyles.css';
import { linkdinicon, twiter, socialIcon, socialicon} from "../assets/icons";

const HomeScreen = () => {
    const [userData, setUserData] = useState('');
    return (
        <div className="home-container">
            {/* home detail container */}
            <div className="home-leftcontainer">
                <p>Hey there!</p>
                <h2>Dhineshkumar.<br /> <span className="strock">Fullstack Mobile & WEB Developer</span> <br /> From India.</h2>
                <p style={{ color: 'gray' }}>I'm Dhineshkumar . i specialize in developing full-stack react & react native . with experties in both front-end , and backend development,</p>
                {/* home icons */}
                <div className="home-icons">
                    <img src={linkdinicon} height={50} width={50}/> 
                    <img src={twiter} height={50} width={50}/>
                    <img src={socialIcon} height={50} width={50}/>
                    <img src={socialicon} height={50} width={50}/>
                </div>
            </div>
            {/* home avathor container */}
            <div className="home-imageConteriner">
                <img className="home-image" src={HomeBannerimage} width={889} height={500} />
            </div>

        </div>
    )
}


export default HomeScreen