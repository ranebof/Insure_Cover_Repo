import React from "react";
import "./dist/logcard.css";
import RightBackPhoto from './login_background.png'

export function LogEvent(){

    var cardContainerR = document.getElementById('card_container_right');
    var cardContainerL = document.getElementById('card_container_left');
    var text_friend = document.getElementById('text_friend');
    var text_enter_down = document.getElementById('text_enter_down');
    var make_acc_text = document.getElementById('make_acc_text');
    var form_field = document.getElementById('form_field');
    var form_field_t = document.getElementById('form_field_t');
    var form_field_p = document.getElementById('form_field_p');
    var googleIco = document.getElementById('circle_l');
    var use_email = document.getElementById('use_email');
    var next_button = document.getElementById('next_button');
    var button_r = document.getElementById('button_r');
    var enter_text_r_con = document.getElementById('enter_text_r_con');

    cardContainerR.style.width = '60%'
    cardContainerR.style.background ='radial-gradient(258.42% 185.09% at 64.55% 88.93%, #F6F6F6 0%, #D7D7D7 100%), #FFF';
    cardContainerR.style.transition = '0.4s'

    cardContainerL.style.width = '40%'
    cardContainerL.style.transition = '0.4s'
    cardContainerL.style.background = 'linear-gradient(211deg, #39AB59 -8.54%, #39AB8C 96.13%, #39AB90 102.98%)';

    enter_text_r_con.style.margin = '0 0 0 0'

    text_friend.style.color = '#39AB59';
    text_friend.innerText = "Вхід"
    text_friend.style.position = 'absolute'
    text_friend.style.right = '35.2vw'
    text_friend.style.top = '24.5vh'
    text_friend.style.marginBottom = '0'
    text_friend.style.zIndex = '50'
    text_friend.style.transition = '0.05s'


   

    text_enter_down.style.color = 'black';
    text_enter_down.style.top = '39vh'
    text_enter_down.style.right = '28vw'


    googleIco.style.position = 'absolute';
    googleIco.style.transition = '0.05s'
    googleIco.style.right = '36vw'
    googleIco.style.top = '31vh'
    
    form_field.style.position = 'absolute'
    form_field.style.zIndex = '2'
    form_field_t.style.position = 'absolute'
    form_field_t.style.visibility = 'hidden'
    form_field_p.style.visibility = 'visible'

    make_acc_text.innerText = "Не Зареєстровані?"
    make_acc_text.style.color = '#FFFFFF'
    make_acc_text.style.fontSize = '4vh'
    make_acc_text.style.fontWeight = '600'
    use_email.innerText = "Створіть  свій персональний аккаунт для продовження роботи з нами"
    use_email.style.color = '#FFFFFF'
    use_email.style.fontSize = '1.6vh'


    text_enter_down.innerText = "Або використайте вашу пошту для реєстрації"
    text_enter_down.style.position = 'absolute'
    text_enter_down.style.marginTop = '3vh'
    
    next_button.innerText = "Зареєструватись"
    next_button.style.border = '0.01vw solid white'
    next_button.style.background = 'none'
    

    
    button_r.innerText = "Далі"
    button_r.style.backgroundColor = '#39AB59'
    button_r.style.color = '#FFF'

}

export default function LogCard() {

    
    return (
        <div className="main_container">
            <div id="card_container_left" className="card_container_left">
                <div className="text_container_l">
                    <span id="make_acc_text" className="make_acc_text">Створити Обліковий запис</span>
                </div>
                <div id="circle_l" className="circle_l"><img src="./images/google_ico.png" className="google_ico" alt=""></img></div>
                <div className="text_container_l_second"></div>
                <span id="use_email" className="use_email">Або використайте вашу пошту для реєстрації </span>
                <form className="log-form">
                    <input id="form_field" className="form-field" type="text" placeholder="Ім`я" />
                    <input id="form_field_s" className="form-field" type="text" placeholder="Прізвище" />
                    <input id="form_field_t" className="form-field" type="email" placeholder="Email" />
                    <input id="form_field_p" className="form-field" type="password" placeholder="Пароль" />
                </form>
                <div className="log-button">
                    <button id="next_button" className="l-button">Далі</button>
                </div>
            </div>
            <div id="card_container_right" className="card_container_right">
                 {/* <img id="image_r_back" className="image_r_back" src={RightBackPhoto} alt=""></img> */}
                <div id="texts_r" className="text_con_r">
                    <div  className="hello_friend_con"><p className="hello_friend" id="text_friend">Привіт, Друже!</p></div>
                    <div id="enter_text_r_con" className="enter_text_r_con"><p className="enter_text_r" id="text_enter_down">Увійди в свій персональний аккаунт для продовження роботи з нами</p></div>
                </div>
                <div id="button_r" className="enter_button_r" onClick={LogEvent}>Увійти</div>


            </div>
        </div>
    )
} 