# HoradeCodar-EP5
dedico este repositório ao provável último episódio da tarefa "Hora de Codar!" uma grande saga que chegou ao fim, que envolve a implementação de um sistema de caixa eletrônico com diversas funcionalidades e validações.

# OBS: Em breve pretendo fazer um remaster deste episódio.

## Exercício

### Caixa Eletrônico

**Descrição**:  
Implemente um sistema de caixa eletrônico com as seguintes funcionalidades:

1. **Saudação ao Usuário**:  
   Ao acessar o sistema, pergunte o nome do usuário e exiba a mensagem: `"Olá {Nome}, é um prazer ter você por aqui!"`.

2. **Menu Principal**:  
   O menu deve ser apresentado na seguinte ordem:
   - Saldo
   - Extrato
   - Saque
   - Depósito
   - Transferência
   - Sair

3. **Validação de Opções**:  
   Utilize a estrutura `switch/case` para validar a opção escolhida pelo usuário no menu principal.

4. **Saque**:  
   - O valor a ser sacado não pode ser igual ou menor que zero. Se o usuário tentar sacar um valor inválido ou se o valor exceder o saldo, exiba a mensagem: `"Operação não autorizada"`.
   - Após a operação, o valor restante não pode ser negativo.

5. **Extrato**:  
   Adicione uma opção para visualizar o extrato da conta, incluindo algumas compras ou depósitos fictícios.

6. **Transferência**:  
   - Adicione uma opção para fazer uma transferência. O usuário deve informar o número da conta (apenas números) e o valor da transferência.
   - O valor da transferência não pode ser igual ou menor que zero e não pode exceder o saldo. Caso contrário, exiba a mensagem: `"Operação não autorizada"`.

7. **Depósito**:  
   - O valor a ser depositado não pode ser igual ou menor que zero. Caso isso ocorra, exiba a mensagem: `"Operação não autorizada"`.

8. **Senha**:  
   - Para acessar o saldo, sacar, retirar o extrato ou transferir dinheiro, o usuário deve informar a senha correta, que é `3589`. Se a senha estiver incorreta, o sistema deve chamar a função novamente para pedir a senha correta.

9. **Saída**:  
   - Quando o usuário escolher sair do sistema, exiba a mensagem: `"Nome, foi um prazer ter você por aqui!"`.

10. **Função de Erro**:  
    Atualize a função `erro` para lidar com as novas opções do menu e exibir mensagens apropriadas para operações não autorizadas.

## Como Executar
1. Clone este repositório.
2. Abra os arquivos HTML ou o código no ambiente de desenvolvimento para executar o sistema.

## Tecnologias Utilizadas
- HTML
- JavaScript

## Autor
Este projeto foi desenvolvido como parte de exercícios de prática em programação, proposto pelo Professor Gabriel.
