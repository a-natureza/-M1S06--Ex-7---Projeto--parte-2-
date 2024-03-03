document.getElementById('consultarCep').addEventListener('click', function() {
    let cep = prompt("Digite seu CEP: ");
    if (cep) {
        fetch(`https://viacep.com.br/ws/${cep}/json`, { method: 'GET' })
            .then(response => response.json())
            .then(data => {
                if (data.erro) {
                    alert("CEP não encontrado.");
                    return;
                }

                const enderecoFormatado = `${data.logradouro}, ${data.complemento} - ${data.bairro} - ${data.localidade}/${data.uf}`;
                const confirmacao = confirm(`O endereço está correto? ${enderecoFormatado}`);

                if (confirmacao) {
                    localStorage.setItem("endereco", JSON.stringify(data));
                    alert("Endereço salvo com sucesso!");
                }
            })
            .catch(error => console.error("Falha na requisição", error));
    }
});
