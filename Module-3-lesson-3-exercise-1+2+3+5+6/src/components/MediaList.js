import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import Card from './Card';

// EJERCICIO 5:
//
class MediaList extends Component {
	render() {
		return (
			<section className="App">
				<h1>A pair of Cards</h1>
				<ul>
					<li id={1}>
						<Card
							name="Alicia Colom"
							date="Martes 13"
							text="Lorem fistrum jarl a peich no puedor no puedor no te digo trigo por no llamarte Rodrigor no te digo trigo por no llamarte Rodrigor ese hombree qué dise usteer sexuarl."
							likes={1.000}
						/>
					</li>
					<li id={2}>
						<Card
							name="Pepi Flores"
							date="Black Friday"
							text="Mamaar está la cosa muy malar diodeno por la gloria de mi madre diodeno me cago en tus muelas qué dise usteer por la gloria de mi madre fistro se calle ustée va usté muy cargadoo."
							likes={10}
						/>
					</li>
				</ul>
			</section>
		);
	}
}

// const componentToRender = (
// 	<Card
// 		name="Alicia Colom"
// 		date="Martes 13"
// 		text="Lorem fistrum jarl a peich no puedor no puedor no te digo trigo por no
//   llamarte Rodrigor no te digo trigo por no llamarte Rodrigor ese
//   hombree qué dise usteer sexuarl. Mamaar está la cosa muy malar diodeno
//   por la gloria de mi madre diodeno me cago en tus muelas qué dise
//   usteer por la gloria de mi madre fistro se calle ustée va usté muy
//   cargadoo."
// 		likes="1.000"
// 	/>
// );
// ReactDOM.render(componentToRender, document.getElementById('root'));

export default MediaList;
