fetch ('https://rawg.io/api/games?search=need-for-speed-most-wanted&key=893b3e18b2ab4752a83f2cde712ccdf6')
  .then(res => res.json ())
  .then(data => document.getElementById('nfsmw').innerHTML = data.background_image)