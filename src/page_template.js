const generateManager = (data) => {
    return` <div class="row row-cols-2 row-cols-md-3 g-5">
    <div class="col">
  <div id="manager" class="card" style="width: 18rem;">
    <div class="p-3 mb-2 bg-primary text-white"><div class="card-header">
    <p>${data.getname()}</p>
    <i class="fas fa-mug-hot"></i> ${data.getroles()}
    </div>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${data.getid()}</li>
      <li class="list-group-item"> Email: <a href="mailto:${data.getemail()}">${data.getemail()}</a></li>
      <li class="list-group-item"> Office number: ${data.getofficenumber()}</li>
    </ul>
    </div>
    </div>`
}
const generateEngineer = (data) => {
    return` <div class="row row-cols-2 row-cols-md-3 g-5">
    <div class="col">
  <div id="manager" class="card" style="width: 18rem;">
    <div class="p-3 mb-2 bg-primary text-white"><div class="card-header">
    <p>${data.getname()}</p>
    <i class="fas fa-mug-hot"></i> ${data.getroles()}
    </div>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${data.getid()}</li>
      <li class="list-group-item"> Email: <a href="mailto:${data.getemail()}">${data.getemail()}</a></li>
      <li class="list-group-item"> Github: ${data.getgithub()}</li>
    </ul>
    </div>
    </div>`
}
const generateIntern = (data) => {
    return` <div class="row row-cols-2 row-cols-md-3 g-5">
    <div class="col">
  <div id="manager" class="card" style="width: 18rem;">
    <div class="p-3 mb-2 bg-primary text-white"><div class="card-header">
    <p>${data.getname()}</p>
    <i class="fas fa-mug-hot"></i> ${data.getroles()}
    </div>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${data.getid()}</li>
      <li class="list-group-item"> Email: <a href="mailto:${data.getemail()}">${data.getemail()}</a></li>
      <li class="list-group-item"> School: ${data.getschool()}</li>
    </ul>
    </div>
    </div>`
}
//got help from a classmate on how to generate my cards/html files with bootstrap
const generateCards = (data) => {
    let html = "";
    data.forEach((element) => {
        console.log(element)
        if (element.getroles() === "Manager") {
            let string = generateManager(element);
            html += string;
        } else if (element.getroles() === "Engineer") {
            let string = generateEngineer(element);
            html += string;
        } else if (element.getroles() === "Intern") {
            let string = generateIntern(element);
            html += string;
        }
    });
    return html;
};

const generateHTML = (data) => {
    return`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <title>Team Profile Generator</title>
    </head>
    <body>
    <div class="jumbotron">
    <div class="p-3 mb-2 bg-danger text-white">
    <h1 class="display-4">My Team</h1>
    </div>
    </div>
    ${generateCards(data)}
    </div> 
   </body>
    </html>`;
};
  module.exports = generateHTML;
  
  