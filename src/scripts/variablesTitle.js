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

let titles = getTitles(language);

let title = titles.title;
let abbrev = titles.abbrev;
let materialsTitle = titles.materialsTitle;
let materials = titles.materials;
let toolsTitle = titles.toolsTitle;
let toolsData = titles.tools;

export {language, abbrevReal, title, abbrev, materialsTitle, materials,	toolsTitle, toolsData};
