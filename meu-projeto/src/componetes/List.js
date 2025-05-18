import Item from './Item'

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <Item marca="Ferrari"  lancamento={2000}/>
            <Item marca="Porsche" lancamento={1980}/>
            <Item marca="Lamborghini" lancamento={2024}/>
        </>
    )
}

export default List;
// Função List usando fragmentos, </> vazio sem usar o nome div