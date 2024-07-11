import { Produto } from "../Model/Produto";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository {

    //Coleção Array que vai armazenar os Produtos
    private listaProdutos: Array<Produto> = new Array<Produto>();

    // Controlar os números dos produtos
    public numero: number = 0;

    procurarPorNome(nome: string): void {
        let buscaPornome = this.listaProdutos.filter(c =>
            c.nome.includes(nome)
        );
        buscaPornome.forEach(Produto => Produto.visualizar())

    }

    procurarPorEan(ean: number): void {
        let buscarEan = this.buscarNoArray(ean);

        if (buscarEan !== null) {
            buscarEan.visualizar();
        } else {
            console.log("\nProduto Nao encontrado");
        }
    }

    listarTodas(): void {
        for (let Produto of this.listaProdutos) {
            Produto.visualizar();
        }
    }

    cadastrar(Produto: Produto): void {
        this.listaProdutos.push(Produto);
        console.log("Produto cadastrada com sucesso!");
    }

    atualizar(Produto: Produto): void {
        let buscarProduto = this.buscarNoArray(Produto.ean);

        if (buscarProduto !== null) {
            this.listaProdutos[this.listaProdutos.indexOf(buscarProduto)] = Produto;
            console.log('\nO Produto foi atualizada! ')
        } else
            console.log('\nProduto Nao encontrada! ')
    }

    deletar(numero: number): void {
        let buscarProduto = this.buscarNoArray(numero);

        if (buscarProduto !== null) {
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscarProduto), 1)
            console.log('A Produto foi excluida !')
            buscarProduto.visualizar();
        } else
            console.log('A Produto nao foi encontrada! ')
    }


    //Métdoso auxiliares

    public gerarNumero(): number {
    return ++this.numero;
}

    public buscarNoArray(ean: number): Produto | null {
    for (let produto of this.listaProdutos) {
        if (produto.ean === ean) {
            return produto;
        }
    }
    return null;
}
}