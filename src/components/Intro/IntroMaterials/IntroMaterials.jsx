import React from "react";
import s from "./IntroMaterials.module.scss";

const IntroMaterials = (props) => {

	return (
		<li className={s.listItem}>
			{props.name}
		</li>
)
}

export default IntroMaterials;
