import React from "react";
import "./dist/logcard.css";

export default function LogCard() {
    return (
        <div className="main_container">
            <div className="card_container_left">
                <div className="text_container_l">
                    <span className="make_acc_text">Створити Обліковий запис</span>
                </div>
                <div className="circle_l"><img src="./images/google_ico.png" className="google_ico" alt=""></img></div>
                <div className="text_container_l_second"></div>
                <span className="use_email">Або використайте вашу пошту для реєстрації </span>
                <form className="log-form">
                    <input className="form-field" type="text" placeholder="Ім`я" />
                    <input className="form-field" type="text" placeholder="Прізвище" />
                    <input className="form-field" type="email" placeholder="Email" />
                </form>
                <div className="log-button">
                    <button className="l-button">Далі</button>
                </div>
            </div>
            <div className="card_container_right">
                <img className="image_r" src="./images/login_background.png" alt=""></img>
            </div>
        </div>
    )
} 