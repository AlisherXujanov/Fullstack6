import { BrowserRouter } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import AnimatedComponents from './components/Navigation/AnimatedComponents';
import { useContext, useState } from 'react';
import { context, initialState } from './Store';


function globalReducer(state, action) {
    switch (action.type) {

    }
}


function App() {
    // useLocation is a hook that returns the location object that 
    // represents the current URL. You can think about it like a 
    // useState that returns a new location whenever the URL changes.
    const [state, setState] = useState(initialState)

    return (
        <context.Provider>
            <div className="App">
                <BrowserRouter>
                    <AnimatedComponents />
                </BrowserRouter>
            </div>
        </context.Provider>
    );
}

export default App;
