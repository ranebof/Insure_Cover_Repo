import React from "react";
import "./dist/logcard.css";

export default function LogCard() {
    return (
        <div className="main_container">
            <div className="card_container_left">
               <div className="text_container_l"> 
                <span className="make_acc_text">Створити Обліковий запис</span>
               </div>
                <div className="circle_l"><img src="./images/google_ico.png" className="google_ico"></img></div>
                <div className="text_container_l_second"></div>
                    <span className="use_email">Або використайте вашу пошту для реєстрації </span>
            </div>
            <div className="card_container_right">
                <img className="image_r" src="./images/login_background.png"></img>
            </div>
        </div>
    )
} 