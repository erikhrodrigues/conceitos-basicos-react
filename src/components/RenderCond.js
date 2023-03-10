const RenderCond = ({x, y}) => {

    return(
        <div>
            { x > 5 && <p> x é maior que 5</p>} 
            { x > 5 ? <p> 5 é um número muito alto </p> : <p> 5 é baixinho</p> }
            {<p>O valor de y é {y}</p>}
        </div>
    )
}

export default RenderCond