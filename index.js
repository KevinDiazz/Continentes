//array con los nombres de los continentes, que sera recorrido para asignar un Div a cada uno
let continentes = ["Asia", "Americas", "Europe", "Oceania", "Africa"];
let divPrincipal= document.getElementsByClassName("continentes")

for (let i = 0; i < 6; i++) {
  let continentesDiv = document.createElement("div");
  continentesDiv.setAttribute("class", continentes[i]);
  divPrincipal[0].appendChild(continentesDiv);
  continentesDiv.innerHTML=("<h1>"+continentes[i] +"</h1>")

}


// llamada a la Api y creacion de elementos HTML
//cada continenteDiv, tiene un h1 y un div con la clase Pais y dentro de este un ul.
async function paises() {
  const res = await fetch("https://restcountries.com/v2/all");
  const data = await res.json();
  console.log(data);

  for (let i = 0; i < data.length; i++) {
    let paises = document.createElement("div");
     paises.setAttribute("class", "pais");
    let padre = document.getElementsByClassName(data[i].region);
    if(padre[0]){  
    padre[0].appendChild(paises);
    }
    let infoCapital=document.createElement("li")   // 
    let infoPais=document.createElement("li")
    let info=document.createElement("ul")
    let img = document.createElement("img");
   

    img.setAttribute("src", data[i].flags.png);
    info.appendChild(infoPais) 
    info.appendChild(infoCapital) 
    paises.appendChild(img)
    paises.appendChild(info)
    
    infoPais.innerHTML = ("<b>País</b>:"+data[i].name);
    infoCapital.innerHTML = ("<b>Capital</b>:"+data[i].capital);
  }
}
let eliminado= document.getElementsByClassName("undefined")
eliminado[0].remove()

paises();
