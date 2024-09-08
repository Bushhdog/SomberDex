
function pesquisar(){

    console.log('pokemons');

}

const card = document.querySelector('.block');
container.classList.add('cardcenter');


let section = document.getElementById("search-res");

for(let dado of dados){

    section.innerHTML += `

    <div class="pokedesc" id="Umbreon">
                <h1 class="poketitle">${dado.titulo}:</h1>
                <h2>${dado.subtitulo}</h2>
                <p>${dado.descricao}</p>
                <img src="${dado.imgurl}" alt="Imagem do Umbreon, um pokémon de tipo sombrio" title="onbreiom">
            </div>

`
};




