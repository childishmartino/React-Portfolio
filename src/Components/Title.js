import React from 'react'

function Title({title, span}) {
    return (
        <div className="Title">
            <h2>
                {title}
                <span> {span}</span>
            </h2>
        </div>
    )
}

export default Title;