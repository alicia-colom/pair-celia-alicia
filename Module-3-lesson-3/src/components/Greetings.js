import React from 'react';

// COMPONENTE DE CLASE:  (aquí props es un atributo de la clase)
//
// class Greetings extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}!</h1>;
//   }
// }

// COMPONENTE FUNCIONAL:  (aquí props es un argumento de tipo objeto)
//
// const Greetings = props => {
//   return <h1>Hello, {props.name}!</h1>;
// };

// COMPONENTE FUNCIONAL CON ARROW:
//
const Greetings = props => <h1>Hello, {props.name}!</h1>;


export default Greetings;