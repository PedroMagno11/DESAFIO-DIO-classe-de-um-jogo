class Heroi{
  #name;
  #age;
  #type;
  constructor(name,age,type){
    this.#name=name;
    this.#age=age;
    this.#type=type;
  }

  getName(){
    return this.#name;
  }

  setName(name){
    this.#name=name;
  }

  getAge(){
    return this.#age;
  }

  setIdade(age){
    this.#age=age;
  }

  getType(){
    return this.#type;
  }

  setType(type){
    return this.#type=type;
  }
}

const states = {
  views:{
    heroName: document.getElementById("heroName"),
    heroAge: document.getElementById("heroAge"),
    heroType: document.getElementById("heroType"),
    resultDiv: document.getElementById("result"),
    btnAtacar: document.getElementById("btnAtacar"),
  }
}


function heroFactory(){
  const name = states.views.heroName.value;
  const age = states.views.heroAge.value;
  const type = states.views.heroType.value;
  
  const hero = new Heroi(name, age, type);
  return hero
}

function atacar(hero) {
    switch (hero.getType()) {
      case ('mago'):
        ataque = 'magia';
        return ataque;
      case 'guerreiro':
        ataque = 'espada';
        return ataque;
      case 'monge':
        ataque = 'artes marciais';
        return ataque;
      case 'ninja':
        ataque = 'shuriken';
        return ataque;
      default:
        ataque = 'ataque desconhecido';
        return ataque;
    }
  }
  
function handleClick(){
  const hero = heroFactory();
  const ataque = atacar(hero);
  states.views.resultDiv.innerHTML=`<p>O ${hero.getType()} ${hero.getName()} ${hero.getAge()>0? "(" + hero.getAge() +  "anos)":""} atacou usando ${ataque}</p>`;
}

states.views.btnAtacar.addEventListener("click", handleClick);

