import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";

import {title, abbrev, materialsTitle, materials, toolsTitle, toolsData} from './scripts/variablesTitle';
import {dialog, message, post, abbrevData} from './scripts/variablesValues';



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