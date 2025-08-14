import React from "react";
import wema from "../../../assets/wema.jpeg";
import uba from "../../../assets/uba.png";
import access from "../../../assets/access.png";
import style from "./Choice.module.css";

const Choice = () => {
    return (
        <section className={style.choiceSection}>
            <div className={style.choiceContainer}>
                <div className={style.choiceHeader}>
                    <h2 className={style.choiceTitle}>Your Favourite Brands Choose Us</h2>
                    <p className={style.choiceSubtitle}>We are proud to be the choice of leading brands in the industry.</p>
                </div>
                <div className={style.brandsContainer}>
                    <div className={style.brandLogo}>
                        <img src={wema} alt="wema logo" className={style.brandImage} />
                    </div>
                    <div className={style.brandLogo}>
                        <img src={uba} alt="uba logo" className={style.brandImage} />
                    </div>
                    <div className={style.brandLogo}>
                        <img src={access} alt="access logo" className={style.brandImage} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Choice;