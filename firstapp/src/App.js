import "bootstrap/dist/css/bootstrap.min.css"
import AnimatedComponents from './components/Navigation/AnimatedComponents';
import { context, initialState, globalReducer } from './Store';
import { useReducer } from 'react';
import Test from './components/Test.jsx'
import Test2 from './components/Test2.jsx'
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';

function App() {
    const [state, dispatch] = useReducer(globalReducer, initialState)

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigation />} >
                        <Route index element={ <Test /> } />
                        <Route path="/test" element={ <Test2 /> } />
                    </Route>
                </Routes>
            </BrowserRouter>
            <Outlet />
        </div>
    );
}

export default App;
