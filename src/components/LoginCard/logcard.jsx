import React from "react";
import "./dist/logcard.css";
import RightBackPhoto from './login_background.png'

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
                <img className="image_r_back" src={RightBackPhoto} alt=""></img>
                <div className="text_con_r">
                    <div className="hello_friend_con"><p className="hello_friend">Привіт, Друже!</p></div>
                    <div className="enter_text_r_con"><p className="enter_text_r">Увійди в свій персональний аккаунт для продовження роботи з нами</p></div>
                </div>
                <div className="enter_button_r">Увійти</div>


            </div>
        </div>
    )
} 