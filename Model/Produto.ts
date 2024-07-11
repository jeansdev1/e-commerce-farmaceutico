export abstract class Produto {
    // definindo atributos da classe produto

    private _ean: number;
    private _preco: number;
    private _nome: string;
    private _tipo: number;
    
    // Definimos o metodo construtor, responsavel por criar os objetos da Classe


	constructor(ean: number, preco: number, nome: string, tipo: number) {
		this._ean = ean;
		this._preco = preco;
		this._nome = nome;
		this._tipo = tipo;
	}
    

	public get ean(): number {
		return this._ean;
	}

	public get preco(): number {
		return this._preco;
	}

    public get nome(): string {
		return this._nome;
	}

	public get tipo(): number {
		return this._tipo;
	}

    public set ean(value: number) {
		this._ean = value;
	}

	public set preco(value: number) {
		this._preco = value;
	}

	public set nome(value: string) {
		this._nome = value;
	}

	public set tipo(value: number) {
		this._tipo = value;
	}


    public visualizar(): void {

        let tipo: string = ''
        switch (this._tipo) {
            case 1:
                tipo = 'Remedio'
                break;
            case 2:
                tipo = 'Cosméticos'
                break;
        }

        console.log('\n **************************************');
        console.log('\n        Especificações do Produto      ');
        console.log('\n **************************************');
        console.log(`Nome do produto: ${this._nome} `);
        console.log(`EAN do produto: ${this._ean} `);
        console.log(`Classificação do Produto: ${tipo}`);
        console.log(`Preço do Produto: ${this._preco}`);

    }


}