
function buscaCep(){
    if(cep.value.length == 9){
        fetch(`https://viacep.com.br/ws/${cep.value}/json`)
        .then((response) =>response.json())
        .then((response) =>{
            logradouro.value = response.logradouro;
            Bairro.value = response.bairro;
            Cidade.value = response.localidade;
            Estado.value = response.estado;
    });
}
}

