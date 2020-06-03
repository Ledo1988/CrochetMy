import {language} from "./variablesTitle";

function getPattern(language) {
	let patternTitle, roundTitle, stitchesTitle, descTitle, commentsTitle, patternData, patternComments = '';

	if (language == 'en') {
		patternTitle = '';
		roundTitle = 'Round';
		stitchesTitle = 'Stitches';
		descTitle = 'Description';
		commentsTitle = 'Comments';

		patternComments = 'Tie off. Turn your heart panel so that the bump you just completed is on the left. Join your yarn and repeat rows 18 to 22 for the second bump. Repeat all of the above for the second panel. Move on to assembly!'

		patternData = [
			{id: 1, stitches: 2, desc: 'ch 3', comment: ''},
			{id: 2, stitches: 2, desc: '2sc', comment: ''},
			{id: 3, stitches: 4, desc: '*1inc*x2', comment: ''},
			{id: 4, stitches: 6, desc: '1inc, 2sc, 1inc', comment: ''},
			{id: 5, stitches: 8, desc: '1inc, 4sc, 1inc', comment: ''},
			{id: 6, stitches: 10, desc: '1inc, 6sc, 1inc', comment: ''},
			{id: 7, stitches: 12, desc: '1inc, 8sc, 1inc', comment: ''},
			{id: 8, stitches: 14, desc: '1inc, 10sc, 1inc', comment: ''},
			{id: 9, stitches: 16, desc: '1inc, 12sc, 1inc', comment: ''},
			{id: 10, stitches: 18, desc: '1inc, 14sc, 1inc', comment: ''},
			{id: 11, stitches: 20, desc: '1inc, 16sc, 1inc', comment: ''},
			{id: 12, stitches: 20, desc: '20sc', comment: ''},
			{id: 13, stitches: 22, desc: '1inc, 18sc, 1inc', comment: ''},
			{id: 14, stitches: 22, desc: '22sc', comment: ''},
			{id: 15, stitches: 22, desc: '22sc', comment: ''},
			{id: 16, stitches: 24, desc: '1inc, 20sc, 1inc', comment: ''},
			{id: 17, stitches: 24, desc: '24sc', comment: ''},
			{id: 18, stitches: 12, desc: '12sc', comment: 'Now we will start the heart shape. Each “bump” is done separately, so you will be crocheting only half way across the panel and then we’ll go back and do the second bump afterwards.'},
			{id: 19, stitches: 11, desc: '1dec, 10sc', comment: ''},
			{id: 20, stitches: 9, desc: '1dec, 7sc, 1dec', comment: ''},
			{id: 21, stitches: 7, desc: '1dec, 5sc, 1dec', comment: ''},
			{id: 22, stitches: 4, desc: '1dec, 1sc, *1dec*x2', comment: ''},
		];


	} else if (language == 'ru') {
		patternTitle = '';
		roundTitle = 'Круг';
		stitchesTitle = 'Кол-во петель';
		descTitle = 'Описание';
		commentsTitle = 'Комментарии';
		patternComments = 'Связать. Поверните деталь так, чтобы часть, которую вы только что завершили, была слева. Привяжите пряжу и повторите ряды 18 - 22 для второй части сердца. Повторите все вышеперечисленное для второй детали. Переходите к сборке!'

		patternData = [
			{id: 1, stitches: 2, desc: 'вп 3', comment: ''},
			{id: 2, stitches: 2, desc: '2сбн', comment: ''},
			{id: 3, stitches: 4, desc: '*1пр*x2', comment: ''},
			{id: 4, stitches: 6, desc: '1пр, 2сбн, 1пр', comment: ''},
			{id: 5, stitches: 8, desc: '1пр, 4сбн, 1пр', comment: ''},
			{id: 6, stitches: 10, desc: '1пр, 6сбн, 1пр', comment: ''},
			{id: 7, stitches: 12, desc: '1пр, 8сбн, 1пр', comment: ''},
			{id: 8, stitches: 14, desc: '1пр, 10сбн, 1пр', comment: ''},
			{id: 9, stitches: 16, desc: '1пр, 12сбн, 1пр', comment: ''},
			{id: 10, stitches: 18, desc: '1пр, 14сбн, 1пр', comment: ''},
			{id: 11, stitches: 20, desc: '1пр, 16сбн, 1пр', comment: ''},
			{id: 12, stitches: 20, desc: '20сбн', comment: ''},
			{id: 13, stitches: 22, desc: '1пр, 18сбн, 1пр', comment: ''},
			{id: 14, stitches: 22, desc: '22сбн', comment: ''},
			{id: 15, stitches: 22, desc: '22сбн', comment: ''},
			{id: 16, stitches: 24, desc: '1пр, 20сбн, 1пр', comment: ''},
			{id: 17, stitches: 24, desc: '24сбн', comment: ''},
			{id: 18, stitches: 12, desc: '12сбн', comment: 'Теперь мы начинаем формировать сердечко. Каждый изгиб выполняется отдельно, поэтому сначала вяжем только половину сердца, а затем вернемся и сделаем вторую часть позже.'},
			{id: 19, stitches: 11, desc: '1уб, 10сбн', comment: ''},
			{id: 20, stitches: 9, desc: '1уб, 7сбн, 1уб', comment: ''},
			{id: 21, stitches: 7, desc: '1уб, 5сбн, 1уб', comment: ''},
			{id: 22, stitches: 4, desc: '1уб, 1сбн, *1уб*x2', comment: ''},
		];

	}

	return {
		patternTitle: patternTitle,
		roundTitle: roundTitle,
		stitchesTitle: stitchesTitle,
		descTitle: descTitle,
		commentsTitle: commentsTitle,
		patternData: patternData,
	}
}

let pattern = getPattern(language);

let patternTitle = pattern.patternTitle;
let roundTitle = pattern.roundTitle;
let stitchesTitle = pattern.stitchesTitle;
let descTitle = pattern.descTitle;
let commentsTitle = pattern.commentsTitle;
let patternData = pattern.patternData;

export {patternTitle, roundTitle, stitchesTitle, descTitle,	commentsTitle, patternData};
