function Evento(){

    function meuEvento(){
        console.log("Ativando o evento!");
    }


    return(
        <div>
            <p>Clique para disparar um evento:</p>
            <button onClick={meuEvento}>
                Ativar!
            </button>
        </div>

    )
}

export default Evento
