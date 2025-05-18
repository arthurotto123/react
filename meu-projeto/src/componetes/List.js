import Item from './Item'

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <Item marca="Ferrari" />
            <Item marca="Porsche"/>
            <Item marca="Lamborghini"/>
        </>
    )
}

export default List;
// Função List usando fragmentos, </> vazio sem usar o nome div