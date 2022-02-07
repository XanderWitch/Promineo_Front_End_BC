import React from 'react';
import ReactDOM from 'react-dom';

let element = React.createElement('h1', {}, 'This is React!'); //this takes 3 arguments -- element tag, props object, content
ReactDOM.render(element, document.getElementById('app'));