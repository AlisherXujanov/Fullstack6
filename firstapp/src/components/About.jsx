import { motion } from 'framer-motion'
import ToggleC from './ToggleC.jsx'
import img from '../Assets/Images/1.jpg'
import Button from 'react-bootstrap/Button'

function About() {
    const initialMotion = { transform: 'scale(-1)' }
    const animate = { transform: 'scale(1)' }
    const exit = { transform: 'scale(0)' }
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
                <img src={img} width={100} height={100} /> <br />
                <Button variant='success'>
                    Left
                </Button>
                <Button variant='primary'>
                    Right
                </Button>
            </div>
        </motion.div>
    );
}

export default About;