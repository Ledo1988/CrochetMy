import React from "react";
import s from "./Intro.module.scss";
import IntroTitle from "./IntroTitle/IntroTitle";
import image from '../../img/1-main.jpg';
import IntroItem from "./IntroItem/IntroItem";
import IntroAbbrev from "./IntroAbbrev/IntroAbbrev";
import IntroMaterials from "./IntroMaterials/IntroMaterials";

const Intro = (props) => {

	let introAbbrev = props.abbrevData
		.map( abbrev => <IntroAbbrev short={abbrev.short} long={abbrev.long} id={abbrev.id}/>);
	let introMaterials = props.materialsData
		.map( material => <IntroMaterials name={material.name} id={material.id}/>);
	let introTools = props.toolsData
		.map( tool => <IntroMaterials name={tool.name} id={tool.id}/>);

	return (
		<section className={s.introWrapper}>
			<IntroTitle mainTitle={props.mainTitle}/>
			<div className={s.intro}>
				<div className={s.introContent}>
					<IntroItem title={props.abbrevTitle} content={introAbbrev}/>
					<IntroItem title={props.materialsTitle} content={introMaterials}/>
					<IntroItem title={props.toolsTitle} content={introTools}/>
				</div>
				<div className={s.introImg}>
					<img src={image} alt="Image"/>
				</div>
			</div>
		</section>

)
}

export default Intro;
