import React from "react";
import "./dist/logcard.css";



export function LogEvent(){

    var cardContainerR = document.getElementById('card_container_right');
    var cardContainerL = document.getElementById('card_container_left');
    var text_friend = document.getElementById('text_friend');
    var text_enter_down = document.getElementById('text_enter_down');
    var make_acc_text = document.getElementById('make_acc_text');
    var form_field = document.getElementById('form_field');
    var form_field_s = document.getElementById('form_field_s');
    var form_field_t = document.getElementById('form_field_t');
    var googleIco = document.getElementById('circle_l');
    var use_email = document.getElementById('use_email');
    var next_button = document.getElementById('next_button');
    var button_r = document.getElementById('button_r');
    var enter_text_r_con = document.getElementById('enter_text_r_con');
    var log_form = document.getElementById('log_form');
    var form_right_login_con = document.getElementById('form_right_login_con');
    var form_right_login_u = document.getElementById('form_right_login_u');
    var form_right_login_d = document.getElementById('form_right_login_d');
    

    cardContainerR.style.width = '60%'
    cardContainerR.style.background = 'radial-gradient(258.42% 185.09% at 64.55% 88.93%, #F6F6F6 0%, #D7D7D7 100%), #FFF';
    cardContainerR.style.transition = '0.4s'

    cardContainerL.style.width = '40%'
    cardContainerL.style.transition = '0.4s'
    cardContainerL.style.alignContent = 'center'
    cardContainerL.style.alignItems = 'center'
    cardContainerL.style.textAlign = 'center'
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





    text_enter_down.style.color = 'black';
    text_enter_down.style.top = '39vh'
    text_enter_down.style.right = '28vw'


    googleIco.style.position = 'absolute';
    googleIco.style.left = '61.4vw'
    googleIco.style.bottom = '61.1vh'
    googleIco.style.margin = '0 0 0 0'

    form_field.style.opacity = '0'
    form_field.style.width = '0vw'
    form_field.style.height = '0vh'
    form_field.style.margin = '0 0 0 0'

    form_field_s.style.opacity = '0'
    form_field_s.style.width = '0vw'
    form_field_s.style.height = '0vh'
    form_field_s.style.margin = '0 0 0 0'

    form_field_t.style.opacity = '0'
    form_field_t.style.width = '0vw'
    form_field_t.style.height = '0vh'
    form_field_t.style.margin = '0 0 0 0'
    
    make_acc_text.innerText = "Не Зареєстровані?"
    make_acc_text.style.color = '#FFFFFF'
    make_acc_text.style.position = 'absolute'
    make_acc_text.style.left = '19.5vw'
    make_acc_text.style.bottom = '57vh'
    make_acc_text.style.fontSize = '4vh'
    make_acc_text.style.fontWeight = '600'

    use_email.innerText = "Створіть свій персональний акаунт для продовження роботи з нами"
    use_email.style.color = '#FFFFFF'
    use_email.style.fontSize = '1.4vh'
    use_email.style.margin = '32vh 0 0 0'
    use_email.style.opacity = '0.8'

    text_enter_down.innerText = "Або використайте вашу пошту для реєстрації"
    text_enter_down.style.position = 'absolute'
    text_enter_down.style.marginTop = '2vh'
    
    next_button.innerText = "Зареєструватись"
    next_button.style.border = '0.01vw solid white'
    next_button.style.background = 'none'
    next_button.style.marginTop = '1vh'
    
    next_button.addEventListener("mouseenter", function() {
        next_button.style.backgroundColor = "white"
        next_button.style.color = "#39AB59"
    });

    next_button.addEventListener('mouseleave', function(){
        next_button.style.background ="none"
        next_button.style.color = "white"

    });


    button_r.innerText = "Далі"
    button_r.style.backgroundColor = '#39AB59'
    button_r.style.color = '#FFF'
    button_r.style.marginTop = '2vh'
    button_r.style.height = '6vh'

    button_r.addEventListener("mouseenter", function() {
        button_r.style.backgroundColor = "#48d46f"
    });

    button_r.addEventListener('mouseleave', function(){
        button_r.style.backgroundColor ="#39AB59"
    });

    

    log_form.style.opacity = '0'
    log_form.style.width = '0vw'
    log_form.style.height = '0vh'


    form_right_login_con.style.width = '20vw'
    form_right_login_con.style.height = '14vh'

    form_right_login_u.style.width = '20vw'
    form_right_login_u.style.height = '6vh'
    form_right_login_u.style.opacity = '1'
    form_right_login_u.style.display = 'block'

    form_right_login_d.style.width = '20vw'
    form_right_login_d.style.height = '6vh'
    form_right_login_d.style.opacity = '1'
    form_right_login_d.style.display = 'block'






}


