const criarCadastro = (cadastrar) => {

    cadastrar.preventDefault()

    const corpoTabela = document.querySelector('[data-tbody]') //acessando o corpo da tabela

    const inputNome = document.querySelector('[data-form-input-nome]') //acessando o input nome

    const valorNome = inputNome.value //acessando o valor do inputNome

    const inputTelefone = document.querySelector('[data-form-input-telefone]') //acessando o input telefone

    const valorTelefone = inputTelefone.value //acessando o valor do inputTelefone

    const inputNascimento = document.querySelector('[data-form-input-nascimento]') //acessando o nascimento

    const valorNascimento = inputNascimento.value.split('-').reverse().join('/') //acessando o valor do inputNascimento

    const inputNotaFinal = document.querySelector('[data-form-input-nota]') // acessando o input da nota final

    const valorNotaFinal = inputNotaFinal.value //acessando o valor do inputNotaFinal

    const novosDados = document.createElement('tr') // criando nova linha dentro da tabela

    const conteudo = `<td>${valorNome}</td> <td>${valorTelefone}</td> <td>${valorNascimento}</td> <td>${valorNotaFinal}</td> ` //criando as células dentro da tabela

    novosDados.innerHTML = conteudo

    novosDados.appendChild(BotaoDeletar()) //adicionando o botão de deletar

    corpoTabela.appendChild(novosDados) //adicionando um aluno abaixo do outro

    inputNome.value = "" //zera os campos após o cadastro
    inputTelefone.value = ""
    inputNascimento.value = ""
    inputNotaFinal.value = ""
}

const novoCadastro = document.querySelector('[data-form-button]') // acessando o botão

novoCadastro.addEventListener('click', criarCadastro)


// criando o botão de deletar

const BotaoDeletar = () => {

    const botaoDeletar = document.createElement('button') //criando o botão

    botaoDeletar.classList.add('btn', 'btn-info', 'btn-sm')
 
    botaoDeletar.innerText = '❌' //adicionando texto ao botão

    botaoDeletar.addEventListener('click', DeletarCadastro) //escutador

    return botaoDeletar
}

const DeletarCadastro = (evento) => {

    const botaoDeletar = evento.target

    const removerCadastro = botaoDeletar.parentElement
  
    if (confirm('Tem certeza que deseja deletar o cadastro?')) {
        removerCadastro.remove() //remover linha
    } //mensagem de confirmação

}


