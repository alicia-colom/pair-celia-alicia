import React, { useState } from 'react';

// EJERCICIO 1:

const Birth = () => {
	const [age, setOlder] = useState(20);
	function getOlder() {
		setOlder(age + 1);
	}
	return (
		<div className="App">
			<input type="button" value="Hazme más viejo" onClick={getOlder} />
			<p>Hoy tengo {age} años de edad</p>
		</div>
	);
};

export default Birth;
