import React from 'react';
import "./dist/footer.css";

export default function footer() {
const items = [];
     for(let i = 0; i < 4; i++){
        items.push(<h2>What is Lorem</h2>);
     } 

    return ( 
        <div className = 'footer-cont' >
          <div className = 'content'>
              <img id='logo' src='./images/FooterLogo.png'></img>
              {items}
          </div>
        </div>
    )
}
