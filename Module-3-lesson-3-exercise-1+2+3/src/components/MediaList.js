import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Card from '../components/Card';

// EJERCICIO 5:
//
class MediaList extends Component {
	render() {
		return (
			<section className="App">
				<h1>A lot of Cards</h1>
				<ul>
					<li id="1">1
						<Card />
					</li>
					<li id="2">2
						<Card />
					</li>
					<li id="3">3
						<Card />
					</li>
				</ul>
			</section>
		);
	}
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


export default MediaList;
