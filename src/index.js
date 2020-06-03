import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";

import {title, abbrev, materialsTitle, materials, toolsTitle, toolsData} from './scripts/variablesTitle';
import {abbrevData} from './scripts/variablesValues';
import {commentsTitle, descTitle, patternTitle, roundTitle, stitchesTitle, patternData} from "./scripts/pattern";



ReactDOM.render( <App
	mainTitle={title}
	abbrevTitle={abbrev}
	abbrevData={abbrevData}
	materialsTitle={materialsTitle}
	materialsData={materials}
	toolsTitle={toolsTitle}
	toolsData={toolsData}
	patternTitle={patternTitle}
	roundTitle={roundTitle}
	stitchesTitle={stitchesTitle}
	descTitle={descTitle}
	commentsTitle={commentsTitle}
	patternData={patternData}
/>, document.getElementById('root') );