import { motion } from 'framer-motion'


function Home() {
    const initialMotion = { transform: 'translateY(-100vw)' }
    const animate = { transform: 'translateY(0)' }
    const exit = { transform: 'translateY(100vw)' }

    return (
        <motion.div 
            initial={initialMotion}
            animate={animate}
            exit={exit}
        >
            <h1>Home</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dignissimos temporibus est ipsa quam nesciunt, illo facilis corporis porro velit voluptatem voluptatum aperiam sed iusto minima id dolor ratione. Hic!</p>
        </motion.div>
    );
}

export default Home;