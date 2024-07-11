import readlinesync = require('readline-sync')
import { colors } from './src/util/Colors';
import { Produto } from './src/Model/Produto';
import { Remedio } from './src/Model/Remedio';
import { ContaController } from './src/controller/ContaController';
import { preProcessFile } from 'typescript';
import { read } from 'fs';
import { Cosmetico } from './src/Model/Cosmetico';

export function main() {

    let opcao, ean, preco: number;
    let nome: string;
    let tipo
    let controlado, clubePontos

    const tipoProduto = ['Remedio', 'Cosmetico'];


    
    
    
    const listaProdutos: ContaController = new ContaController();
    
    // criacao de contas para poder realizar testes no programa
    
    listaProdutos.cadastrar(new Remedio(1, 22.50, 'Benegripe', 1, false))
    listaProdutos.cadastrar(new Remedio(2, 39.90, 'Alprazolam', 1, true))

    listaProdutos.cadastrar(new Cosmetico(3, 109.90, 'Sabonete Laroche Posay', 2, true))
    listaProdutos.cadastrar(new Cosmetico(4, 20.95, 'Creme Nivea', 2, false))



    while (true) {

        console.log(colors.fg.magentastrong,)
        console.log('*****************************************************');
        console.log('                                                     ');
        console.log('                    EFarmacy Health                  ');
        console.log('                                                     ');
        console.log('*****************************************************');
        console.log('                                                     ');
        console.log('               1 - Lista de Produtos                 ');
        console.log('               2 - Listar Produtos pelo EAN          ');
        console.log('               3 - Cadastrar Produtos                ');
        console.log('               4 - Atualizar Produtos                ');
        console.log('               5 - Deletar Produto                   ');
        console.log('               6 - Sair                              ');
        console.log('                                                     ');
        console.log('*****************************************************');
        console.log('                                                     ');
        console.log("                                                     ",
            colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 6) {
            
            console.log(colors.fg.greenstrong,
                "\n~ Efarmacy Health ~ - Cuidar de Perto em todos os momentos da vida ....");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong,
                    "\n\nListar Produtos da Farmacia \n\n", colors.reset);
                listaProdutos.listarTodas();
                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong,
                    "\n\nLista de Produtos pelo EAN pesquisado \n\n", colors.reset);
                console.log('Digite o EAN para a pesquisa: ')
                ean = readlinesync.questionInt();
                listaProdutos.procurarPorEan(ean);
                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong,
                    "\n\nCadastrar Produtos \n\n", colors.reset);

                console.log('\nDigite o Tipo do produto: ');
                console.log('\n1 para Remedio: ');
                console.log('\n2 para Cosmetico: ');
                tipo = readlinesync.keyInSelect(tipoProduto, "", { cancel: false }) + 1;


                console.log('\nDigite o nome do produto: ')
                nome = readlinesync.question('');

                console.log('\nDigite o preco do produto: ')
                preco = readlinesync.questionInt('')

                console.log('Digite o EAN do produto: ')
                ean = readlinesync.questionInt('')

                switch (tipo) {
                    case 1:
                        console.log('É um medicamento Controlado? Y ou N');
                        controlado = readlinesync.keyInYNStrict('')
                        if (controlado == true) {
                            listaProdutos.cadastrar(new Remedio(ean, preco, nome, tipo, controlado))
                            console.log('Só pode ser vendido com receita')
                        } else
                            listaProdutos.cadastrar(new Remedio(ean, preco, nome, tipo, controlado))
                        console.log('Medicamento cadastrado com Sucesso pelas normas da Anvisa')
                        keyPress()
                        break;

                    case 2:
                        console.log('O Produto faz parte do Clube Dermo+ ?');
                        clubePontos = readlinesync.keyInYNStrict('')
                        if (clubePontos == true) {
                            console.log('Esse produto acumula pontos para o Derma Plus, ao final da pagina clique em *** Saiba mais ***')
                        } else
                            listaProdutos.cadastrar(new Cosmetico(ean, preco, nome, tipo, clubePontos))
                        console.log('Cosmetico nao acumula pontos no nosso site! ')
                }
                console.log('Cosmetico cadastrado com Sucesso!..')
                keyPress()
                break;

            case 4:
                console.log(colors.fg.whitestrong,
                    "\n\nAtualizar dados do produtos \n\n", colors.reset);

                console.log('Digite o numero do EAN do Produto: ')
                ean = readlinesync.questionInt('');

                let produto = listaProdutos.buscarNoArray(ean);

                if (produto) {
                    console.log('\nDigite o Tipo do produto: ');
                    console.log('\n1 para Remedio: ');
                    console.log('\n2 para Cosmetico: ');
                    tipo = readlinesync.keyInSelect(tipoProduto, "", { cancel: false }) + 1;


                    console.log('\nDigite o nome do produto: ')
                    nome = readlinesync.question('');

                    console.log('\nDigite o preco do produto: ')
                    preco = readlinesync.questionInt('')

                    console.log('Digite o EAN do produto: ')
                    ean = readlinesync.questionInt('')

                    switch (tipo) {
                        case 1:
                            console.log('É um medicamento Controlado? Y ou N');
                            controlado = readlinesync.keyInYNStrict('')
                            if (controlado == true) {
                                listaProdutos.cadastrar(new Remedio(ean, preco, nome, tipo, controlado))
                                console.log('Só pode ser vendido com receita')
                            } else
                                listaProdutos.cadastrar(new Remedio(ean, preco, nome, tipo, controlado))
                            console.log('Medicamento cadastrado com Sucesso pelas normas da Anvisa')
                            keyPress()
                            break;

                        case 2:
                            console.log('O Produto faz parte do Clube Dermo+ ?');
                            clubePontos = readlinesync.keyInYNStrict('');
                            if (clubePontos == true) {
                                console.log('Esse produto acumula pontos para o Derma Plus, ao final da pagina clique em *** Saiba mais ***')
                            } else
                                listaProdutos.cadastrar(new Cosmetico(ean, preco, nome, tipo, clubePontos));
                            console.log('Cosmetico nao acumula pontos no nosso site! ');
                    }
                    console.log('Cosmetico cadastrado com Sucesso!..');
                    break;
                } else
                    console.log('\nProduto nao encontrado! ');
            case 5:
                console.log('Deletar produto da lista');
                console.log('Digite o EAN do produto: ');
                ean = readlinesync.questionInt('');
                listaProdutos.deletar(ean);
                console.log('Produto excluido com sucesso! ...')
        }
    }
}
function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: JeansDev1 ");
    console.log("Jean Andre - jeanv_lima@outlook.com");
    console.log("github.com/jeansdev1");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}
main();