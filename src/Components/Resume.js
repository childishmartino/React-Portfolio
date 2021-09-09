import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFilePdf} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Resume() {
    return (
        <Link to= {{ pathname: "/assets/ChrisGarcia-Resume.pdf"}} target="_blank" className="icon-link" download>
        <FontAwesomeIcon icon={faFilePdf} className="resume icon" />
        </Link>
    )
}

export default Resume;