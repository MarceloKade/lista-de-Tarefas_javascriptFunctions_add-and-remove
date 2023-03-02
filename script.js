let listaTarefas = []; // Array que armazena as tarefas

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    adicionarTarefa();
});

function adicionarTarefa() {
    let novaTarefa = document.getElementById("nova-tarefa").value;
    if (novaTarefa !== "") { // Verifica se o campo não está vazio
        listaTarefas.push(novaTarefa); // Adiciona a tarefa ao array
        atualizarLista(); // Atualiza a lista de tarefas
        document.getElementById("nova-tarefa").value = ""; // Limpa o campo de texto
    }
}

function removerTarefa(index) {
    listaTarefas.splice(index, 1); // Remove a tarefa do array
    atualizarLista(); // Atualiza a lista de tarefas
}

function atualizarLista() {
    let lista = document.getElementById("lista-de-tarefas");
    lista.innerHTML = ""; // Limpa a lista de tarefas
    for (let i = 0; i < listaTarefas.length; i++) {
        let tarefa = listaTarefas[i];
        let itemDiv = document.createElement("div");
        itemDiv.className = "d-flex justify-content-between align-items-center list-group-item";
        let itemLista = document.createElement("e");
        itemLista.innerHTML = tarefa;
        let botaoRemover = document.createElement("button");
        botaoRemover.type = "button";
        botaoRemover.className = "close";
        botaoRemover.setAttribute("aria-label", "Close");
        botaoRemover.onclick = function () {
            removerTarefa(i);
        };
        botaoRemover.innerHTML = '<span aria-hidden="true">&times;</span>';
        itemDiv.appendChild(itemLista);
        itemDiv.appendChild(botaoRemover);
        lista.appendChild(itemDiv);
    }
}