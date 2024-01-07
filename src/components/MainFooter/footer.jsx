import React from 'react';
import "./dist/footer.css";

export default function footer() {
const header_items = [];
     for(let i = 0; i < 4; i++){
        header_items.push(<h2>What is Lorem</h2>);
     } 
const content_items = [];
     for(let i = 0; i < 1; i++){
        content_items.push(<h4>What is Lorem</h4>);
     } 
    return ( 
        <div className = 'footer-cont'>
          <div className = 'content'>
          {/* <img id='logo' src='./images/FooterLogo.png' alt=''></img> */}
              <div className='content-container'>
                {/* <div className='header-items-cont'>
                   {header_items}
                </div> */}
                {/* <div className='content-items-cont'>
                   <div className='content-item'>{content_items}</div>
                   <div className='content-item'>{content_items}</div>
                   <div className='content-item'>{content_items}</div>
                   <div className='buttons-cont'>
                     <button></button>
                     <button></button>
                     <button></button>
                   </div>
                </div> */}
                
              </div>
              <div className='policy-cont'>
                  <div className='rights'>
                    <span>© 2023 InsureCover. All rights reserved.</span>
                  </div>
                  <div className='privacy'>
                    <span>Terms of conditions</span>
                    <span>Privacy Policy</span>
                  </div>
                </div>
          </div>
        </div>
    )
}