import {language} from "./variablesTitle";

function getPattern(language) {
	let patternTitle, roundTitle, stitchesTitle, descTitle, commentsTitle, patternData, patternComments = '';

	if (language == 'en') {
		patternTitle = '';
		roundTitle = 'Round';
		stitchesTitle = 'Stitches';
		descTitle = 'Description';
		commentsTitle = 'Comments';

		patternComments = [
			{id: 1, desc: `Bowtie measures 1 1/2'' wide x 3'' long (4 x 7.5 cm). In the end tie will be ready. Fasten off, leaving long tail for sewing.` +
					"Afterwards we make a Cinch Band Ch 7. Row 1: Sc in 2nd ch from hook and in each ch across—6 sc. Fasten off, leaving long tail for sewing.\n" +
					"Neck Band Work as many ch sts as needed to fit comfortably around wearer’s neck. Row 1: Sc in 2nd ch from hook and in each ch across; do not turn.\n" +
					"Buttonhole Loop.  Ch 5; join with slip st in last st of Row 1. Fasten off." +
					"Fold Tie at Rows 9 and 25 so that unworked back loops form outer edges. " +
					"Sew edges of first and last rows together. " +
					"Pinch center of Tie and wrap Cinch Band tightly around middle of Tie over seam. Sew ends together at back of Tie (do not sew to Tie). " +
					"Slip Neck Band under Cinch Band. Sew button to end of Neck Band opposite Buttonhole. Weave in ends."}
		]

		patternData = [
			{id: 1, stitches: 6, desc: 'ch 6', comment: ''},
			{id: 2, stitches: 5, desc: 'sc in 2nd ch and sc in each ch, turn', comment: 'Wrong side'},
			{id: 3, stitches: 5, desc: 'ch 1, sc in each st across; turn', comment: ''},
			{id: 4, stitches: 5, desc: '', comment: 'repeat 3ий row'},
			{id: 5, stitches: 7, desc: 'ch 1,2 sc in first st, sc in each st to last st, 2 sc in last st; turn', comment: ''},
			{id: 6, stitches: 7, desc: '', comment: 'repeat 5ый row'},
			{id: 7, stitches: 7, desc: '', comment: 'repeat 5ый row'},
			{id: 8, stitches: 7, desc: '', comment: 'repeat 5ый row'},
			{id: 9, stitches: 7, desc: '', comment: 'repeat 5ый row'},
			{id: 10, stitches: 7, desc: 'ch 1, working in front loops only, sc in each st; turn', comment: 'Fold row'},
			{id: 11, stitches: 7, desc: '', comment: 'repeat 10ый row'},
			{id: 12, stitches: 7, desc: '', comment: 'repeat 10ый row'},
			{id: 13, stitches: 7, desc: '', comment: 'repeat 10ый row'},
			{id: 14, stitches: 5, desc: 'ch 1, 2ст б/н вместе, sc in each st to last 2 sts, 2ст б/н вместе', comment: ''},
			{id: 15, stitches: 5, desc: '', comment: 'repeat 3ий row'},
			{id: 16, stitches: 5, desc: '', comment: 'repeat 3ий row'},
			{id: 17, stitches: 5, desc: '', comment: 'repeat 3ий row'},
			{id: 18, stitches: 5, desc: '', comment: 'repeat 3ий row'},
			{id: 19, stitches: 5, desc: '', comment: 'repeat 3ий row'},
			{id: 20, stitches: 5, desc: '', comment: 'repeat 3ий row'},
			{id: 21, stitches: 7, desc: 'ch 1,2 sc in first st, sc in each st to last st, 2 sc in last st; turn', comment: ''},
			{id: 22, stitches: 7, desc: '', comment: 'repeat 5ый row'},
			{id: 23, stitches: 7, desc: '', comment: 'repeat 5ый row'},
			{id: 24, stitches: 7, desc: '', comment: 'repeat 5ый row'},
			{id: 25, stitches: 7, desc: '', comment: 'repeat 5ый row'},
			{id: 26, stitches: 7, desc: 'ch 1, working in front loops only, sc in each st; turn', comment: 'Fold row'},
			{id: 27, stitches: 7, desc: '', comment: 'repeat 10ый row'},
			{id: 28, stitches: 7, desc: '', comment: 'repeat 10ый row'},
			{id: 29, stitches: 7, desc: '', comment: 'repeat 10ый row'},
			{id: 30, stitches: 5, desc: 'ch 1, 2ст б/н вместе, sc in each st to last 2 sts, 2ст б/н вместе', comment: ''},
			{id: 31, stitches: 5, desc: '', comment: 'repeat 3ий row'},
			{id: 32, stitches: 5, desc: '', comment: 'repeat 3ий row'},
			{id: 33, stitches: 5, desc: '', comment: 'repeat 3ий row'},
		];


	} else if (language == 'ru') {
		patternTitle = '';
		roundTitle = 'Круг';
		stitchesTitle = 'Кол-во петель';
		descTitle = 'Описание';
		commentsTitle = 'Комментарии';

		patternComments = [
			{id: 1, desc: 'Размер готовой бабочки 4 x 7,5 см. В итоге галстук будет готов. Закрепите, оставив длинный хвостик для пришивания.\n' +
					'Затем делаем завязку: 7 вп, сбн во 2 петлю от крючка и в каждую последующую петлю до конца - 6 сбн. ' +
					'Закрепляем, оставляя длинный хвостик для пришивания». +\n' +
					"Шейный ремешок Наберите столько петель, сколько необходимо, чтобы было удобно носить бабочку на шее. " +
					"Ряд 1: сбн во 2-ю петлю от крючка и в каждую петлю до конца." +
					'Перемычка. 5 вп; замкните ряд. Закрепите". +\n' +
					'Сложите галстук в рядах 9 и 25 так, чтобы необработанные петли спинки образовали внешние края. Сшейте края первого и последнего ряда вместе. ' +
					'Зажмите центр галстука и плотно оберните завязку вокруг середины галстука по шву (не пришивайте к галстуку).' +
					'Проденьте шейный ремешок под завязкой. Пришейте пуговицу к концу шейной ленты напротив петли. Вплетите концы. "'}
		]

		patternData = [
			{id: 1, stitches: 6, desc: '6 вп', comment: ''},
			{id: 2, stitches: 5, desc: 'сбн во 2ую вп и сбн в каждую последующую, поворот', comment: 'Изнанка'},
			{id: 3, stitches: 5, desc: '1 вп, сбн в каждую последующую; поворот', comment: ''},
			{id: 4, stitches: 5, desc: '', comment: 'повторить 3ий ряд'},
			{id: 5, stitches: 7, desc: '1 вп,2 сбн в 1ую петлю, сбн в каждую петлю до конца, 2 сбн в последнюю петлю; поворот', comment: ''},
			{id: 6, stitches: 7, desc: '', comment: 'повторить 5ый ряд'},
			{id: 7, stitches: 7, desc: '', comment: 'повторить 5ый ряд'},
			{id: 8, stitches: 7, desc: '', comment: 'повторить 5ый ряд'},
			{id: 9, stitches: 7, desc: '', comment: 'повторить 5ый ряд'},
			{id: 10, stitches: 7, desc: '1 вп, работаем только с лицевыми петлями, сбн в каждую; поворот', comment: 'Лицевой ряд'},
			{id: 11, stitches: 7, desc: '', comment: 'повторить 10ый ряд'},
			{id: 12, stitches: 7, desc: '', comment: 'повторить 10ый ряд'},
			{id: 13, stitches: 7, desc: '', comment: 'повторить 10ый ряд'},
			{id: 14, stitches: 5, desc: '1 вп, 2ст б/н вместе, сбн в каждую до последних 2ух петель, 2ст б/н вместе', comment: ''},
			{id: 15, stitches: 5, desc: '', comment: 'повторить 3ий ряд'},
			{id: 16, stitches: 5, desc: '', comment: 'повторить 3ий ряд'},
			{id: 17, stitches: 5, desc: '', comment: 'повторить 3ий ряд'},
			{id: 18, stitches: 5, desc: '', comment: 'повторить 3ий ряд'},
			{id: 19, stitches: 5, desc: '', comment: 'повторить 3ий ряд'},
			{id: 20, stitches: 5, desc: '', comment: 'повторить 3ий ряд'},
			{id: 21, stitches: 7, desc: '1 вп,2 сбн в 1ую петлю, сбн в каждую петлю до конца, 2 сбн в последнюю петлю; поворот', comment: ''},
			{id: 22, stitches: 7, desc: '', comment: 'повторить 5ый ряд'},
			{id: 23, stitches: 7, desc: '', comment: 'повторить 5ый ряд'},
			{id: 24, stitches: 7, desc: '', comment: 'повторить 5ый ряд'},
			{id: 25, stitches: 7, desc: '', comment: 'повторить 5ый ряд'},
			{id: 26, stitches: 7, desc: '1 вп, работаем только с лицевыми петлями, сбн в каждую; поворот', comment: 'Лицевой ряд'},
			{id: 27, stitches: 7, desc: '', comment: 'повторить 10ый ряд'},
			{id: 28, stitches: 7, desc: '', comment: 'повторить 10ый ряд'},
			{id: 29, stitches: 7, desc: '', comment: 'повторить 10ый ряд'},
			{id: 30, stitches: 5, desc: '1 вп, 2ст б/н вместе, сбн в каждую до последних 2ух петель, 2ст б/н вместе', comment: ''},
			{id: 31, stitches: 5, desc: '', comment: 'повторить 3ий ряд'},
			{id: 32, stitches: 5, desc: '', comment: 'повторить 3ий ряд'},
			{id: 33, stitches: 5, desc: '', comment: 'повторить 3ий ряд'},
		];

	}

	return {
		patternTitle: patternTitle,
		roundTitle: roundTitle,
		stitchesTitle: stitchesTitle,
		descTitle: descTitle,
		commentsTitle: commentsTitle,
		patternData: patternData,
		patternComments: patternComments,
	}
}

let pattern = getPattern(language);

let patternTitle = pattern.patternTitle;
let roundTitle = pattern.roundTitle;
let stitchesTitle = pattern.stitchesTitle;
let descTitle = pattern.descTitle;
let commentsTitle = pattern.commentsTitle;
let patternData = pattern.patternData;
let patternComments = pattern.patternComments;

export {patternTitle, roundTitle, stitchesTitle, descTitle,	commentsTitle, patternData, patternComments};
