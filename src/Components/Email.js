import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Email() {
    return (
        <Link to= {{ pathname: "mailto:chrisg1821@gmail.com" }} target="_blank" className="icon-link">
        <FontAwesomeIcon icon={faEnvelope} className="email icon" />
        </Link>
    )
}

export default Email;