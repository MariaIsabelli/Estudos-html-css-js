const pokemons = [
    { nome: "Bulbasaur",
     img: "https://cdn.shopify.com/s/files/1/0277/5246/4523/products/001-bulbasaur_300x300.gif?v=1592226269"},
    { nome: "Charmander",
     img: "https://i.pinimg.com/originals/e1/d9/5e/e1d95e0de6426481f5e1bb5165e1bc3a.gif"},
    { nome: "Squirtle",
     img:  "https://cdn.shopify.com/s/files/1/0252/3362/1040/files/gif_carapuce_769eb3ac-b9a5-4977-aeab-924a1bba0448_480x480.gif?v=1586793890"},
    { nome: "Psyduck",
     img: "https://pa1.narvii.com/6202/0a701186c58b09efa557d24c6cfdbdbe38aa340c_hq.gif"},
    { nome: "Charizard",
     img: "https://i.pinimg.com/originals/13/57/33/135733b07291badc8cb3c083d4fd90b0.gif"},
    { nome: "Mewtwo",
     img: "https://i.imgur.com/Vsms1pe.gif"},
    { nome: "Arcanine",
     img: "https://64.media.tumblr.com/9e99a4fa799b026296428eb604cda709/tumblr_n7aga6SK3r1sfvh8co1_500.gif"},
    { nome: "Electivire",
     img:  "https://pa1.narvii.com/7524/2d474b2dce0d6f7e96bec8b81e3e0672619b022cr1-620-550_hq.gif"},
    { nome: "Cubone",
     img: "https://qph.fs.quoracdn.net/main-qimg-dcbd4b51fdec5dea212defda8c4df0ba"},
    { nome: "Entei",
     img: "https://professorlotus.com/Sprites/Entei.gif"},
    { nome: "Suicune",
     img: "https://www.shinyhunters.com/images/shiny/245.gif"},
    { nome: "Raikou",
     img: "https://professorlotus.com/Sprites/Raikou.gif"},
    { nome: "Lugia",
     img: "https://uploads.twitchalerts.com/000/408/833/795/Lugia1.gif"},
    { nome: "Articuno",
     img: "https://i.pinimg.com/originals/f3/3d/05/f33d05ca42e5d1934b120279e1a1c12b.gif"},
    { nome: "jigglypuff", 
     img: "https://professorlotus.com/Sprites/Jigglypuff.gif"},
    { nome: "Eevee", 
     img: "https://i.pinimg.com/originals/df/0d/91/df0d91530b05f97de7791ec6b619bf51.gif"},
    { nome: "Flareon", 
     img: "https://media.tenor.com/images/9ff76a630cf91098e8417ab15963c21a/tenor.gif"},
    { nome: "Dragonite", 
     img: "https://professorlotus.com/Sprites/Dragonite.gif"},]
  
  const enviar = document.getElementById('enviar')
  const refaz = document.getElementById('reload')
  const img = document.querySelector('img')
  
  var numero = 0
  
  function aleatorio(){
    numero = Math.floor(Math.random() * pokemons.length)
  
    img.setAttribute('src', pokemons[numero].img)
  }
  
  resetar()
  
  function resetar(){
    document.querySelector('span').innerHTML = " ";
    document.querySelector('input').value = ""
    document.getElementById('imgpokemon').className = null
    aleatorio()
  }
  
  enviar.onclick = () => {
    let resposta = document.querySelector('input').value
  
    if(resposta.length){
      if(resposta.toLowerCase() == pokemons[numero].nome.toLowerCase()){
        document.querySelector('span').innerHTML = "Parabéns! É o " + pokemons[numero].nome
        document.getElementById('imgpokemon').className = "acertou"
        setTimeout(() => { resetar(); }, 5000)
      }else{
        document.querySelector('span').innerHTML = "Você errou! É o " + pokemons[numero].nome
        document.getElementById('imgpokemon').className = "acertou"
        setTimeout(() => { resetar(); }, 5000)
      }
    }else{
      document.querySelector('span').innerHTML = "Coloque o nome!"
    }
  }
  
  refaz.onclick = resetar
  
  