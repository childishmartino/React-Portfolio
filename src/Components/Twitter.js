import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function Twitter() {
    return (
        <Link to= {{ pathname: "https://twitter.com/chrisg1821" }} target="_blank" className="icon-link">
        <FontAwesomeIcon icon={faTwitter} className="twitter icon" />
        </Link>
    )
}

export default Twitter;