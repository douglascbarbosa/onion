// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

window.jQuery = window.$ =  require("jquery");
// window.moment = require('moment');
// window._ = require('lodash');

// import 'core-js/es6/array'
// import 'core-js/es6/promise'
// import 'core-js/es6/object'

// import 'jquery-ui-npm/jquery-ui.min.js'
// import 'imports-loader?jQuery=jquery!jquery-color/jquery.color.js'

require("bootstrap");

require.ensure([], ()=>{
  require('./App');

})

