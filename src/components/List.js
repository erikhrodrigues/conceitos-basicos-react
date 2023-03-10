const List = () => {

    const items = [
        {    id: 1,
            nome: "Erik" },
        {   id: 2,
            nome: "Valentina" },
        {   id: 3,
            nome: "Helo"}
    ]

    return(
        <div>
            {items.map((item) => (
                <p key={item.id}> 
                    {item.id} - {item.nome}
                </p>
            ))}
        </div>
        
    )
}

export default List