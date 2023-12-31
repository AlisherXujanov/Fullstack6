import { motion } from 'framer-motion'
import ToggleC from './ToggleC.jsx'

function About({ dispatch }) {
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
            <ToggleC dispatch={dispatch} />
        </motion.div>
    );
}

export default About;