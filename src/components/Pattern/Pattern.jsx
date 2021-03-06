import React from "react";
import s from "./Pattern.module.scss";
import PatternRow from "./PatternRow/PatternRow";

const Pattern = (props) => {
	let patternList = props.patternData
		.map( pattern => <PatternRow round={pattern.id}
									 stitches={pattern.stitches}
									 desc={pattern.desc}
									 comment={pattern.comment}
									 id={pattern.id}/>);
	let patternCommDesc = props.patternComments
		.map( pattern => <p>{pattern.desc}</p>);

	return (
		<div className={s.pattern}>
			<table className={s.table}>
				<caption className={s.title}>{props.patternTitle}</caption>
				<thead>
					<th>{props.roundTitle}</th>
					<th>{props.stitchesTitle}</th>
					<th>{props.descTitle}</th>
					<th>{props.commentsTitle}</th>
				</thead>
				{patternList}
			</table>
			<div className={s.comments}>
				{patternCommDesc}
			</div>

		</div>
	)
}

export default Pattern;
