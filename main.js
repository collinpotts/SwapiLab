
function buttonFunc(evt) {
    evt.preventDefault();

    axios
    .get("https://swapi.dev/api/planets/?search=Alderaan")
    .then((response) => {
        let {residents} = response.data.results[0];
       
         for(let i = 0; i < residents.length; i++) {
             axios
             .get(residents[i])
             .then((response) => {
                 document.getElementById("head").innerHTML +=
                 `<h2>${response.data.name}</h2>`;
             })
             .catch((err) => console.log(err));
         }
    })
    .catch((err) => console.log(err));
    
}


let buttonVar = document.getElementById('button');
buttonVar.addEventListener('click', buttonFunc);
