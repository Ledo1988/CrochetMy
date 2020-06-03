import React from "react";
import s from "./IntroTitle.module.scss";
import leaf from "../../../img/ico_leaf-2.png";

const IntroTitle = (props) => {

	return (
		<div className={s.header}>
			<div className={`${s.img} ${s.imgLeft}`}>
				<img src={leaf} alt="Leaf" height="250"/>
			</div>
			<h1  className={s.title}>{props.mainTitle}</h1>
			<div className={`${s.img} ${s.imgRight}`}>
				<img src={leaf} alt="Leaf" height="250"/>
			</div>
		</div>
)
}

export default IntroTitle;
