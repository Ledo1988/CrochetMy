import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import "./styles/main.scss";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Pattern from "./components/Pattern/Pattern";

const App = (props) => {


	return (
		<BrowserRouter>
			<div className="app">
				<Header/>
				<main className="app__main main ">
					<Intro mainTitle={props.mainTitle}
						   abbrevTitle={props.abbrevTitle}
						   abbrevData={props.abbrevData}
						   materialsTitle={props.materialsTitle}
						   materialsData={props.materialsData}
						   toolsTitle={props.toolsTitle}
						   toolsData={props.toolsData}

					/>
					<Pattern  patternTitle={props.patternTitle}
							  roundTitle={props.roundTitle}
							  stitchesTitle={props.stitchesTitle}
							  descTitle={props.descTitle}
							  commentsTitle={props.commentsTitle}
							  patternData={props.patternData}
							  patternComments={props.patternComments}
					/>


				</main>
				<footer>
					<strong>Original pattern:</strong> https://spinayarncrochet.com/kawaii-heart-keychain/
				</footer>
			</div>
		</BrowserRouter>
	);
}

export default App;