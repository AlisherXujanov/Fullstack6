import { BrowserRouter } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import AnimatedComponents from './components/Navigation/AnimatedComponents';
import { context, initialState, globalReducer } from './Store';
import { useReducer } from 'react';
import Test from './components/Test.jsx'

function App() {
    const [state, dispatch] = useReducer(globalReducer, initialState)

    return (
        <div className="App">
            <Test />
        </div>
    );
}

export default App;
