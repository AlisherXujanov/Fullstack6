import { motion } from 'framer-motion'
import ToggleC from './ToggleC.jsx'
import img from '../Assets/Images/1.jpg'
import Button from 'react-bootstrap/Button'
import { useReducer } from 'react'

const initialState = {
    translateValue: 0,
    left: "-200px",
    right: "200px",
}

const reducer = (state, action) => {
    //* RULE:
    //! Everything that is returned from this function becomes the new state

    switch (action.move) {
        case 'left':
            return { ...state, translateValue: state.left}
        case 'right':
            return { ...state, translateValue: state.right}
        case 'reset':
            return { ...state, translateValue: "0"}
        default:
            throw new Error("Unknown action")
    }
}

function About() {
    const initialMotion = { transform: 'scale(-1)' }
    const animate = { transform: 'scale(1)' }
    const exit = { transform: 'scale(0)' }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <motion.div
            initial={initialMotion}
            animate={animate}
            exit={exit}
        >
            <h1>About</h1>
            <p>Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Текста, продолжил свое большой домах маленькая своих маленький использовало вершину путь, жаренные по всей. Образ путь живет все. Заголовок, буквенных собрал.</p>
            <hr />
            <ToggleC />
            <hr />
            <div style={{textAlign: 'center'}}>
                <img 
                    style={{ transform: `translateX(${state.translateValue})` }} 
                    src={img} 
                    width={100} 
                    height={100} 
                /> <br />
                <Button 
                    variant='warning'
                    onClick={() => { dispatch({ move: 'left' }) }}
                >
                    Left
                </Button>
                <Button 
                    variant='success'
                    onClick={() => { dispatch({ move: 'reset' }) }}
                >
                    Reset
                </Button>
                <Button 
                    variant='primary'
                    onClick={() => { dispatch({ move: 'right' }) }}
                >
                    Right
                </Button>
            </div>
        </motion.div>
    );
}

export default About;