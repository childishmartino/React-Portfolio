import React from 'react';
import Resume from '../Components/Resume'
import Github from '../Components/Github';
import LinkedIn from '../Components/LinkedIn';
import Twitter from '../Components/Twitter';
import Email from '../Components/Email'

function Homepage() {
    return (
        <div className="Homepage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I'm
                    <span> Chris. </span>
                </h1>
                <p className="h-sub-text">
                    I am an inquisitive, self-motivated and performance focused professional with a strong understanding of React, Javascript and project management. I just finished a Full Stack Development Bootcamp through the University of Denver. I am now looking to take the next step in my career and join an engineering team to apply my new development skills while continuing to learn.
                </p>
                <div className="icons">
                    <Resume />
                    <Github />
                    <LinkedIn />
                    <Twitter />
                    <Email />
                </div>
            </header>
        </div>
    )
}

export default Homepage;