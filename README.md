# Nome do Sistema: QualiLáctea Express 

## 1 – Apresentação: 
O software QualiLáctea Express visa expandir as vendas para o mercado online regional, ao permitir aos clientes fazer reservas e solicitar entregas, em uma página web. Para suprir essa demanda, será gerado um sistema que centraliza e otimiza o gerenciamento das operações de venda e estoque da empresa. A aplicação visa o gerenciamento das contas do caixa, o cadastro dos usuários e controle de seus perdidos e entregas, controle do estoque dos produtos e dos fornecedores locais, de forma centralizada em um banco de dados, que será mostrado em uma interface intuitiva, responsiva e com acessibilidade. 
 
## 2 – Descrição do Projeto e Usuários: 
A aplicação contará com funcionalidades especificas para cada usuário, dependendo do uso que irá fazer do software. O objetivo é criar um banco de dados que irá armazena as informações das várias funcionalidades de forma centralizada. Para ser acessado e alimentado através da página web da loja. Devendo haver permissões de acesso a cada página, que é destinada a determinadas funções no sistema. 
Cadastros para armazenar no banco de dados.   
Login de clientes. 
Pedidos  
Fornecedores. 
Estoque de produtos. 
Caixa da loja. 
Controle de acesso as páginas da loja. 
Cliente – acesso as páginas de cadastro, login, produtos, reservas, entregas e pagamentos. 
Fornecedores – Acessos as páginas de cadastro, negociações e a interface de venda da loja. 
Gerente – Acessos a todas as interfaces da loja. 
Financeiro – Acesso ao cadastro de fornecedores, estoque e caixa da loja. 
Atendente – Acesso a página de pedidos e entregas. 
Uma medida de segurança da informação que será implementada é backup diários enviados a um servidor, para evitar ataques da quebra da disponibilidade dos dados em ataques cibernéticos. 
 
## 3 – Requisitos Funcionais 
                  
        ◦ RF001 - Cadastro de usuário  
          Deve questionar qual é o usuário a ser cadastro. 
            ▪ Fornecedor – Requisito destinado a fazer o cadastro dos fornecedores através do preenchimento dos campos: nome, cpf, endereço, produtos à venda e campo de agendar uma negociação. O fornecedor pode acessar a página da loja e realizar o seu cadastro. Formando o campo contendo o nome dos fornecedores assíduos, produtos e valores. o Cliente – Funcionalidade que permite fazer o cadastro do cliente ao preencher os campos nome, endereço, cpf e data de nascimento.  
 
        ◦ RF002 - Cadastro de produtos. 
            ▪ Requisito responsável por cadastrar os produtos disponíveis a venda e no estoque. Devendo conter os campos nome, quantidade, data de validade dos lotes e categoria. 
 
        ◦ RF003 - Cadastro do Login do usuário o Requisito é responsável pela autenticação do usuário no sistema. Devendo criar o nome do usuário e uma senha forte que será criptografada para ser armazenada em um banco de dados. Para maior segurança, haverá autenticação de dois fatores, após o usuário escolher o seu login, será enviado para o seu email ou celular um código único, para finalizar o cadastro do seu login.  
 
        ◦ RF004 - Cadastro de pedidos e entregas. 
            ▪ Responsável por cadastrar as solicitações de compra e entrega dos clientes. Os usuários devem preencher os campos de comprar ou reservar, solicitar entrega e escolher forma de pagamento: avista, pix ou cartão de crédito. Os dados serão armazenados no banco de dados e apresentados na interface web da loja, na página do atendente QualiLáctea, contendo as solicitações dos clientes, nos campos perdidos, entregas. 
 
 
        ◦ RF005 – Manutenção do Estoque  o Destinando a manutenção dos valores de cada produto no estoque. Para isso, será realizada a manutenção dos dados do estoque, através da correlação com o campo de pedidos e entregas e com o campo dos fornecedores para alimentar o estoque. Ajustando automaticamente o estoque após cada venda e ao ser adquirido os produtos dos fornecedores, permitindo ter um relatório preciso dos níveis do estoque conforme cada transação. Essa relação será alimentada entre o frontend que envia os dados para serem armazenado no banco de dados no backend. 
 
        ◦ RF006 – Financeiro  o Requisito responsável por centralizar todas as informações financeira da loja. O gerente da loja poderá fazer analise dos campos: vendas, estoque disponíveis, produtos obtidos, salários dos funcionários em cada mês. 
 
## 4 – Requisitos Não Funcionais 
 
        ◦ RNF001 – Segurança dos dados  o Requisito destinado a proteger os dados sensíveis dos usuários. Para isso, será criptografado o login e os dados pessoais dos usuários, armazenando em um servidor.  
 
        ◦ RNF002 – Acessibilidade  o Requisito responsável a propiciar que a interface seja acessível a usuários com deficiência, com os recursos de navegação por teclado, contraste de cores adequado e leitores de tela. 
 
        ◦ RNF003 – Responsividade  o Este requisito é destinado a propiciar que a interface se adapte a diferentes tamanhos de telas em vários dispositivos, como em notebook, tablets e dispositivos móveis. 
 
        ◦ RNF004 - Manutenibilidade o Este requisito vida a construção do código de modo modular e com documentação das funcionalidades, permitindo que seja fácil de correção de bugs e acessível a novas adaptações, com um custo de tempo menor para sua manutenção. 
 
        ◦ RNF005 – Usabilidade 
            ▪ A interface web da loja deve ser intuitiva, com fácil navegação entre elementos e páginas. De modo, a ser baixo o tempo para se compreender e aprender navegar no sistema. 
 
        ◦ RNF006 – Disponibilidade o O sistema contará com backup diários dos dados em um servidor, para minimizar o tempo de inatividade em ataques cibernéticos ou falhas do sistema. 
 
        ◦ RNF007 – Permissões do usuário  o Este requisito visa garantir que as permissões de cada tipo de usuário sejam configuradas em relação ao login que será executado, para restringir o acesso a determinadas páginas do sistema. 
 
        ◦ RNF008 - Escalabilidade  o Este requisito deve garantir que o sistema tenha um código que seja estruturado a assegurar o aumento de dados ou de usuário sem perder o seu desempenho. 
 
        ◦ RNF009 – Performance  o O sistema deve garantir que as solicitações ao seu sistema não demorem para serem realizadas. Clicar nos link, salvar dados, mudar de página sejam rápidos. 
 
## 5 – Observações Técnicas 
A construção do sistema é baseada nas seguintes tecnologias: o front-end utilizar as linguagens: html, CSS, JavaScript. O banco de dados utilizado para armazenar todos os dados das funcionalidades do sistema é o relacional (SQL). O back-end contará com javaScript, node, express, para manipular os dados do banco de dados através da página web, permitindo inserir, excluir ou incluir novos dados 
 
 
