import React from "react";
import "./dist/regcard.css";

export default function RegCard() {
    return (
        <div className="main_container">
            <div id="reg_card_container_right" className="reg_card_container_right">
                {/* <img id="image_r_back" className="image_r_back" src={RightBackPhoto} alt=""></img> */}
                <div id="texts_r" className="text_con_r">
                    <div className="hello_friend_con"><p className="hello_friend" id="text_friend">Не Зареєстровані?</p></div>
                    <div id="enter_text_r_con" className="enter_text_r_con"><p className="enter_text_r" id="text_enter_down">Створіть  свій персональний аккаунт для продовження роботи з нами</p></div>
                </div>
                <form id="form_right_login_con" className="form_right_login_con">
                    <input id="form_right_login_u" className="form_right_login_u" type="text" placeholder="Пошта" />
                    <input id="form_right_login_d" className="form_right_login_d" type="text" placeholder="Пароль" />
                </form>
                <div id="button_r" className="enter_button_r">Зареєструватись</div>


            </div>
            <div id="reg_card_container_left" className="reg_card_container_left">
                <div className="reg_text_container_l">
                    <span id="make_acc_text" className="make_acc_text">Вхід</span>
                </div>
                <div id="reg_circle_l" className="reg_circle_l"><img src="./images/google_ico.png" className="google_ico" alt=""></img></div>
                <div id="reg_use_email" className="reg_use_email">Або використайте вашу пошту для входу </div>
                <form id="log_form" className="log-form">
                    <input id="form_field_t" className="form-field" type="email" placeholder="Email" />
                    <input id="form_field_t" className="form-field" type="password" placeholder="Пароль" />
                </form>
                <span className="forgot-pass-txt">Забули Ваш Пароль?</span>
                <div className="log-button">
                    <button id="next_button" className="l-button">Далі</button>
                </div>
            </div>

        </div>
    )
}