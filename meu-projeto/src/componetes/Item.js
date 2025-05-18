import PropTypes from 'prop-types'

function Item({marca, lancamento}){
    return(
        <>
        <li>{marca} - {lancamento}</li>
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string.isRequired,
}

export default Item;
// // Função Item que retorna um item de lista