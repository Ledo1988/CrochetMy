import React from "react";
import s from "./Header.module.scss";
import Logo from "./Logo/Logo";
import Socio from "./Socio/Socio";

const Header = () => {
	return (
		<div className="header--wrapper">
			<header className={s.header}>
				<Logo/>
				<Socio/>
			</header>
		</div>
	)
}

export default Header;
