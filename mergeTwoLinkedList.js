const counter = () => {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>Count: {count.firstCounter}</h1>
            <button onClick = {()=> dispatch({ type : "increment", payload :1})}></button>
            <button onClick = {()=> dispatch({ type : "decrement", payload :1})}></button>
            <button onClick = {()=> dispatch({ type : "increment", payload :5})}></button>
            <button onClick = {()=> dispatch({ type : "decrement", payload :5})}></button>
            <button onClick = {()=> dispatch({ type : "reset", payload :1})}></button>
        </div>
    )
}

export default counter;