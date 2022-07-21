const Calculator = (props) => {
    const {handleNumber} = props;
    return (
        <div>
            <div>
            <button onClick={() => handleNumber(0)}>0</button>
            <button onClick={() => handleNumber(1)}>1</button>
            <button onClick={() => handleNumber(2)}>2</button>
            <button onClick={() => handleNumber(3)}>3</button>
            <button onClick={() => handleNumber(4)}>4</button>
            <button onClick={() => handleNumber(5)}>5</button>
            <button onClick={() => handleNumber(6)}>6</button>
            <button onClick={() => handleNumber(7)}>7</button>
            <button onClick={() => handleNumber(8)}>8</button>
            <button onClick={() => handleNumber(9)}>9</button>
            </div>
            <div>
                <button>-</button>
                <button>+</button>
                <button>=</button>
            </div>
        </div>
    )
}

export default Calculator;
