import "./dist/NewCreatePolicyForm.css";
import React from "react";

export default function NewCreatePolicyForm() {
    return(
        <div className="container">
            <h1>Створити Поліс</h1>
            
            <input type="text" className="input-field" placeholder="Номер Полісу" />
            <input type="text" className="input-field" placeholder="Назва Полісу" />
            <input type="text" className="input-field" placeholder="Компанія" />
            
            <button className="button">ДАЛІ</button>
        </div>
    )
}
