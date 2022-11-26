const apiKey = "893b3e18b2ab4752a83f2cde712ccdf6";

window.onload = () =>{
  exibeDesenvolvedoras()
}

exibeDesenvolvedoras = () =>{
  let str = `<hr>`
  fetch (`https://rawg.io/api/publishers?key=${apiKey}`)
  .then(res => res.json())
  .then(data => {
        console.log(data.results)
        for(let i = 0; i < 3; i++){
          str += 	
          `<div class="row">
            <div class="col-12 col-sm-6 col-lg-8">.col-12 .col-sm-6 .col-lg-8</div>
            <p>kdjkdajjfkasd</p>
            <div class="col-6 col-lg-4">.col-6 .col-lg-4</div>
          </div>
          <div class="row">
            <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
            <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
            <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
          </div>`  
    }
    document.getElementById('resultados').innerHTML = str
  } )
}
