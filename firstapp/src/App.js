import { BrowserRouter } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import AnimatedComponents from './components/Navigation/AnimatedComponents';
import { context, initialState } from './Store';
import { useReducer } from 'react';

function globalReducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + 1 }
        case 'decrement':
            return { ...state, count: state.count - 1 }
        case 'toggleTheme':
            return state
        default:
            throw new Error("Unexpected action")
    }
}

function App() {
    // useLocation is a hook that returns the location object that 
    // represents the current URL. You can think about it like a 
    // useState that returns a new location whenever the URL changes.
    const [state, dispatch] = useReducer(globalReducer, initialState)

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
