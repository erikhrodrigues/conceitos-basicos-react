const AnotherComponent = () => {

    const handleClick = () => {
        alert("clicou")
    }

    return(
        <div>
            <p>outro componente</p>
            <button onClick={handleClick}>Evento de Click</button>
            <hr/>
            <button onClick={() => console.log("teste")}>CONSOLE</button>
        </div>
    )

}


export default AnotherComponent