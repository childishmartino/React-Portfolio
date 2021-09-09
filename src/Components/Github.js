import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function Github() {
    return (
        <Link to= {{ pathname: "https://github.com/childishmartino" }} target="_blank" className="icon-link">
        <FontAwesomeIcon icon={faGithub} className="github icon" />
        </Link>
    )
}

export default Github;