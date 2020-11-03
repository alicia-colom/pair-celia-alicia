import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

// EJERCICIO 1:
//
// class App extends Component {
// 	render() {
// 		return (
// 			<div className="App">
// 				<header className="App-header">
// 					<img src={logo} className="App-logo" alt="logo" />
// 					<div className="App-title">
// 						<h1>Alex Guerrero</h1>
// 						<h4>Lunes 02 de noviembre de 2020</h4>
// 					</div>
// 				</header>
// 				<main className="App-main">
// 					<p className="App-text">
// 						Lorem fistrum jarl a peich no puedor no puedor no te digo trigo por
// 						no llamarte Rodrigor no te digo trigo por no llamarte Rodrigor ese
// 						hombree qué dise usteer sexuarl. Mamaar está la cosa muy malar
// 						diodeno por la gloria de mi madre diodeno me cago en tus muelas qué
// 						dise usteer por la gloria de mi madre fistro se calle ustée va usté
// 						muy cargadoo.
// 					</p>
// 					<div className="App-bottom">
// 						<a className="App-link" href="https://reactjs.org" target="_blank">
// 							Leer más...
// 						</a>
// 						<small className="App-small">
// 							<p>37</p>
// 							<i className="fa fa-heart App-icon"></i>
// 						</small>
// 					</div>
// 				</main>
// 			</div>
// 		);
// 	}
// }

// EJERCICIO 2:
//
class App extends Component {
	render() {
		const appHeader = (
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<div className="App-title">
					<h1>Alex Guerrero</h1>
					<h4>Lunes 02 de noviembre de 2020</h4>
				</div>
			</header>
		);

		const appMain = (
			<main className="App-main">
				<p className="App-text">
					Lorem fistrum jarl a peich no puedor no puedor no te digo trigo por no
					llamarte Rodrigor no te digo trigo por no llamarte Rodrigor ese
					hombree qué dise usteer sexuarl. Mamaar está la cosa muy malar diodeno
					por la gloria de mi madre diodeno me cago en tus muelas qué dise
					usteer por la gloria de mi madre fistro se calle ustée va usté muy
					cargadoo.
				</p>
			</main>
		);

		const appFooter = (
			<footer className="App-bottom">
				<a className="App-link" href="https://reactjs.org" target="_blank" rel='noreferrer'>
					Leer más...
				</a>
				<small className="App-small">
					<p>37</p>
					<i className="fa fa-heart App-icon"></i>
				</small>
			</footer>
		);

    const appRoot = <div className="App">{appHeader}{appMain}{appFooter}</div>;

		return appRoot;
	}
}

export default App;
