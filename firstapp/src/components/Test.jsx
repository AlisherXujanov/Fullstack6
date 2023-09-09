import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

function InnerC1(props) {
    return (
        <>
            <h2>{ props.fullname }</h2>
            { props.children }
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ducimus iusto quae, aperiam ipsum repudiandae fugit voluptate totam, laudantium harum delectus corrupti autem quia veniam. Minima eos qui suscipit commodi nam odio repellat, obcaecati, libero, quia fuga a! Nesciunt explicabo nemo nam accusamus id praesentium voluptates ad iusto sint quas.</p>
        </>
    )
}
function InnerC2({ country, children }) {
    return (
        <>
            <h2>{ country }</h2>
            { children }
            <p>Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Которой запятой но безорфографичный ее приставка сих он образ. Щеке своего ручеек моей, собрал переписали грамматики, дорогу букв текстами встретил диких раз образ имени инициал напоивший рот, свой которое пустился предупреждал грустный осталось языкового путь переписывается безорфографичный. Пояс, подпоясал повстречался.</p>
        </>
    )
}


function Test(props) {
    const [count, setCount] = useState(0)
    const [textColor, setColor] = useState('')
    const [component, setComponent] = useState('c1')

    return (
        <div style={{ textAlign: "center" }}>

            <div style={{ marginTop: "50px" }}>
                { component == 'c1' 
                    ? 
                        <InnerC1 fullname="Vlidimir Putin">
                            <h3>This is component 1</h3>
                        </InnerC1> 
                    : 
                        <InnerC2 country='Russia'>
                            <h3>Это второй компонент</h3>
                        </InnerC2>
                }
                <Button variant='success' onClick={() => { setComponent('c1') }}>
                    Lorem
                </Button>
                <Button variant='warning' onClick={() => { setComponent('c2') }}>
                    Lorem RU
                </Button>
            </div>

            <div style={{ marginTop: "300px" }}>
                <h1 style={{ color: textColor }}>
                    {count}
                </h1>
                <hr />

                <button onClick={() => { setColor('red') }}>Red</button>
                <button onClick={() => { setColor('green') }}>Green</button>

                <hr />
                <button
                    onClick={() => { setCount(count + 1) }}
                >
                    Increment +
                </button>

                <button
                    onClick={() => { setCount(count - 1) }}
                >
                    Decrement -
                </button>
            </div>
        </div>
    )
}

export default Test;


