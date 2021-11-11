import React from 'react';
import ReactDOM from 'react-dom';
import { ErrorBoundary } from './component/errorBoundary';
import Heading from './component/heading/heading';
import Movies from './component/movies/movies';

function App() {
    return (
        <>
            <Heading />
            <ErrorBoundary>
                <Movies />
            </ErrorBoundary>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