export function RegisterButton() {
    var cardContainerR = document.getElementById('card_container_right');
    var cardContainerL = document.getElementById('card_container_left');
    var text_friend = document.getElementById('text_friend');
    var googleIco = document.getElementById('circle_l');
    var make_acc_text = document.getElementById('make_acc_text');
    var use_email = document.getElementById('use_email');
    var next_button = document.getElementById('next_button');
    var form_field = document.getElementById('form_field');
    var form_field_s = document.getElementById('form_field_s');
    var form_field_t = document.getElementById('form_field_t');
    var log_form = document.getElementById('log_form');
    var form_right_login_con = document.getElementById('form_right_login_con');
    var form_right_login_u = document.getElementById('form_right_login_u');
    var form_right_login_d = document.getElementById('form_right_login_d');
    var text_enter_down = document.getElementById('text_enter_down');
    var enter_text_r_con = document.getElementById('enter_text_r_con');
    var button_r = document.getElementById('button_r');




    

    cardContainerR.style.width = '40%'
    cardContainerR.style.background ='linear-gradient(211deg, #39AB59 -8.54%, #39AB8C 96.13%, #39AB90 102.98%)';
    cardContainerR.style.transition = '0.4s'


    cardContainerL.style.width = '60%'
    cardContainerL.style.transition = '0.4s'
    cardContainerL.style.background = 'radial-gradient(258.42% 185.09% at 64.55% 88.93%, #F6F6F6 0%, #D7D7D7 100%), #FFF';
    cardContainerL.style.alignContent = 'center'
    cardContainerL.style.alignItems = 'center'
    cardContainerL.style.textAlign = 'center'

    text_friend.style.color = 'white';
    text_friend.innerText = "Привіт, Друже!"
    text_friend.style.position = 'absolute'
    text_friend.style.right = '23.3%'
    text_friend.style.top = '38.5%'
    text_friend.style.fontSize = '4vh'

    googleIco.style.position = 'absolute';
    googleIco.style.left = '34vw'
    googleIco.style.bottom = '65.5vh'
    googleIco.style.margin = '0 0 0 0'
    googleIco.style.width = '2.5vw'
    googleIco.style.height = ' 5vh'

    make_acc_text.innerText = "Створити обліковий запис"
    make_acc_text.style.color = '#3AAC7F'
    make_acc_text.style.position = 'absolute'
    make_acc_text.style.left = '27.3vw'
    make_acc_text.style.bottom = '74.4vh'
    make_acc_text.style.fontSize = '2.7vh'
    make_acc_text.style.fontWeight = '800'
    make_acc_text.style.lineHeight = '100%'
    make_acc_text.style.textTransform = 'capitalize'


    use_email.innerText = "Або використайте вашу пошту для реєстрації"
    use_email.style.color = '#343434'
    use_email.style.fontSize = '2.1vh'
    use_email.style.margin = '22.6vh 0 0 1.5vw'
    use_email.style.opacity = '0.8'

    log_form.style.opacity = '1'
    log_form.style.width = '100%'
    log_form.style.height = '40%'


    form_field.style.opacity = '100%'
    form_field.style.width = '20vw'
    form_field.style.height = '6vh'
    form_field.style.margin = '4vh 0 0 0'
    form_field.style.backgroundColor = '#E4E4E4'
    form_field.style.backgroundRepeat = 'no-repeat'


    form_field_s.style.opacity = '100%'
    form_field_s.style.width = '20vw'
    form_field_s.style.height = '6vh'
    form_field_s.style.margin = '2vh 0 0 0'
    form_field_s.style.backgroundColor = '#E4E4E4'
    form_field_s.style.backgroundSize = '1.2vw'
    form_field_s.style.backgroundRepeat = 'no-repeat'
    
    form_field_t.style.opacity = '100%'
    form_field_t.style.width = '20vw'
    form_field_t.style.height = '6vh'
    form_field_t.style.margin = '2vh 0 0 0'
    form_field_t.style.backgroundColor = '#E4E4E4'
    form_field_t.style.backgroundRepeat = 'no-repeat'
    
    next_button.innerText = "Далі"
    next_button.style.border = '0.01vw solid white'
    next_button.style.backgroundColor = '#39AB59'
    next_button.style.marginTop = '2vh'
    next_button.style.transition = '0.3s'

    next_button.addEventListener("mouseenter", function() {
        next_button.style.backgroundColor = "#3fca66"
        next_button.style.color = 'white'
    });

    next_button.addEventListener('mouseleave', function(){
        next_button.style.backgroundColor ="#39AB59"
        next_button.style.color = 'white'
    });

    form_right_login_con.style.width = '0vw'
    form_right_login_con.style.height = '0vh'

    form_right_login_u.style.width = '0vw'
    form_right_login_u.style.height = '0h'
    form_right_login_u.style.opacity = '0'
    form_right_login_u.style.display = 'none'

    form_right_login_d.style.width = '0vw'
    form_right_login_d.style.height = '0vh'
    form_right_login_d.style.opacity = '0'
    form_right_login_d.style.display = 'none'

    text_enter_down.innerText = "Увійди в свій персональний аккаунт для продовження роботи з нами"
    text_enter_down.style.position = 'static'
    text_enter_down.style.color = '#FFF'
    text_enter_down.style.fontSize = '1.6vh'
    text_enter_down.style.fontWeight = '300'
    text_enter_down.style.fontStyle = 'thin'
    text_enter_down.style.marginTop = '2.15vh'
    text_enter_down.style.lineHeight = '1.7vh'

    enter_text_r_con.style.width = '17vw'
    enter_text_r_con.style.height = 'auto'
    enter_text_r_con.style.marginTop = '8.6vh'



    button_r.innerText = "Увійти"
    button_r.style.color = '#FFF'
    button_r.style.backgroundColor = 'transparent'
    button_r.style.marginTop = '1vh'
    button_r.style.height = '4.5vh'


    button_r.addEventListener("mouseenter", function() {
        button_r.style.backgroundColor = "white"
        button_r.style.color = '#39AB59'
    });

    button_r.addEventListener('mouseleave', function(){
        button_r.style.backgroundColor = 'transparent'
        button_r.style.color = 'white'
    });




}




