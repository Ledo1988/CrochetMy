import React from "react";
import s from "./PatternRow.module.scss";


const PatternRow = (props) => {

	return (
		<tr>
			<td>{props.round}</td>
			<td>{props.stitches}</td>
			<td>{props.desc}</td>
			<td>{props.comment}</td>
		</tr>
	)
}

export default PatternRow;
