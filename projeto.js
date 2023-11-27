const listaDeTarefas = [];

function adicionandoTarefa() {
    const valorTarefa = document.getElementById('tarefa');

    if (valorTarefa.value !== '') {
        listaDeTarefas.push(valorTarefa.value);
        valorTarefa.value = ''; 
        atualizarLista();
    }
}

function editarTarefa(tarefasEditada) {
    const tarefaEditada = prompt('Editar tarefa', listaDeTarefas[tarefasEditada]);

    if (tarefaEditada !== null) {
        listaDeTarefas[tarefasEditada] = tarefaEditada;
        atualizarLista();
    }
}

function removeTarefa(remover) {
    listaDeTarefas.splice(remover, 1);
    atualizarLista();
}

function atualizarLista() {
    const atualizarListaTarefa = document.getElementById('listaTarefa');
    atualizarListaTarefa.innerHTML = '';

    listaDeTarefas.forEach((tarefa, index) => {
        const listaItem = document.createElement('li');
        listaItem.textContent = tarefa;

       
        const editarBotao = document.createElement('button');
        editarBotao.textContent = 'Editar';
        editarBotao.onclick = () => editarTarefa(index);

       
        const removerbotao = document.createElement('button');
        removerbotao.textContent = 'Remover';
        removerbotao.onclick = () => removeTarefa(index);

      
        listaItem.appendChild(editarBotao);
        listaItem.appendChild(removerbotao);


      
        atualizarListaTarefa.appendChild(listaItem);
    });
}

const enviarButton = document.getElementById('enviarBotao');
enviarButton.addEventListener('click', adicionandoTarefa);
