let products = [
  {
    name: "Headphones",
    price: "₹7999",
    desc: "Noise cancelling",
    img: "https://fastly.picsum.photos/id/172/200/200.jpg?hmac=TU8G-y4_SgGNs4TuPhPvRQLvw2TUccb3fVgi-hnIsGE",
  },
  {
    name: "Smartwatch",
    price: "₹12999",
    desc: "Fitness tracking",
    img: "https://fastly.picsum.photos/id/172/200/200.jpg?hmac=TU8G-y4_SgGNs4TuPhPvRQLvw2TUccb3fVgi-hnIsGE",
  },
  {
    name: "Mouse",
    price: "₹2499",
    desc: "Gaming mouse",
    img: "https://fastly.picsum.photos/id/172/200/200.jpg?hmac=TU8G-y4_SgGNs4TuPhPvRQLvw2TUccb3fVgi-hnIsGE",
  },
  {
    name: "Laptop Stand",
    price: "₹1999",
    desc: "Adjustable stand",
    img: "https://fastly.picsum.photos/id/172/200/200.jpg?hmac=TU8G-y4_SgGNs4TuPhPvRQLvw2TUccb3fVgi-hnIsGE",
  },
  {
    name: "Keyboard",
    price: "₹2999",
    desc: "Mechanical keyboard",
    img: "https://fastly.picsum.photos/id/172/200/200.jpg?hmac=TU8G-y4_SgGNs4TuPhPvRQLvw2TUccb3fVgi-hnIsGE",    
  },
  {
    name: "Monitor",
    price: "₹9999",
    desc: "24 inch monitor",
    img: "https://fastly.picsum.photos/id/172/200/200.jpg?hmac=TU8G-y4_SgGNs4TuPhPvRQLvw2TUccb3fVgi-hnIsGE",
  },
  {
    name: "Speaker",
    price: "₹1999",
    desc: "Bluetooth speaker",
    img: "https://fastly.picsum.photos/id/172/200/200.jpg?hmac=TU8G-y4_SgGNs4TuPhPvRQLvw2TUccb3fVgi-hnIsGE",
  },
  {
    name: "Camera",
    price: "₹45999",
    desc: "DSLR camera",
    img: "https://fastly.picsum.photos/id/172/200/200.jpg?hmac=TU8G-y4_SgGNs4TuPhPvRQLvw2TUccb3fVgi-hnIsGE",
  },
  {
    name: "Phone",
    price: "₹15999",
    desc: "Smartphone",
    img: "https://fastly.picsum.photos/id/172/200/200.jpg?hmac=TU8G-y4_SgGNs4TuPhPvRQLvw2TUccb3fVgi-hnIsGE",
  },
  {
    name: "Tablet",
    price: "₹20999",
    desc: "Android tablet",
    img: "https://fastly.picsum.photos/id/172/200/200.jpg?hmac=TU8G-y4_SgGNs4TuPhPvRQLvw2TUccb3fVgi-hnIsGE",
  },
  {
    name: "Printer",
    price: "₹8999",
    desc: "Wireless printer",
    img: "https://fastly.picsum.photos/id/172/200/200.jpg?hmac=TU8G-y4_SgGNs4TuPhPvRQLvw2TUccb3fVgi-hnIsGE",
  },
  {
    name: "External Hard Drive",
    price: "₹4999",
    desc: "1TB storage",
    img: "https://fastly.picsum.photos/id/172/200/200.jpg?hmac=TU8G-y4_SgGNs4TuPhPvRQLvw2TUccb3fVgi-hnIsGE",
  },
  {
    name: "Webcam",
    price: "₹2999",
    desc: "1080p webcam",
    img: "https://fastly.picsum.photos/id/172/200/200.jpg?hmac=TU8G-y4_SgGNs4TuPhPvRQLvw2TUccb3fVgi-hnIsGE",
  },
  {
    name: "Microphone",
    price: "₹3999",
    desc: "USB condenser microphone",
    img: "https://fastly.picsum.photos/id/172/200/200.jpg?hmac=TU8G-y4_SgGNs4TuPhPvRQLvw2TUccb3fVgi-hnIsGE",
  },
  {
    name: "Gaming Chair",
    price: "₹14999",
    desc: "Ergonomic gaming chair",
    img: "https://fastly.picsum.photos/id/172/200/200.jpg?hmac=TU8G-y4_SgGNs4TuPhPvRQLvw2TUccb3fVgi-hnIsGE",
  },
];

let page = 0;
let limit = 5;

function displayProducts(){
  let table = document.getElementById("productTable");

  //reset table:
  table.innerHTML = `
    <tr>
      <th>Image</th>
      <th>Name</th>
      <th>Description</th>
      <th>Price</th>
    </tr>
  `;

  let start = page * limit;
  let end = start + limit;
  for(let i= start;i<end && i< products.length;i++){
    let p = products[i];
    let row = `
    <tr>
      <td> <img src="${p.img}"> </td>
      <td> ${p.name} </td>
      <td> ${p.price} </td>
      <td> ${p.desc} </td>
    </tr>
    `;
    table.innerHTML += row;
  }
}

function nextPage(){
  if((page+1)* limit < products.length){
    page++;
    displayProducts();
  }
}
function prevPage(){
  if(page > 0){
    page--;
    displayProducts();
  }
}

displayProducts();