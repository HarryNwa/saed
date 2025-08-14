import React from "react";
import nysc from "../../../assets/images.jpeg";
import style from "./Hero.module.css";

const Hero = () => {
    return (
        <section className={style.hero}>
            <div className={style.heroContent}>
                <div className={style.textContent}>
                    <h1 className={style.heroTitle}>Welcome to SAED</h1>
                    <p className={style.heroSubtitle}>Your best place to learn a skill while in service.</p>
                </div>
                <div className={style.imageContainer}>
                    <img src={nysc} alt="NYSC logo" className={style.heroImage} />
                </div>
            </div>
        </section>
    );
}

export default Hero;