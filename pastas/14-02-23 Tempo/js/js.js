    //O codigo usa a biblioteca 
    //Axios para realizar uma
    //requisição HTTP a API de 
    //OpenWatherMap para obter a 
    //previsão do tempo

    //Esta linha define a função assincrona , iso significa que a função pofr esperar por uma resposta da API

    async function getWeather() {

        var rodar = document.getElementById('pesquisarCidade').value;
        console.log(rodar)

        //Nesta linha estamos fazndo uma chamada a API usando a blibioteca Axios
        //A URL inclui informações da localização (Mogi das Cruzes) e a unidade de medida (Celsius) e a chave da API (API - KEY)

        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${rodar}&units=metric&appid=64ed82577ced7f69cb1687f0ce536131`);

        //Aqui estamos extraindo a temperatura atual (celsius) da resposta da API e armazenamento na variavel 

        //Obtém a temperatura atual em Celsius da resposta da API e armazena na variável usando comandos especificos
        const tempCelsius = response.data.main.temp;

        document.querySelector('#temperatura').innerHTML = `A temperatura atual é de ${tempCelsius} °C.`;

    }
    //Chamando a função getWather para inicar a consulta a API

