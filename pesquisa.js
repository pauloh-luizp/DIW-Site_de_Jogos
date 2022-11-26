const apiKey = "893b3e18b2ab4752a83f2cde712ccdf6";

pesquisa = () => {
	var input = document.querySelector("#pesquise_game");
	var texto = input.value;
	if(texto){
		window.location.replace("pesquisa.html"+'?search='+texto);
	}
	console.log(texto);
} 

window.onload = () =>{
  exibeResultadoPesquisa()
}

exibeResultadoPesquisa = () =>{
	var qs = location.search;
  var termo_pesquisado = "Need For Speed"//qs.split('=');  
  let str = ''
  fetch (`https://api.rawg.io/api/games?key=${apiKey}&search=${termo_pesquisado[1]}`)
  .then(res => res.json())
  .then(data => {
        console.log(data.results)
        for(let i = 0; i < data.results.length; i++){
          str += 	
          `<div class="row">
            <div class="col-12 col-sm-6 col-lg-8">
              <img src="${data.results[i].background_image}" width=600px height=300px>
            </div>
            <div class="col-6 col-lg-4">
            </div>
          </div>
          <div class="row">
            <div class="col-6 col-sm-4">
              <h6>Título: ${data.results[i].name}</h6>
            </div>
            <div class="col-6 col-sm-4">
              <h6>Data de lançamento: ${data.results[i].released}</h6>
            </div>
            <div class="col-6 col-sm-4">
              <button type="button">
              <a href = "https://rawg.io/games/${data.results[i].slug}" style="text-decoration:none"> 
                Detalhes...
              </a>
              </button>
            </div>
          </div>
          <hr/>`  
    }
    document.getElementById('resultados').innerHTML = str
  } )
}
