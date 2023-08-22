class produto{

    constructor() {
        this.id = 1;
        this.arrayProdutos = [];
        
    }
    salvar() {
        let produto = this.lerDados();

        if(this.validaCampos(produto)) {
            this.adicionar(produto);
        }
listaTabela(){
    
}
    }
    adicionar(){
        this.arrayProdutos.push(produto);
        this.id++;

    lerDados() {
        let produto = {}

        produto.id = this.id;
        produto.nomeProduto = document.getElementById('produto').value;
        produto.preco = document.getElementById('preco').value;

        return produto;
    }  

validaCampos(produto){
    let msg = '';

    if(produto.nomeProduto == ''){
        msg += '- informe o nome do produto \n';
    }
    if(produto.preco=='') {
      msg += '- informe o preço do produto \n';
    }

    if(msg != ''){
        alert(msg);
        return false
    }
}
 return true;
    
}
cancelar(){

}
var produto = new produto();