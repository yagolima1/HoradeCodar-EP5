let Usuario;

        var saldo_ficticio = 100;

        let extrato = [];


        function saudaçao() {

            Usuario = prompt("Olá, tudo bem ?! Qual seu nome ?")

            if (Usuario === '') {

                alert("Por gentileza, insira seu nome.")

                saudaçao();
            }

            else {

                alert("Seja Bem vindo(a) ao nosso Caixa Eletrônico Sr(a) " + Usuario + ". 🥰")

                HOME();
            }
        }

        function SENHA(){

            let senha = parseInt(prompt("Insira sua Senha: "))

            if (senha === 3589){

            alert("Senha Correta, Acesso Concedido!");

           }

           else{

            alert("Senha Inválida! Tente Novamente.")

        }

    }

        function HOME() {

            var opçoes = parseInt(prompt('Selecione uma opção: 1) Saldo | 2) Extrato | 3) Saque | 4) Depósito |      5) Transferência | 6) Sair.'));

            switch (opçoes) {

                case 1:
                    SENHA();
                    ver_saldo();
                    break;

                case 2:
                    SENHA();
                    verExtrato();
                    break;

                case 3:
                    SENHA();
                    fazer_saque();
                    break;

                case 4:
                    SENHA();
                    fazer_deposito();
                    break;

                case 5:
                    SENHA();
                    transferencia();
                    break;

                case 6:
                    SAIR();
                    break;

                default:
                    ERRO();
            }
        }

        function ERRO() {
            
            alert('Por favor, informe um número entre 1 e 6');
            HOME();
        }

        function SAIR() {

            var confirma = confirm('Você deseja sair?');

            if (confirma) {

                alert("Foi um prazer ter você por aqui " + Usuario + ". Obrigado por utilizar nossos serviços, tenha uma excelente semana! 😃👍");

                window.location.href = "https://youtu.be/BbeeuzU5Qc8?si=FXuzBuKJGN2iEoV3"

            }

            else {

                HOME();

            }
        }

        function ver_saldo() {

            alert('Seu saldo atual é de: R$' + saldo_ficticio);
            HOME();

        }

        function fazer_saque() {

            var saque = parseFloat(prompt('Qual o valor você deseja sacar ?'));

            if (isNaN(saque) || saque === '') {

                alert('Por gentileza, informe um número:');

                fazer_saque();

            }

            else if (saque <= saldo_ficticio) {

                saldo_ficticio -= saque;

                extrato.push(`Saque de R$ ${saque.toFixed(2)}`)

                ver_saldo();

            }

            else if (saque <= 0) {

                alert("Operação não Autorizada!")

                fazer_saque();
            }

            else {

                alert("Operação não Autorizada!")

                fazer_saque();
            }
        }

        function fazer_deposito() {

            var deposito = parseFloat(prompt('Qual valor você deseja depositar ?'));

            if (isNaN(deposito) || deposito === '') {

                alert('Por gentileza, informe um número:');

                fazer_deposito();

            }

            else if (deposito <= 0) {

                alert("Operação não Autorizada!")

                fazer_deposito();
            }

            else {

                saldo_ficticio += deposito;
                extrato.push(`Depósito de R$ ${deposito.toFixed(2)}`)
                ver_saldo();

            }
        }

        function verExtrato() {
                
                if (extrato.length === 0) {
                    alert("Por enquanto nenhuma ação foi realizada nesta sessão.");
    
                    HOME();
                }
    
                else {
    
                    let historico = "Extrato: \n";
    
                    extrato.forEach(transacao => {
    
                        historico += transacao + "\n";
    
                    })
    
                    alert(historico);
    
                    HOME();
                }

           }

        function transferencia() {
            alert("Contas Fictícias para usar nas Transferências: 1015, 2002 ou as Favoritas");
        
            let num_contas = parseInt(prompt("Insira o número da conta que deseja transferir:                              Contas Favoritas:  1-  Mãe  |  2-  Vô  |  3-  Titio"));
        
            if (num_contas === 1015 || num_contas === 2002 || num_contas === 1 || num_contas === 2 || num_contas === 3) 
                
                {
                let transferir = parseFloat(prompt("Conta Selecionada! Quanto você deseja transferir ?                           Seu saldo é de: R$" + saldo_ficticio));
        
                if (isNaN(transferir) || transferir <= 0) {

                    alert("Operação não Autorizada!");

                    HOME();

                } 
                
                else if (transferir > saldo_ficticio) {

                    alert("Operação não Autorizada!");

                    HOME();

                } 
                
                else {

                    saldo_ficticio -= transferir;

                    extrato.push(`Transferência de R$ ${transferir.toFixed(2)}`);

                    ver_saldo();

                    HOME();
                }
            } 
            
            else {

                alert("Operação não Autorizada!");
                HOME();
            }
        }

        saudaçao();
