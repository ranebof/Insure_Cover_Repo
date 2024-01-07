import React from 'react';
import "./dist/linkButtons.css";

function linkButtons() {
    const button_item = [];
    for (let i = 0; i < 3; i++) {
        button_item.push(<a className='button' href='.'>
            <span className="inner"></span>
            <i className="button-i"></i>
        </a>);
    }

    return (
        <div className='buttons-cont'>
            {button_item}
        </div>
    )
}
export default linkButtons;