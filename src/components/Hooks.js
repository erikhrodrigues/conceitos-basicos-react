import { useState, useEffect } from "react";

const Hooks = () => {

    let idade = 30;

    const [novaIdade, setNovaIdade] = useState(40);

    function changeYear () {
        idade = 31;
        console.log(idade)
    }

    function changeNewYear() {
        setNovaIdade(45);
    }

    return (
        <div>
            <p>Idade: {idade}</p>
            <button onClick={changeYear}> mudar idade</button>
            <p>Nova Idade: {novaIdade}</p>
            <button onClick={changeNewYear}>mudar idade</button>
        </div>
    )
}

export default Hooks