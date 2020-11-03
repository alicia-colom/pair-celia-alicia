import React from 'react';
import RandomCat from './RandomCat';

class CatList extends React.Component {
	render() {
		return (
			<section className="section-cats">
				<h1>All Cats Are Beautiful</h1>
				<ul className="section-cats_list">
					<li id="1">
						<RandomCat />
					</li>
					<li id="2">
						<RandomCat />
					</li>
					<li id="3">
						<RandomCat />
					</li>
				</ul>
			</section>
		);
	}
}

export default CatList;
