import { BrowserRouter } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import AnimatedComponents from './components/Navigation/AnimatedComponents';
import { context, initialState, globalReducer } from './Store';
import { useReducer } from 'react';

function App() {
    const [state, dispatch] = useReducer(globalReducer, initialState)

    state.dispatch = dispatch

    return (
        <context.Provider value={state}>
            <div className="App">
                <BrowserRouter>
                    <AnimatedComponents dispatch={dispatch} />
                </BrowserRouter>
            </div>
        </context.Provider>
    );
}

export default App;
