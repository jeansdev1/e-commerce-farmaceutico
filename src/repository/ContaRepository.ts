import { Produto } from "../Model/Produto";

export interface ContaRepository {

	// CRUD da Conta
	listarTodas(): void;
	procurarPorNome(titular: string) : void;
	procurarPorEan(numero: number): void;
	cadastrar(produto: Produto): void;
	atualizar(produto: Produto): void;
	deletar(numero: number): void;
	
}
