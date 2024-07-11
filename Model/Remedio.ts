import { Produto } from "./Produto";

export class Remedio extends Produto {

    private _controlado: boolean;

    constructor(ean: number, preco: number, nome: string, tipo: number, controlado: boolean) {
        super(ean, preco, nome, tipo)
        this._controlado = controlado;
    }
    public get controlado(): boolean {
        return this._controlado;
    }

    public set controlado(value: boolean) {
        this._controlado = value;

    }

    public visualizar(): void {
        super.visualizar();
        console.log('Necessario Receita Medica para Comprar' + this.controlado);

    }

}
