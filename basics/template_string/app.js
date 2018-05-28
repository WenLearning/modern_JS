const product1 = 'Pizza';
const price1 = 30;

const product2 = 'Hamburger';
const price2 = 40;

// old method
let html;

html = '<ul>' +
       '<li>Item: ' + product1 + '</li>' +
       '<ul>'
let app = document.querySelector('div');
app.innerHTML = html;

// new methods
html = `
  <ul>
    <li>Item: ${product1}</li>
  </ul>
`;

console.log(html);
