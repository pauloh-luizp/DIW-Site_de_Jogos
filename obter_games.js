const apiKey = "893b3e18b2ab4752a83f2cde712ccdf6";

function getGames(nomeJogo){
  
  jogo = ''
 
  fetch (`https://rawg.io/api/games?search=${nomeJogo}&key=${apiKey}`)
    .then(res => res.json ())
    .then(data => jogo = data)

  return jogo
}



exibeJogosCarrossel(jogo)

document.body.onload = () => {
  exibeJogosCarrossel();
}


