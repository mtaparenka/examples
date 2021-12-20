import React from 'react';
import ReactDOM from 'react-dom';
import { ErrorBoundary } from './component/errorBoundary';
import Movies from './component/movies/movies';
import store from './store/store'
import { Provider } from 'react-redux'

function App() {
    return (
        <ErrorBoundary>
            <Provider store={store}>
                <Movies />
            </Provider>
        </ErrorBoundary>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
