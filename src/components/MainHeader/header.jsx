import React from 'react';
import "./dist/header.css";

export default function header(){

    return(
         <div className='HeaderMain'>
                <div className='logo_container'>
                    <img id='Logo' src="./images/Logo.png" alt='logo'></img>
                    <span className='logo_text'>InsureCover</span>
                </div>
                <div className='right_container'>
                    <span className='login_text_r'>Вхід</span>
                    <div className='block_r'>
                        <p className='register_text_r'>Реєстрація</p>
                    </div>
                    <div className='circle_r'></div>

                </div>

         </div>
    )
}
