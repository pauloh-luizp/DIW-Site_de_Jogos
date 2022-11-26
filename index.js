const apiKey = "893b3e18b2ab4752a83f2cde712ccdf6";

window.onload = () =>{
  exibeJogosCarrossel()
  exibeLojasCards()
  exibeDesenvolvedoras()
  exibePlataformas()
}

procurando = () => {
	var input = document.querySelector("#pesquise_game");
	var texto = input.value;
	if(texto){
		window.location.replace("pesquisa.html"+'?search='+texto);
	}
	console.log(texto);
} 

exibeJogosCarrossel = () =>{
  const jogosPrincipais = [
    "need-for-speed-most-wanted",
    "gran-turismo-4",
    "Burnout 3: Takedown",
    "Test Drive Unlimited"
  ];  

  fetch (`https://api.rawg.io/api/games?key=${apiKey}&search=${jogosPrincipais}&page=1&page_size=4`)
  .then(res => res.json())
  .then(data => {
        console.log(data.results)
        let str = `<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
            class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
            aria-label="Slide 4"></button>
        </div>`

      str += `<div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row" style="margin-bottom: 35px;">
              <div class="col-xs-12 col-12 col-md-6" style="min-height: 294px;">
                <img src="${data.results[0].background_image}" width=500px height=300px>
              </div>
              <div class="col-xs-12 col-12 col-md-6">
                <p1 height="100%">
                  <h5>${data.results[0].name}</h5>
                </p1>
                <p></p>
                <div class="row">
                  <div class="col-xs-12 col-sm-12 col-md-3 col-lg-4">
                    Data de lançamento: ${data.results[0].released}
                  </div>
      
                  <div class="col-xs-12 col-sm-12 col-md-3 col-lg-4">
                    Avaliação: ${data.results[0].rating}
                  </div>
      
                  <div class="col-xs-12 col-sm-12 col-md-3 col-lg-4">
                    Metacritic: ${data.results[0].metacritic}
                  </div>
                </div>
              </div>
            </div>
          </div>
           `
        for(let i = 1; i < data.results.length; i++){
          str += 
          `<div class="carousel-item">
          <div class="row" style="margin-bottom: 35px;">
            <div class="col-xs-12 col-12 col-md-6" style="min-height: 294px;">
              <img src="${data.results[i].background_image}" width=500px height=300px>
            </div>
            <div class="col-xs-12 col-12 col-md-6">
              <p1 height="100%">
                <h5>${data.results[i].name}</h5>
              </p1>
              <p></p>
              <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-3 col-lg-4">
                  Data de lançamento: ${data.results[i].released}
                </div>

                <div class="col-xs-12 col-sm-12 col-md-3 col-lg-4">
                  Avaliação: ${data.results[i].rating}
                </div>

                <div class="col-xs-12 col-sm-12 col-md-3 col-lg-4">
                  Metacritic: ${data.results[i].metacritic}
                </div>
              </div>

            </div>
          </div>
        </div>`
      } //console.log(str) 
      str += ` </div>
      </div>
    </div>
  </div>`
      document.getElementById('jogos_de_corrida_marcantes').innerHTML = str
  } )
}

exibeLojasCards = () =>{

  fetch (`https://rawg.io/api/stores?key=${apiKey}`)
  .then(res => res.json())
  .then(data => {
        console.log(data.results)
      let str = `<div class="container">
            <div class="row">`
      for(let i = 0; i < 4; i++){
        str += 	
        `<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-12 justify-content-center">
        <div class="card" widht="100%">
            <div class="card-body">
              <p class="card-text"><b>${data.results[i].name}</b></p>
            </div>
              <img src="${data.results[i].image_background}" style="width: 100%">
          </div>
        </div>`
      }
      str += `</div>`
    document.getElementById('card_games_corrida').innerHTML = str
  } )
}

exibeDesenvolvedoras = () =>{
  let str = ''
  fetch (`https://rawg.io/api/publishers?key=${apiKey}`)
  .then(res => res.json())
  .then(data => {
        console.log(data.results)
        for(let i = 0; i < 3; i++){
          str += 	
          `<div class="col-sm-12 col-md-4 col-lg-4 col-12">
          <p class="nome-categoria"><b><h4>${data.results[i].name}</h4></b></p>
          <div class="infos-categorias">
            <div class="componentes">
              <p class="comp-categoria">
                <img src="${data.results[i].image_background}" class="card-img">
                <h5>Quantidade de jogos: ${data.results[i].games_count}</h5>
              </p>
            </div>
          </div>
        </div>`  
    }
    document.getElementById('desenvolvedoras').innerHTML = str
  } )
}

exibePlataformas = () =>{
  let str = ''
  fetch (`https://rawg.io/api/platforms?key=${apiKey}`)
  .then(res => res.json())
  .then(data => {
        console.log(data.results)
        for(let i = 0; i < 3; i++){
          str += 	
          `<div class="col-sm-12 col-md-4 col-lg-4 col-12">
          <p class="nome-categoria"><b><h4>${data.results[i].name}</h4></b></p>
          <div class="infos-categorias">
            <div class="componentes">
              <p class="comp-categoria">
                <img src="${data.results[i].image_background}" class="card-img">
                <h5>Quantidade de jogos: ${data.results[i].games_count}</h5>
              </p>
            </div>
          </div>
        </div>`  
    }
    document.getElementById('plataformas').innerHTML = str
  } )
}