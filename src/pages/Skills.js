import React from "react";
import style from "./Skills.module.scss";
import { CircularProgressBar } from "@tomickigrzegorz/react-circular-progress-bar";

function Skills() {
  return (
    <>
      <div className={style.flexContainer}>
        <div className={style.relative}>
          <CircularProgressBar
            colorCircle="#ededed"
            colorSlice="#e54e21"
            percent={80}
            fontColor="#e54e21"
            round={true}
            fontSize="15px"
            textPosition="1.5rem"
          >
            <div className={style.langHTML}>HTML</div>
          </CircularProgressBar>
        </div>
        <div className={style.relative}>
          <CircularProgressBar
            colorCircle="#ededed"
            colorSlice="#379ad6"
            percent={80}
            fontColor="#379ad6"
            round={true}
            fontSize="15px"
            textPosition="1.5rem"
          >
            <div className={style.langCSS}>CSS</div>
          </CircularProgressBar>
        </div>

        <div className={style.relative}>
          <CircularProgressBar
            colorCircle="#ededed"
            colorSlice="#efd81d"
            percent={55}
            fontColor="#efd81d"
            round={true}
            fontSize="15px"
            textPosition="1.5rem"
          >
            <div className={style.langJS}>JS</div>
          </CircularProgressBar>
        </div>
        <div className={style.relative}>
          <CircularProgressBar
            colorCircle="#ededed"
            colorSlice="#2cc1e8"
            percent={10}
            fontColor="#2cc1e8"
            round={true}
            fontSize="15px"
            textPosition="1.5rem"
          >
            <div className={style.langReact}>React</div>
          </CircularProgressBar>
        </div>
      </div>
    </>
  );
}

export default Skills;
