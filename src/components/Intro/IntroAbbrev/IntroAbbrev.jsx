import React from "react";
import s from "./IntroAbbrev.module.scss";

const IntroAbbrev = (props) => {

	return (
		<li className={s.listItem}>
			{props.short} = {props.long};
		</li>
)
}

export default IntroAbbrev;
