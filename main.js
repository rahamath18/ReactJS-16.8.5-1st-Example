import React from 'react';
import ReactDOM from 'react-dom';

import WelcomeNote from './WelcomeNote.js';
import AboutMyself from './AboutMyself.js';
import JSONProcess from './JSONProcess.js';

ReactDOM.render(<WelcomeNote />, document.getElementById('WelcomeNote'));

ReactDOM.render(<AboutMyself />, document.getElementById('AboutMyself'));

//const element = (<h1>Hello React!</h1>);
const element = (<h1>{new Date().toLocaleTimeString()}</h1>);
ReactDOM.render(element, document.getElementById('PageLoadedTime'));

ReactDOM.render(<JSONProcess />, document.getElementById('JSONDataProcess'));