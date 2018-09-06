import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import rootReducer from './store';
import { composeWithDevTools } from 'redux-devtools-extension';
import { mount } from './events';
import { Provider as StoreProvider } from 'react-redux';
import App from './components/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer, composeWithDevTools());
mount(store.dispatch);

ReactDOM.render(
	<StoreProvider store={store}>
		<App />
	</StoreProvider>,
	document.getElementById('root') as HTMLElement
);
registerServiceWorker();
