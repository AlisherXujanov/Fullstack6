function Test1() {
    return (
        <>
            <h2>Test 1</h2>
            <Test2 />
        </>
    );
}
function Test2() {
    return (
        <>
            <h2>Test 2</h2>
        </>
    );
}

const Header = () => {
    const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur praesentium inventore similique delectus, suscipit, nihil accusantium, facilis harum iure culpa animi. Voluptas reiciendis similique dicta ad. Voluptatibus nam odit explicabo."

    return (
        <div>
            <h1>Hello World!</h1>
            <Test1 />
            <p>
                {lorem}
            </p>
        </div>
    )
}

export default Header;