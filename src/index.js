import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";

function getValues(language) {

	if (language == 'en') {

		let mainTitle = 'Pattern "Heart"';

		let abbrevTitle = 'Abbreviations:';

		let abbrevData =
			[
				{id: 1, name: 'ch', short: 'ch', long: 'chain stitch'},
				{id: 2, name: 'dc', short: 'dc', long: 'double crochet'},
				{id: 3, name: 'dec', short: 'dec', long: 'decrease'},
				{id: 4, name: 'fo', short: 'fo', long: 'fasten off'},
			];

		let dialogsData = [
			{id: 1, name: 'Sasha'},
			{id: 2, name: 'Maksim'},
			{id: 3, name: 'Elena'},
			{id: 4, name: 'Xee'},
		];

		let messagesData = [
			{id: 1, message: 'Hi!', likesCount: 12},
			{id: 2, message: 'How are you?', likesCount: 1},
			{id: 3, message: 'Yo!', likesCount: 3},
			{id: 4, message: 'Yo!Yo!', likesCount: 55},
		];

		let postData = [
			{id: 1, message: 'Hi', likesCount: 12},
			{id: 2, message: 'How are you?', likesCount: 12},
			{id: 3, message: 'Where are you?', likesCount: 12},
			{id: 4, message: 'Bye', likesCount: 12},
			{id: 5, message: 'Hehey', likesCount: 12},
		];

		return {
			dialog: dialogsData,
			message: messagesData,
			post: postData,
			title: mainTitle,
			abbrev: abbrevTitle,
			abbrevData: abbrevData,
		}
	} else if (language == 'ru'){

		let mainTitle = 'Схема "Сердечко"';

		let abbrevTitle = 'Условные обозначения:';

		let abbrevData =
			[
				{id: 1, name: 'ch', short: 'вп', long: 'воздушная петля'},
				{id: 2, name: 'dc', short: 'с1н', long: 'столбик с 1 накидом'},
				{id: 3, name: 'dec', short: 'уб', long: 'убавка'},
				{id: 4, name: 'fo', short: 'fo', long: 'закончить'},
			];

		let dialogsData = [
			{id: 1, name: 'Sasha'},
			{id: 2, name: 'Maksim'},
			{id: 3, name: 'Elena'},
			{id: 4, name: 'Xee'},
		];

		let messagesData = [
			{id: 1, message: 'Hi!', likesCount: 12},
			{id: 2, message: 'How are you?', likesCount: 1},
			{id: 3, message: 'Yo!', likesCount: 3},
			{id: 4, message: 'Yo!Yo!', likesCount: 55},
		];

		let postData = [
			{id: 1, message: 'Hi', likesCount: 12},
			{id: 2, message: 'How are you?', likesCount: 12},
			{id: 3, message: 'Where are you?', likesCount: 12},
			{id: 4, message: 'Bye', likesCount: 12},
			{id: 5, message: 'Hehey', likesCount: 12},
		];

		return {
			dialog: dialogsData,
			message: messagesData,
			post: postData,
			title: mainTitle,
			abbrev: abbrevTitle,
			abbrevData: abbrevData,
		}
	}
};

let values = getValues('en');
let dialog = values.dialog;
let message = values.message;
let post = values.post;
let title = values.title;
let abbrev = values.abbrev;
let abbrevData = values.abbrevData;

ReactDOM.render( <App
	dialogsData={dialog}
	messagesData={message}
	postData={post}
	mainTitle={title}
	abbrevTitle={abbrev}
	abbrevData={abbrevData}
/>, document.getElementById('root') );