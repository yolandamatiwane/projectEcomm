let article = document.querySelector('article')

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

let book_1 = new createBooks(1,'Three Little Pigs','Joseph Jacobs','Children Literature','https://yolandamatiwane.github.io/ecomImages/books/three-little-pigs.jpg',120.99,1,'"The Three Little Pigs" is a classic fairy tale about three sibling pigs who each build a house out of different materials—straw, sticks, and bricks—only to face the threat of a cunning wolf. It\'s a timeless story of resourcefulness, perseverance, and the importance of solid foundations.')
let book_2 = new createBooks(2,'Sulwe','Lupita Nyongo','Children Literature','https://yolandamatiwane.github.io/ecomImages/books/Sulwe-by-Lupita-Nyong%E2%80%99o.jpg',150.99,1,'"Sulwe" by Lupita Nyong\'o is a captivating children\'s book that follows the journey of a young girl named Sulwe who struggles with her self-esteem because of her darker skin tone. Through magical encounters and self-discovery, Sulwe learns to embrace her unique beauty and value. This heartfelt story celebrates diversity, self-acceptance, and the beauty found within every individual.') 
let book_3 = new createBooks(3,'It ends with Us','Colleen Hoover','Young Adult Romance','https://yolandamatiwane.github.io/ecomImages/books/27362503.jpg',345.99,1,'"It Ends with Us" is a powerful novel by Colleen Hoover that delves into the complexities of love, abuse, and self-discovery. The story follows Lily Bloom as she navigates a tumultuous relationship with a charismatic yet troubled man named Ryle Kincaid. As secrets unravel and past traumas resurface, Lily must confront difficult choices about her own happiness and well-being. This emotionally charged narrative explores themes of resilience, forgiveness, and the strength it takes to break cycles of abuse.')

let books = [book_1,book_2,book_3]

localStorage.setItem('books',JSON.stringify(books))
let purchasedItems = []
//shows default
function display(booksArray){
    booksArray.forEach(book=>{
    article.innerHTML+=`
                    <div class="card" id='cards'>
                    <img src='${book.image}'>
                    <div class="card-body">
                    ${book.price}
                    <br>
                    <button id="viewMore">View More</button><button id="purchase" value="${book.id}">ADD to Cart</button>
                    <div>

                    </div>


                 `
})}
display(books)
let searchBtn = document.querySelector('#searching')
let resetBtn = document.querySelector('#searchingReset')
let sortBtn = document.querySelector('#sorting')
let inp = document.querySelector('#inp')

resetBtn.addEventListener('click', ()=>{
    article.innerHTML = ``
    inp.value = ''
    display(books)
})
//shows filtered results
searchBtn.addEventListener('click',()=>{
    article.innerHTML = ``
    let search = books.filter(book=>{
        return book.title.toLowerCase().includes(inp.value.toLowerCase())
        
    })
    display(search)
})

//part1 of checkout
let purchasedBtn = document.querySelectorAll('#purchase')

function addToCheckout(id){
    let [item] = books.filter(object=> object.id === +id)
    purchasedItems.push(item)
    localStorage.setItem("purchasedItems",JSON.stringify(item))
}
purchasedBtn.forEach(button=>{
    button.addEventListener('click',(event)=>{
        addToCheckout(event.target.value)
    })
})

//sorts by category
sortBtn.addEventListener('click',()=>{
    article.innerHTML = ``
    books.sort(function(a,b){
        return a.price - b.price
    })
    display(books)
})