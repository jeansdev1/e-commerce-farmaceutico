import { Produto } from "./Produto";


export class Cosmentico extends Produto {

    private _clubeProdutos: number;


    constructor(ean: number, preco: number, nome: string, tipo: number, clubeProdutos: number) {
        super(ean, preco, nome, tipo)
        this._clubeProdutos = clubeProdutos;

    }

    public get clubePontos(): number {
        return this._clubeProdutos;
    }
    public set clubePontos(value: number) {
        this._clubeProdutos = value;
    }

    public produtosClube(): void {
        super.visualizar;
        console.log('Produto faz parte do Clube dermocosmeticos' + this._clubeProdutos)


    }
}
