class Produto {
    constructor() {
        this.id = 1;
        this.arrayProdutos = [];
        this.editId = null;
    }

    salvar() {
        let produto = this.lerDados();

        if (this.validaCampos(produto)) {
            if (this.editId === null) {
                this.adicionar(produto);
            } else {
                this.atualizar(this.editId, produto);
            }

            this.listaTabela();
            this.cancelar();
        }
    }

    listaTabela() {
        let tbody = document.getElementById('tbody');
        tbody.innerHTML = '';

        for (let i = 0; i < this.arrayProdutos.length; i++) {
            let tr = tbody.insertRow();
            let td_id = tr.insertCell();
            let td_produto = tr.insertCell();
            let td_valor = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_id.innerText = this.arrayProdutos[i].id;
            td_produto.innerText = this.arrayProdutos[i].nomeProduto;
            td_valor.innerText = this.arrayProdutos[i].preco;

            td_id.classList.add('center');

            let imgEdit = document.createElement('img');
            imgEdit.src = 'img/edit.png';
            imgEdit.setAttribute("onclick", "produto.preparaEdicao(" + JSON.stringify(this.arrayProdutos[i]) + ")");

            let imgDelete = document.createElement('img');
            imgDelete.src = 'img/delete.png';
            imgDelete.setAttribute("onclick", "produto.deletar(" + this.arrayProdutos[i].id + ")");

            td_acoes.appendChild(imgEdit);
            td_acoes.appendChild(imgDelete);
        }
    }

    adicionar(produto) {
        produto.preco = parseFloat(produto.preco);
        this.arrayProdutos.push(produto);
        this.id++;
    }

    atualizar(id, produto) {
        for (let i = 0; i < this.arrayProdutos.length; i++) {
            if (this.arrayProdutos[i].id === id) {
                this.arrayProdutos[i].nomeProduto = produto.nomeProduto;
                this.arrayProdutos[i].preco = produto.preco;
                break;
            }
        }
        this.editId = null;
    }

    lerDados() {
        let produto = {};

        produto.id = this.id;
        produto.nomeProduto = document.getElementById('produto').value;
        produto.preco = document.getElementById('preco').value;

        return produto;
    }

    preparaEdicao(dados) {
        this.editId = dados.id;
        document.getElementById('produto').value = dados.nomeProduto;
        document.getElementById('preco').value = dados.preco;
        document.getElementById('btn1').innerText = 'Atualizar';
    }

    validaCampos(produto) {
        let msg = '';

        if (produto.nomeProduto === '') {
            msg += '- informe o nome do produto \n';
        }
        if (produto.preco === '') {
            msg += '- informe o preço do produto \n';
        }

        if (msg !== '') {
            alert("Por favor, informe o nome e o preço do produto.");
            return false;
        }

        return true;
    }

    cancelar() {
        document.getElementById('produto').value = '';
        document.getElementById('preco').value = '';
        this.editId = null;
        document.getElementById('btn1').innerText = 'Salvar';
    }

    deletar(id) {
        if (confirm('Deseja realmente deletar o produto da linha ' + id + '?')) {
            let tbody = document.getElementById('tbody');

            for (let i = 0; i < this.arrayProdutos.length; i++) {
                if (this.arrayProdutos[i].id === id) {
                    this.arrayProdutos.splice(i, 1);
                    tbody.deleteRow(i);
                    break;
                }
            }
        }
    }
}

var produto = new Produto();
