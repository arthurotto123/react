function Form() {

    function cadastraUsuario(e) {
        e.preventDefault()
        console.log("Cadastrou um usuario!")

    }
    return (
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastraUsuario}>
                <div>
                    <input type="text" placeholder="digite um texto"/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>

    )
}
export default Form