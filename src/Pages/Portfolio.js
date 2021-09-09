import React from 'react';
import Title from '../Components/Title';
import portfolioItems from '../Components/portfolioItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLink} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Portfolio() {
    return (
        <div>
            <div className="b-title">
                <Title title={'My Work'} span={''} />
            </div>
            <div className="PortfolioPage">
                {portfolioItems.map((portfolio) => {
                    return <div className="portfolio-item" key={portfolio.id}>
                        <div className="portfolio-content">
                            <a href={portfolio.link}>
                                <img src={portfolio.img} alt="" />
                            </a>
                            <p>{portfolio.name}</p>
                            <div className="portfolio-icons">
                                <Link to={{ pathname: portfolio.github}} target="_blank" className="icon-link">
                                    <FontAwesomeIcon icon={faGithub} className="github icon" />
                                </Link>
                                <Link to={{ pathname: portfolio.link}} target="_blank" className="icon-link">
                                    <FontAwesomeIcon icon={faLink} className="link icon" />
                                </Link>
                            </div>
                        </div>
                    </div>
                })
                }
            </div>
        </div>
    )
}

export default Portfolio;