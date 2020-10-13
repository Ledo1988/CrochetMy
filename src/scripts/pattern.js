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
			{id: 4, stitches: 5, desc: '', comment: 'repeat 3rd row'},
			{id: 5, stitches: 7, desc: 'ch 1,2 sc in first st, sc in each st to last st, 2 sc in last st; turn', comment: ''},
			{id: 6, stitches: 7, desc: '', comment: 'repeat 5th row'},
			{id: 7, stitches: 7, desc: '', comment: 'repeat 5th row'},
			{id: 8, stitches: 7, desc: '', comment: 'repeat 5th row'},
			{id: 9, stitches: 7, desc: '', comment: 'repeat 5th row'},
			{id: 10, stitches: 7, desc: 'ch 1, working in front loops only, sc in each st; turn', comment: 'Fold row'},
			{id: 11, stitches: 7, desc: '', comment: 'repeat 10th row'},
			{id: 12, stitches: 7, desc: '', comment: 'repeat 10th row'},
			{id: 13, stitches: 7, desc: '', comment: 'repeat 10th row'},
			{id: 14, stitches: 5, desc: 'ch 1, sc2tog, sc in each st to last 2 sts, sc2tog', comment: ''},
			{id: 15, stitches: 5, desc: '', comment: 'repeat 3rd row'},
			{id: 16, stitches: 5, desc: '', comment: 'repeat 3rd row'},
			{id: 17, stitches: 5, desc: '', comment: 'repeat 3rd row'},
			{id: 18, stitches: 5, desc: '', comment: 'repeat 3rd row'},
			{id: 19, stitches: 5, desc: '', comment: 'repeat 3rd row'},
			{id: 20, stitches: 5, desc: '', comment: 'repeat 3rd row'},
			{id: 21, stitches: 7, desc: 'ch 1,2 sc in first st, sc in each st to last st, 2 sc in last st; turn', comment: ''},
			{id: 22, stitches: 7, desc: '', comment: 'repeat 5th row'},
			{id: 23, stitches: 7, desc: '', comment: 'repeat 5th row'},
			{id: 24, stitches: 7, desc: '', comment: 'repeat 5th row'},
			{id: 25, stitches: 7, desc: '', comment: 'repeat 5th row'},
			{id: 26, stitches: 7, desc: 'ch 1, working in front loops only, sc in each st; turn', comment: 'Fold row'},
			{id: 27, stitches: 7, desc: '', comment: 'repeat 10th row'},
			{id: 28, stitches: 7, desc: '', comment: 'repeat 10th row'},
			{id: 29, stitches: 7, desc: '', comment: 'repeat 10th row'},
			{id: 30, stitches: 5, desc: 'ch 1, sc2tog, sc in each st to last 2 sts, sc2tog', comment: ''},
			{id: 31, stitches: 5, desc: '', comment: 'repeat 3rd row'},
			{id: 32, stitches: 5, desc: '', comment: 'repeat 3rd row'},
			{id: 33, stitches: 5, desc: '', comment: 'repeat 3rd row'},
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
