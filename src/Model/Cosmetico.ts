import { Produto } from "./Produto";


export class Cosmetico extends Produto {

    private _clubeProdutos: boolean;


    constructor(ean: number, preco: number, nome: string, tipo: number, clubeProdutos: boolean) {
        super(ean, preco, nome, tipo)
        this._clubeProdutos = clubeProdutos;

    }

    public get clubePontos(): boolean {
        return this._clubeProdutos;
    }
    public set clubePontos(value: boolean) {
        this._clubeProdutos = value;
    }

    public produtosClube(): void {
        super.visualizar;
        console.log('\nProduto faz parte do Clube dermocosmeticos:  ' + this._clubeProdutos)


    }
}
