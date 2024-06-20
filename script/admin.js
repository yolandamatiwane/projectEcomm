let id = document.querySelector('#adminId')
let title = document.querySelector('#adminTitle')
let author = document.querySelector('#adminAuthor')
let category = document.querySelector('#adminGenre')
let img = document.querySelector('#adminImg')
let price = document.querySelector('#adminPrice')
let quantity = document.querySelector('#adminQuantity')
let description = document.querySelector('#adminDescription')
let btn = document.querySelector('#adminAdd')
let tbody = document.querySelector('tbody')
let pro = localStorage.getItem('books')
let fromProducts = JSON.parse(localStorage.getItem('books')) || []

//displaying data from products page
function display(booksArray){
    try{
        tbody.innerHTML = ``
        booksArray.forEach(book => {
            tbody.innerHTML +=   `
                                    <tr class="table-dark">
                                        <td>${book.id}</td>
                                        <td>${book.title}</td>
                                        <td>${book.author}</td>
                                        <td>${book.category}</td>
                                        <td><img src="${book.image}" class="img-fluid"></td>
                                        <td>${book.price}</td>
                                        <td>${book.quantity}</td>
                                        <td><button type="button" class="btn btn-outline-light" data-id="${book.id}" id="deleteProduct">remove</button></td>
        
                                    </tr>
                                `
        })
    } catch(error){
        tbody.innerHTML = 'Error displaying data'
    }

}
display(fromProducts)

function createBooks(id,title,author,category,image,price,quantity,description){
    this.id = +id
    this.title = title
    this.author = author
    this.category = category
    this.image = image
    this.price = +price
    this.quantity = +quantity
    this.description = description
}

//updating data A.K.A adding items to Products
btn.addEventListener('click',()=>{
    try {
        let adminBooks = new createBooks(id.value,title.value,author.value,category.value,img.value,price.value,quantity.value,description.value)
        tbody.innerHTML +=   `
                                <tr class="table-dark">
                                    <td>${adminBooks.id}</td>
                                    <td>${adminBooks.title}</td>
                                    <td>${adminBooks.author}</td>
                                    <td>${adminBooks.category}</td>
                                    <td><img src="${adminBooks.image}"></td>
                                    <td>${adminBooks.price}</td>
                                    <td>${adminBooks.quantity}</td>
                                    <td><button type="button" class="btn btn-outline-light" id="deleteProduct">remove</button></td>
                                </tr>
                            `
        fromProducts.push(adminBooks)
        localStorage.setItem("books",JSON.stringify(fromProducts))
        console.log(fromProducts)
    } catch(error){
        tbody.innerHTML = 'Error adding new book'
    }
})



//removing Items in Products

let removeItem = document.querySelectorAll('#deleteProduct')
function removed(id) {
        try{
            let adminProducts = JSON.parse(localStorage.getItem('books')) || []
            adminProducts = adminProducts.filter(item => item.id !== +id)
            localStorage.setItem('books', JSON.stringify(adminProducts))
            fromProducts = JSON.parse(localStorage.getItem('books'))
            display(fromProducts)
        }catch(error){
            tbody.innerHTML='Error with removing item'}
}

removeItem.forEach(btn => {
    btn.addEventListener('click', (event) => {
        removed(event.target.dataset.id)
        event.target.closest('tr').remove()
    })
})

// Sort by Price
let adminSorting = document.querySelector('#adminSort')
adminSorting.addEventListener('click',()=>{
    try {
        let bookSorting = fromProducts.sort(function(a,b){
        return a.price - b.price
        })
        display(bookSorting)
    } catch(error){
        tbody.innerHTML = `<div>Error sorting books by price</div>`
    }
})