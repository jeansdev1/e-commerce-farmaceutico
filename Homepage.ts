import readlinesync = require('readline-sync')
import { colors } from './src/util/Colors';

export function main() {
    let opcao: number;

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
        produtos.listarProdutos();
        keyPress()
        break;
      case 2:
        console.log(colors.fg.whitestrong,
          "\n\nListar Produtos pelo EAN \n\n", colors.reset);
        produtos.listarProdutosEan();
        keyPress()
        break;
      case 3:
        console.log(colors.fg.whitestrong,
          "\n\nCadastrar Produtos \n\n", colors.reset);

        console.log("Digite o número da Conta: ")
        numero = readlinesync.questionInt("");

        contas.procurarPorNumero(numero);

        keyPress()
        break;
      case 4:
        console.log(colors.fg.whitestrong,
          "\n\nAtualizar Produtos\n\n", colors.reset);

        let Produto = produtos.buscarNoArray(ean);
        keyPress()
        break;
      case 5:
        console.log(colors.fg.whitestrong,
          "\n\nDeletar Produto \n\n", colors.reset);

        console.log("Digite o Ean do Produto a ser deletado: ")
        ean = readlinesync.questionInt("");
        produtos.deletar(produto);
        keyPress()
        break;
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