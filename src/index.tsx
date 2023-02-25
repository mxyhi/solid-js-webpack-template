/* @refresh reload */
import { render } from 'solid-js/web';

import "./styles/index.css"
import { lazy } from 'solid-js';
// import App from './App';

const App=lazy(()=>import("./App"))

render(() => <App />, document.getElementById('root') as HTMLElement);
