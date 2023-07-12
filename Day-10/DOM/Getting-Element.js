{/* <html lang="en">
  <head>
    <title>Document Object Model</title>
  </head>
  <body>
    <h1 class="title" id="first-title">
      First Title
    </h1>
    <h1 class="title" id="second-title">
      Second Title
    </h1>
    <h1 class="title" id="third-title">
      Third Title
    </h1>
    <h1></h1>
  </body>
</html>; */}

// Getting elements by tag name
const allTitles = document.getElementsByTagName("h1");
console.log(allTitles); 

// Getting elements by class name
const allTitles1 = document.getElementsByClassName('title')
console.log(allTitles1)

// Getting an element by id
let firstTitle = document.getElementById('first-title')
console.log(firstTitle)

//Getting elements by using querySelector methods
let firstTitle1 = document.querySelector('h1') 
let firstTitle2 = document.querySelector('#first-title') 
let firstTitle3 = document.querySelector('.title') 