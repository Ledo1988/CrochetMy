import React from "react";
import s from "./Socio.module.scss";
import instagram from '../../../img/ico_socio-instagram.png';
import telegram from '../../../img/ico_socio-telegram.png';
import etsy from '../../../img/ico_socio-etsy.png';


const Socio = () => {
	return (
		<div className={s.socio}>
			<ul className={s.list}>
				<li className={s.listItem}>
					<a href="#" className={`${s.listLink} ${s.listLinkInstagram}`}>
						<div className={s.listLinkImg}>
							<img src={instagram} alt="Instagram"/>
						</div>
						<span className={s.listLinkTitle}>raspberry__leaf</span>
					</a>
				</li>
				<li className={s.listItem}>
					<a href="#" className={`${s.listLink} ${s.listLinkTelegram}`}>
						<div className={s.listLinkImg}>
							<img src={telegram} alt="Telegram"/>
						</div>
						<span className={s.listLinkTitle}>raspberrymood</span>
					</a>
				</li>
				{/*<li className={s.listItem}>*/}
				{/*	<a href="#" className={`${s.listLink} ${s.listLinkEtsy}`}>*/}
				{/*		<div className={s.listLinkImg}>*/}
				{/*			<img src={etsy} alt="Etsy"/>*/}
				{/*		</div>*/}
				{/*		<span className={s.listLinkTitle}>raspberry__leaf</span>*/}
				{/*	</a>*/}
				{/*</li>*/}
			</ul>
		</div>
	)
}

export default Socio;
