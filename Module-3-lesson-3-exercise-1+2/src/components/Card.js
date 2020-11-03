import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../logo.svg';
import './Card.scss';

// EJERCICIO 2:  componente de clase
//
// class Card extends React.Component {
// 	render() {
// 		const appHeader = (
// 			<header className="App-header">
// 				<img src={logo} className="App-logo" alt="logo" />
// 				<div className="App-title">
// 					<h1>{this.props.name}</h1>
// 					<h4>{this.props.date}</h4>
// 				</div>
// 			</header>
// 		);

// 		const appMain = (
// 			<main className="App-main">
// 				<p className="App-text">{this.props.text}</p>
// 			</main>
// 		);

// 		const appFooter = (
// 			<footer className="App-bottom">
// 				<a
// 					className="App-link"
// 					href="https://reactjs.org"
// 					target="_blank"
// 					rel="noreferrer"
// 				>
// 					Leer más...
// 				</a>
// 				<small className="App-small">
// 					<p>{this.props.likes}</p>
// 					<i className="fa fa-heart App-icon"></i>
// 				</small>
// 			</footer>
// 		);

// 		const appRoot = (
// 			<div className="App">
// 				{appHeader}
// 				{appMain}
// 				{appFooter}
// 			</div>
// 		);

// 		return appRoot;
// 	}
// }

// EJERCICIO 3: convertir en componente funcional
//
const Card = props => {
	const appHeader = (
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<div className="App-title">
				<h1>{props.name}</h1>
				<h4>{props.date}</h4>
			</div>
		</header>
	);

	const appMain = (
		<main className="App-main">
			<p className="App-text">{props.text}</p>
		</main>
	);

	const appFooter = (
		<footer className="App-bottom">
			<a
				className="App-link"
				href="https://reactjs.org"
				target="_blank"
				rel="noreferrer"
			>
				Leer más...
			</a>
			<small className="App-small">
				<p>{props.likes}</p>
				<i className="fa fa-heart App-icon"></i>
			</small>
		</footer>
	);

	const appRoot = (
		<div className="App">
			{appHeader}
			{appMain}
			{appFooter}
		</div>
	);

	return appRoot;
}

const componentToRender = (
	<Card
		name="Alicia Colom"
		date="Martes 13"
		text="Lorem fistrum jarl a peich no puedor no puedor no te digo trigo por no
  llamarte Rodrigor no te digo trigo por no llamarte Rodrigor ese
  hombree qué dise usteer sexuarl. Mamaar está la cosa muy malar diodeno
  por la gloria de mi madre diodeno me cago en tus muelas qué dise
  usteer por la gloria de mi madre fistro se calle ustée va usté muy
  cargadoo."
		likes="1.000"
	/>
);
ReactDOM.render(componentToRender, document.getElementById('root'));

export default Card;
