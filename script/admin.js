let id = document.querySelector('#adminId')
let title = document.querySelector('#adminTitle')
let author = document.querySelector('#adminAuthor')
let category = document.querySelector('#adminGenre')
let img = document.querySelector('#adminImg')
let price = document.querySelector('#adminPrice')
let quantity = document.querySelector('#adminQuantity')
let description = document.querySelector('#adminDescription')
let btn = document.querySelector('#adminAdd')
let article = document.querySelector('article')
let tbody = document.querySelector('tbody')
let pro = localStorage.getItem('books')
let fromProducts = JSON.parse(localStorage.getItem('books')) || []
//displaying data from products page
fromProducts.forEach(book => {
    tbody.innerHTML +=   `
                             <tr>
                                <td>${book.id}</td>
                                <td>${book.title}</td>
                                <td>${book.author}</td>
                                <td>${book.category}</td>
                                <td><img src="${book.image}"></td>
                                <td>${book.price}</td>
                                <td>${book.quantity}</td>
                                
                                <td><button type="button" id="deleteProduct">-</button></td>
                                <td><button type="button" id="addToProduct">+</button></td>
                            </tr>
                        `
})

function createBooks(id,title,author,category,image,price,quantity,description){
    this.id = id
    this.title = title
    this.author = author
    this.category = category
    this.image = image
    this.price = price
    this.quantity = quantity
    this.description = description
}
//adding new data
btn.addEventListener('click',()=>{
    let adminBooks = new createBooks(id.value,title.value,author.value,category.value,img.value,price.value,quantity.value,description.value)
    tbody.innerHTML +=   `
                             <tr>
                                <td>${adminBooks.id}</td>
                                <td>${adminBooks.title}</td>
                                <td>${adminBooks.author}</td>
                                <td>${adminBooks.category}</td>
                                <td><img src="${adminBooks.image}"></td>
                                <td>${adminBooks.price}</td>
                                <td>${adminBooks.quantity}</td>
                                <td><button type="button" id="deleteProduct">-</button></td>
                                <td><button type="button" id="addToProduct">+</button></td>
                            </tr>
                        `
    fromProducts.push(adminBooks)
    localStorage.setItem("fromAdmin",JSON.stringify(fromProducts))
    console.log(fromProducts)
})

