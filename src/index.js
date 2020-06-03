import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";

let language = 'ru';

let abbrevReal = [
		{name: 'ch'},
		{name: 'sc'},
		{name: 'inc'},
		{name: 'dec'},
	];

let hookSize = 2;

function getTitles(language) {
	let mainTitle, abbrevTitle, materialsTitle, materials, toolsTitle, tools = '';

	if (language == 'en') {
		mainTitle = 'Pattern "Heart"';
		abbrevTitle = 'Abbreviations';
		materialsTitle = 'Materials';
		toolsTitle = 'Tools';

		materials = [
			{id: 1, name: 'Yarn (for crochet hook ' + hookSize + 'mm wide)',},
			{id: 2, name: 'Fiberfill (to stuff)',},
			{id: 3, name: 'Thread (for your choice)',}
		];

		tools = [
			{id: 1, name: hookSize + 'mm crochet hook',},
			{id: 2, name: 'Needle',},
			{id: 3, name: 'Scissors',}
		];

	} else if (language == 'ru') {
		mainTitle = 'Схема "Сердечко"';
		abbrevTitle = 'Условные обозначения';
		materialsTitle = 'Материалы';
		toolsTitle = 'Инструменты';

		materials = [
			{id: 1, name: 'Пряжа (для крючка №' + hookSize + ')'},
			{id: 2, name: 'Наполнитель',},
			{id: 3, name: 'Вышивальная нить (по желанию)',}
		];

		tools = [
			{id: 1, name: 'Крючок ' + hookSize + 'мм',},
			{id: 2, name: 'Игла',},
			{id: 3, name: 'Ножницы',}
		];
	}

	return {
		title: mainTitle,
		abbrev: abbrevTitle,
		materialsTitle: materialsTitle,
		materials: materials,
		toolsTitle: toolsTitle,
		tools: tools,
	}
}

/***************************************************/

function getValues(language) {
	let abbrevData, dialogsData, messagesData, postData;

	if (language == 'en') {

		abbrevData =
			[
				{id: 1, name: 'ch', short: 'ch', long: 'chain stitch'},
				{id: 2, name: 'dc', short: 'dc', long: 'double crochet'},
				{id: 3, name: 'dec', short: 'dec', long: 'decrease'},
				{id: 4, name: 'fo', short: 'fo', long: 'fasten off'},
				{id: 5, name: 'sl', short: 'sl st', long: 'slip stitch'},
				{id: 6, name: 'sc', short: 'sc', long: 'single crochet'},
				{id: 7, name: 'hdc', short: 'hdc', long: 'half double crochet'},
				{id: 8, name: 'tr', short: 'tr', long: 'treble crochet'},
				{id: 9, name: 'dtr', short: 'dtr', long: 'double treble crochet'},
				{id: 10, name: 'bl', short: 'bl', long: 'back loop'},
				{id: 11, name: 'inc', short: 'inc', long: 'increase'},
				{id: 12, name: 'mr', short: 'mr', long: 'magic ring'},
				{id: 13, name: 'rep', short: 'rep', long: 'repeat'},
				{id: 14, name: 'sk', short: 'sk', long: 'skip'},
			];

		dialogsData = [
			{id: 1, name: 'Sasha'},
			{id: 2, name: 'Maksim'},
			{id: 3, name: 'Elena'},
			{id: 4, name: 'Xee'},
		];

		messagesData = [
			{id: 1, message: 'Hi!', likesCount: 12},
			{id: 2, message: 'How are you?', likesCount: 1},
			{id: 3, message: 'Yo!', likesCount: 3},
			{id: 4, message: 'Yo!Yo!', likesCount: 55},
		];

		postData = [
			{id: 1, message: 'Hi', likesCount: 12},
			{id: 2, message: 'How are you?', likesCount: 12},
			{id: 3, message: 'Where are you?', likesCount: 12},
			{id: 4, message: 'Bye', likesCount: 12},
			{id: 5, message: 'Hehey', likesCount: 12},
		];

	} else if (language == 'ru'){

		abbrevData =
			[
				{id: 1, name: 'ch', short: 'вп', long: 'воздушная петля'},
				{id: 2, name: 'dc', short: 'с1н', long: 'столбик с 1 накидом'},
				{id: 3, name: 'dec', short: 'уб', long: 'убавка'},
				{id: 4, name: 'fo', short: 'закончить', long: 'закончить'},
				{id: 5, name: 'sl', short: 'сс', long: 'соединительный столбик'},
				{id: 6, name: 'sc', short: 'сбн', long: 'столбик без накида'},
				{id: 7, name: 'hdc', short: 'псн', long: 'полустолбик с накидом'},
				{id: 8, name: 'tr', short: 'с2н', long: 'столбик с 2 накидами'},
				{id: 9, name: 'dtr', short: 'с3н', long: 'столбик с тремя накидами'},
				{id: 10, name: 'bl', short: 'ип', long: 'только изнаночная петля'},
				{id: 11, name: 'inc', short: 'пр', long: 'прибавка'},
				{id: 12, name: 'mr', short: 'мк', long: 'магический круг'},
				{id: 13, name: 'rep', short: 'повтор', long: 'повтор'},
				{id: 14, name: 'sk', short: 'пропуск', long: 'пропуск'},
			];

		dialogsData = [
			{id: 1, name: 'Sasha'},
			{id: 2, name: 'Maksim'},
			{id: 3, name: 'Elena'},
			{id: 4, name: 'Xee'},
		];

		messagesData = [
			{id: 1, message: 'Hi!', likesCount: 12},
			{id: 2, message: 'How are you?', likesCount: 1},
			{id: 3, message: 'Yo!', likesCount: 3},
			{id: 4, message: 'Yo!Yo!', likesCount: 55},
		];

		postData = [
			{id: 1, message: 'Hi', likesCount: 12},
			{id: 2, message: 'How are you?', likesCount: 12},
			{id: 3, message: 'Where are you?', likesCount: 12},
			{id: 4, message: 'Bye', likesCount: 12},
			{id: 5, message: 'Hehey', likesCount: 12},
		];
	}

	return {
		dialog: dialogsData,
		message: messagesData,
		post: postData,
		abbrevData: abbrevData,
	}
};

let values = getValues(language);
let titles = getTitles(language);

let title = titles.title;
let abbrev = titles.abbrev;
let materialsTitle = titles.materialsTitle;
let materials = titles.materials;
let toolsTitle = titles.toolsTitle;
let toolsData = titles.tools;

let dialog = values.dialog;
let message = values.message;
let post = values.post;
let abbrevData = values.abbrevData;

abbrevData = abbrevData.filter( el => {
	return abbrevReal.some( f => {
		return f.name === el.name;
	});
});

ReactDOM.render( <App
	dialogsData={dialog}
	messagesData={message}
	postData={post}
	mainTitle={title}
	abbrevTitle={abbrev}
	abbrevData={abbrevData}
	materialsTitle={materialsTitle}
	materialsData={materials}
	toolsTitle={toolsTitle}
	toolsData={toolsData}
/>, document.getElementById('root') );