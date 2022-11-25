const apiKey = "893b3e18b2ab4752a83f2cde712ccdf6";

window.onload = () => {
  exibeJogosCarrossel();
};

function exibeJogosCarrossel() {
  const jogosPrincipais = [
    "need-for-speed-most-wanted",
    "gran-turismo-4",
    "burnout-3-takendown",
    "test-drive-unlimited",
  ];

  let str = "";
  var name = "";
  var description = "";
  var rating = "";
  var released = "";
  var metacritic = "";

  //for (let i = 0; i < jogosPrincipais.length; i++){

  // Buscando assim funciona para trazer vários jogos
  test = fetch(`https://rawg.io/api/games?token&key=${apiKey}`)
    .then((res) => res.json())
    .then((data) =>
      console.log(data).catch((erro) => console.error("Erro:", erro))
    );

  console.log(test);

  // Buscando desse jeito fica fixo apenas nesse jogo que está na URL tem que ser dinâmico
  fetch(
    `https://rawg.io/api/games?token&key=${apiKey}&id=need-for-speed-most-wanted`,
    { mode: "no-cors" }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data.results);
      str += `<div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row" style="margin-bottom: 35px;">
              <div class="col-xs-12 col-12 col-md-6" style="min-height: 294px;">

              </div>
              <div class="col-xs-12 col-12 col-md-6">
                <h5>${data.results.name}</h5>
                <p1 height="100%">
                  ${data.results.description}
                </p1>
                <p></p>
                <div class="row">
                  <div class="col-xs-12 col-sm-12 col-md-3 col-lg-4">
                    Data de Lançamento: ${data.results.released}
                  </div>

                  <div class="col-xs-12 col-sm-12 col-md-3 col-lg-4">
                    Número de avaliações: ${data.results.rating_count}
                  </div>

                  <div class="col-xs-12 col-sm-12 col-md-3 col-lg-4">
                    Peso: 905 kg
                  </div>
                </div>
              </div>
            </div>
          </div>`;
    });
  //}
  document.getElementById("jogos_de_corrida_marcantes").innerHTML = str;
}
