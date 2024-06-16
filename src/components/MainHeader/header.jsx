import React from "react";
import "./dist/header.css";

export default function header() {
  return (
    // <div className="HeaderMain">
    //   <div className="logo_container">
    //     <img id="Logo" src="./images/Logo.png" alt="logo"></img>
    //     <span className="logo_text">InsureCover</span>
    //   </div>

    //   <div class="search_and_create">
    //     <div class="search_text_button">Пошук полісу</div>
    //     <div class="create_text_button">Створення полісу</div>
    //     <div class="saved_text_button">Збережені поліси</div>
    //   </div>

    //   <div className="right_container">
    //     <div className="login_text_r">Вхід</div>
    //     <div className="block_r">
    //       <p className="register_text_r">Реєстрація</p>
    //     </div>
    //     <div className="circle_r"></div>
    //   </div>
    // </div>

    <div className="HeaderMain">
      <div class="navbar">
        <div class="logo">
          <img id="Logo" src="./images/Logo.png" alt="logo"></img>
          <span>InsureCover</span>
        </div>
        <div class="nav-links">
          <div class="search_text_button">Пошук полісу</div>
          <div class="create_text_button">Створення полісу</div>
          <div class="saved_text_button">
            <a
              href="/saved"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Збережені поліси
            </a>
          </div>
        </div>
        <div className="right_container">
          <div className="login_text_r">Вхід</div>
          <div className="block_r">
            <p className="register_text_r">Реєстрація</p>
          </div>
          <div className="circle_r"></div>
        </div>
      </div>
    </div>
  );
}
