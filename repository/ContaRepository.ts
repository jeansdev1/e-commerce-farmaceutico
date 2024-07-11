import { Produto } from "../Model/Produto";

export interface ContaRepository {

	// CRUD da Conta
	procurarPorEan(numero: number): void;
	listarTodas(): void;
	cadastrar(produto: Produto): void;
	atualizar(produto: Produto): void;
	deletar(numero: number): void;
	procurarPorNome(titular: string) : void;
	
}
