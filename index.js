const apiKey = "893b3e18b2ab4752a83f2cde712ccdf6";

window.onload = () =>{
  exibeJogosCarrossel()
}

exibeJogosCarrossel = () =>{
  const jogosPrincipais = [
    "need-for-speed-most-wanted",
    "gran-turismo-4",
    "burnout-3-takendown",
    "test-drive-unlimited"
  ];  
  var name = ''
  var description = ''
  var rating = ''
  var released = ''
  var metacritic = ''
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
        </div>
      
        <!--Sauber Mercedes C9-->
        <div class="carousel-inner">
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
                    Publishers: ${data.results[0].publishers}
                  </div>
      
                  <div class="col-xs-12 col-sm-12 col-md-3 col-lg-4">
                    Plataforma: ${data.results[0].platform}
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
                  Publishers: ${data.results[i].publishers}
                </div>

                <div class="col-xs-12 col-sm-12 col-md-3 col-lg-4">
                  Plataforma: ${data.results[i].platforms}
                </div>
              </div>

            </div>
          </div>
        </div>`
      } console.log(str) 
      str += ` </div>
      </div>
    </div>
  </div>`
      document.getElementById('jogos_de_corrida_marcantes').innerHTML = str
  } )  
}


