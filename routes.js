var axios = require("axios");

axios.get("https://api.github.com/users/takenet/repos?q=&type=public&sort=created&direction=asc")
    .then(function(resposta){
 
    var nome = [];
    var descricao = [];
    var repo =[];

    for (let i = 0; i < 5; i++){ //resposta.data.length
        nome.push(resposta.data[i].name)
        descricao.push(resposta.data[i].description)
        repo.push(nome[i] + descricao[i])
        //console.log(nome[i] +"\n"+ descricao[i])
    }

    function arrayParaObjeto(array) {
        let resultado = {}
        for(const element of array){
            resultado[element[0]] = element[1]
        }
        return resultado;
    }

    for (let i = 0; i < 5; i++){
    //console.log(arrayParaObjeto(repo))
    }
    console.log(repo)

}).catch(function(error){
    if(error){
        console.log(error)
    }
});