export default function LogCard() {


    return (
        <div className="main_container">
            <div id="card_container_left" className="card_container_left">
                <div className="text_container_l">
                    <span id="make_acc_text" className="make_acc_text">Створити Обліковий запис</span>
                </div>
                <div id="circle_l" className="circle_l"><img src="./images/google_ico.png" className="google_ico" alt=""></img></div>
                <div id="use_email" className="use_email">Або використайте вашу пошту для реєстрації </div>
                <form id="log_form" className="log-form">
                    <input id="form_field" className="form-field" type="text" placeholder="Ім`я" />
                    <input id="form_field_s" className="form-field" type="text" placeholder="Прізвище" />
                    <input id="form_field_t" className="form-field" type="email" placeholder="Email" />
                </form>
                <div className="log-button">
                    <button id="next_button" className="l-button" onClick={RegisterButton}>Далі</button>
                </div>
            </div>
            <div id="card_container_right" className="card_container_right">
                {/* <img id="image_r_back" className="image_r_back" src={RightBackPhoto} alt=""></img> */}
                <div id="texts_r" className="text_con_r">
                    <div className="hello_friend_con"><p className="hello_friend" id="text_friend">Привіт, Друже!</p></div>
                    <div id="enter_text_r_con" className="enter_text_r_con"><p className="enter_text_r" id="text_enter_down">Увійди в свій персональний аккаунт для продовження роботи з нами</p></div>
                </div>
                <form id="form_right_login_con" className="form_right_login_con">
                    <input id="form_right_login_u" className="form_right_login_u" type="text" placeholder="Пошта" />
                    <input id="form_right_login_d" className="form_right_login_d" type="text" placeholder="Пароль" />
                </form>
                <div id="button_r" className="enter_button_r" onClick={LogEvent}>Увійти</div>


            </div>
        </div>
    )
} 