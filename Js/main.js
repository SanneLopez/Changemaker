
//https://github.com/SanneLopez/Changemaker

const API_KEY = "48Kkjd6xUYBqonGhtepF58JaMjGv5hbk";

const searchForm = document.querySelector(".search");
const input = document.querySelector(".input");
const resultArticles = document.querySelector(".result");


searchForm.addEventListener("submit", (e) => {e.preventDefault();

  fetchData();

});

  async function fetchData() {
  const baseURL =`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`; 
  const response = await fetch(baseURL);
  const data = await response.json();

     console.log(data);

      data.results.map(article => {

      console.log(article.title);

      let a = document.createElement("a");
      a.setAttribute('href', article.url);
      a.innerHTML = article.title;

      let p = document.createElement("p");
      p.innerHTML = article.abstract;
  
      let p1 = document.createElement("p");
      p1.innerHTML = article.section;

      let p2 = document.createElement("p");
      p2.innerHTML = article.published_date;
  
      let img = document.createElement("img");
      img.setAttribute('src', article.multimedia[0].url);
  
      
  
     resultArticles.appendChild(img);
     resultArticles.appendChild(a);
     resultArticles.appendChild(p);
     resultArticles.appendChild(p1); 
     resultArticles.appendChild(p2); 
    
     
  
  })
  
}

  



  
 
  






