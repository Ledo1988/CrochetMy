import React from "react";
import s from "./Intro.module.scss";
import IntroTitle from "./IntroTitle/IntroTitle";
import image from '../../img/1-main.jpg';
import IntroAbbrev from "./IntroAbbrev/IntroAbbrev";

const Intro = (props) => {

	let introAbbrev = props.abbrevData
		.map( abbrev => <IntroAbbrev short={abbrev.short} long={abbrev.long} id={abbrev.id}/>);

	return (
		<section className={s.introWrapper}>
			<IntroTitle mainTitle={props.mainTitle}/>
			<div className={s.intro}>
				<div className={s.introContent}>
					<div className={s.introItem}>
						<div className={s.title}>{props.abbrevTitle}</div>
						<ul className={s.list}>
							{introAbbrev}
						</ul>
					</div>


				</div>
				<div className={s.introImg}>
					<img src={image} alt="Image"/>
				</div>
			</div>
		</section>

)
}

export default Intro;
