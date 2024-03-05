import React from 'react';
import "./dist/header.css";
import {LogEvent} from '../LoginCard/logcard'

export default function header(){

    return(
         <div className='HeaderMain'>
                <div className='logo_container'>
                    <img id='Logo' src="./images/Logo.png" alt='logo'></img>
                    <span className='logo_text'>InsureCover</span>
                </div>
                {/* <div className='cont_search_and_create'>
                    <div className='search_policy'>Пошук Полісу</div>
                    <div className='create_policy'>Створення Полісу</div>
                </div> */}

                <div className='right_container'>
                    <div className='login_text_r' onClick={LogEvent}>Вхід</div>
                    <div className='block_r'>
                        <p className='register_text_r'>Реєстрація</p>
                    </div>
                    <div className='circle_r'></div>

                </div>

         </div>
    )
}
