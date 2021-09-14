import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFilePdf} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import resume from '../assets/ChrisGarcia-Resume.pdf';

function Resume() {
    return (
        <Link to={resume} target="_blank" className="icon-link" download>
        <FontAwesomeIcon icon={faFilePdf} className="resume icon" />
        </Link>
    )
}

export default Resume;