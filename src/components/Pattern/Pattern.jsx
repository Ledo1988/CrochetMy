import React from "react";
import s from "./Pattern.module.scss";

const Pattern = (props) => {
	return (
		<div className={s.pattern}>
			<table className={s.table}>
				<caption className={s.title}>{props.title}</caption>
				<tr>
					<th>Россия</th>
					<th>Великобритания</th>
					<th>Европа</th>
					<th>Длина ступни, см</th>
				</tr>
				<tr><td>34,5</td><td>3,5</td><td>36</td><td>23</td></tr>
			</table>
		</div>
	)
}

export default Pattern;
