const cardTemplate = function (name, url) {
  return `<div class="card">
              <img id="flag-image" src="${url}" alt="flag" />
              <h1 class="center">${name}</h1>
            </div>`;
};

const countriesNode = document.getElementById("countries");

fetch('https://restcountries.com/v3.1/all')
  .then(res => res.json()) 
  .then(list => {

    let one = ''
    for(i = 0; i< list.length; i++){
      
      one += cardTemplate(list[i].name.official, list[i].flags.png)
  
    }
    countriesNode.innerHTML = one;
  
  });
  


  
   