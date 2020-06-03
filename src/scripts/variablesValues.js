import {abbrevReal, language} from "./variablesTitle";

function getValues(language) {
	let abbrevData;

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
				{id: 15, name: '**', short: '* *x...', long: 'repeat instructions in asterisks ... times'},
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
				{id: 15, name: '**', short: '* *x...', long: 'повторять ... раз'},
			];


	}

	return {
		abbrevData: abbrevData,
	}
};

let values = getValues(language);

let abbrevData = values.abbrevData;


abbrevData = abbrevData.filter( el => {
	return abbrevReal.some( f => {
		return f.name === el.name;
	});
});

export {abbrevData};