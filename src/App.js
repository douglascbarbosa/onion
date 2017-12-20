// import React, { Component } from 'react';

// import Layout from './components/common/Layout.js';

// class App extends Component {
//   render() {
//     return (
//       <Layout />
//     );
//   }
// }

// export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Layout from './components/common/Layout.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Layout />, document.getElementById('root'));
registerServiceWorker();
