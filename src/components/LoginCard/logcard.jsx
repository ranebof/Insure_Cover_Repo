import React, { useState } from "react";
import authService from "../../service/login";
import "./dist/logcard.css";
import { useNavigate } from 'react-router-dom';


export default function LogCard() {
    const [isClicked, setIsClicked] = useState(false)
    const [isRegistered, setIsRegistered] = useState(true)
    const [userName, setUsername] = useState('')
    const [pass, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [isRightPanelActive, setIsRightPanelActive] = useState(false);

    const toggleAuthCard = () => {
        setIsRightPanelActive(!isRightPanelActive);
    }

    const navigate = useNavigate();

    const regFunct = async () => {
        try {

            await authService.register({ username: userName, password: pass, email: email });
           // window.location.href = '/create'
        } catch (error) {
            console.error('Error during registration:', error);
        }
    }




    const logFunct = async () => {
        // const username = "xx@gmail.com"
        // const password = "pass12345"
        try {
            const response = await authService.login(userName, pass);
            if (response.success) {
                console.log("Hello!")

            } else {
                console.log('Login failed: Incorrect username or password');
            }
        } catch (error) {
            
        }
        finally {
            //window.location.href = "/create"
        }
       
    }

    function LogEvent() {
        if (isClicked === false) {
            setIsRegistered(false)
            setIsClicked(true)
        }
        else {
            logFunct()
            setIsClicked(false)
        }
    }

    


    return (
        <div className="main_container">
            <div className={`auth-container ${isRightPanelActive ? 'right-panel-active' : ''}`} id="auth-container">
                <div className="auth-form-container sign-up-container">
                    <form className="auth-form" action="#">
                        <h1>Створити акаунт</h1>

                        <span>Або використайте вашу пошту для реєстрації</span>
                        <input className="auth-card-inputs" type="text" placeholder="Логін" value={userName} onChange={(e) => setUsername(e.target.value)} />
                        <input className="auth-card-inputs email-input" type="email" placeholder="Пошта" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input className="auth-card-inputs" type="text" placeholder="Прізвище" />
                        <input className="auth-card-inputs pass-input" type="password" placeholder="Пароль" value={pass} onChange={(e) => setPassword(e.target.value)} />

                        <button className="auth-card-btn" onClick={regFunct}>далі</button>
                    </form>
                </div>
                <div className="auth-form-container sign-in-container">
                    <div className="auth-form" action="#">
                        <h1>Вхід</h1>

                        <span>Або використайте вашу пошту для входу</span>
                        <input className="auth-card-inputs email-input" type="email" placeholder="Пошта" value={userName} onChange={(e) => setUsername(e.target.value)} />
                        <input className="auth-card-inputs pass-input" type="password" placeholder="Пароль" value={pass} onChange={(e) => setPassword(e.target.value)} />
                        <button className="auth-card-btn " onClick={logFunct}>далі</button>
                    </div>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h2>Привіт, друже!</h2>
                            <p>Увійди в свій персональний аккаунт для продовження роботи з нами</p>
                            <button className="ghost" id="signIn" onClick={toggleAuthCard}>увійти</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h2>Не зареєстровані?</h2>
                            <p>Створіть  свій персональний аккаунт для продовження роботи з нами</p>
                            <button className="ghost" id="signUp" onClick={toggleAuthCard}>зареєструватись</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 