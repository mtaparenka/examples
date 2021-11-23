import React from 'react';
import ReactDOM from 'react-dom';
import { ErrorBoundary } from './component/errorBoundary';
import Movies from './component/movies/movies';

function App() {
    return (
        <ErrorBoundary>
            <Movies />
        </ErrorBoundary>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
