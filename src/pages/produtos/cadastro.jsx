import './produto.css'
const CadastroProduto = () => {

    return (
        <div className="Produtos">
            <h3>Cadastro de Produtos</h3>

            <input type="text" id="id" />
            <input type="text" id="nome" />
            <input type="text" id="descricao" />
            <input type="text" id="preco" />
            <input type="text" id="tipo" />
            <input type="text" id="CategoriaId" value={1} />

            <input type= "button" id="cadastrar" 
                 onClick={()=>{alert('vamos cadastrar produto')}} />
        </div>
    )
}

export default CadastroProduto