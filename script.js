let list = document.querySelectorAll('.item') // Seleciona todos os elementos com a classe 'item' e armazena na variável list
let next = document.getElementById('next') // Seleciona o elemento com o id 'next' e armazena na variável next
let prev = document.getElementById('prev') // Seleciona o elemento com o id 'prev' e armazena na variável prev

let count = list.length // Conta quantos elementos existem na lista (quantidade total de elementos com a classe 'item')
let active = 0 // Define qual item está ativo atualmente (inicialmente o primeiro item, que tem índice 0)

//verifica se os elementos existem antes de adicionar os eventos
if (next && prev) {
    //próximo item
    next.onclick = () => { //arrow function () => 
        let activeOld = document.querySelector('.active') // Seleciona o item atualmente ativo (que possui a classe 'active') e armazena na variável activeOld
        activeOld.classList.remove('active') // Remove a classe 'active' do item atual ativo, desativando sua exibição

        active = active >= count - 1 ? 0 : active + 1 // Verifique se é o último item da lista. Se for, volte para o primeiro item (índice 0). Caso contrário, avance para o próximo item (incrementando o índice ativo em 1)
        list[active].classList.add('active') // Adiciona a classe 'active' ao próximo item, ativando sua exibição
    }
    //item anterior
    prev.onclick = () => { 
        let activeOld = document.querySelector('.active') // Seleciona o item atual ativo
        activeOld.classList.remove('active') // Remove a classe 'active' do item atual 

        active = active <= 0 ? count - 1 : active - 1 // Atualiza o índice ativo: Se estiver no primeiro item, vai para o último item. Caso contrário, retrocede para o item anterior
        list[active].classList.add('active') // Adiciona a classe 'active' ao item anterior, ativando sua exibição
    }
}