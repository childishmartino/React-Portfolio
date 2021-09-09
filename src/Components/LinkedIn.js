import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function LinkedIn() {
    return (
        <Link to= {{ pathname: "https://www.linkedin.com/in/chris-garcia-30248435/" }} target="_blank" className="icon-link">
        <FontAwesomeIcon icon={faLinkedin} className="linkedin icon" />
        </Link>
    )
}

export default LinkedIn;