import React from "react";
import s from "./IntroItem.module.scss";

const IntroItem = (props) => {

	return (
		<div className={s.item}>
			<div className={s.title}>{props.title}</div>
			<ul className={s.list}>
				{props.content}
			</ul>
		</div>
)
}

export default IntroItem;
