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
let book_3 = new createBooks(3,'Queens of Geek','Jen Wilde','Young Adult','https://yolandamatiwane.github.io/ecomImages/books/28245707.jpg',300,1,'The story follows three friends as they attend SupaCon, a fictional version of a pop culture convention. The narrative explores themes of friendship, romance, and identity, with a focus on LGBTQ+ representation and fandom culture. It celebrates diversity and empowerment, making it a beloved read among fans of contemporary YA literature.')
let book_4 = new createBooks(4,'Red, White & Royal Blue','Casey McQuiston','Young Adult','https://yolandamatiwane.github.io/ecomImages/books/41150487.jpg',350.99,1,'It falls within the romance and LGBTQ+ fiction genres. The story revolves around the unlikely romance between Alex Claremont-Diaz, the First Son of the United States, and Prince Henry of Wales. Set in an alternate reality where a woman is President of the United States, the novel explores themes of love, politics, and identity. It\'s a charming and witty tale that captivates readers with its humor, heartwarming moments, and compelling characters.')
let book_5 = new createBooks(5,'Simone Breaks all the Rules','Debbie Rigaud','Young Adult','https://yolandamatiwane.github.io/ecomImages/books/53200402.jpg',250,1,'The story follows sixteen-year-old Simone Thibodeaux, who decides to break free from her strict Haitian immigrant parents\' rules by pursuing a secret relationship with a charming and rebellious classmate named Miles. As Simone navigates the complexities of family expectations, cultural identity, and teenage romance, she learns valuable lessons about love, independence, and staying true to herself. The novel explores themes of self-discovery, cultural heritage, and the courage to challenge societal norms.')
let book_6 = new createBooks(6,'Clifford The Big Red Dog','Norman Bridwell','Children Literature','https://yolandamatiwane.github.io/ecomImages/books/858719.jpg',100,1,'he series follows the adventures of a giant red dog named Clifford and his owner, Emily Elizabeth. Clifford\'s enormous size leads to humorous and heartwarming situations as he interacts with the world around him, teaching young readers lessons about friendship, kindness, and acceptance. The books are beloved for their colorful illustrations and simple yet engaging storytelling, making them a timeless favorite among children and parents alike.')

let books = JSON.parse(localStorage.getItem('books'))||[book_1,book_2,book_3,book_4,book_5,book_6]

localStorage.setItem('books',JSON.stringify(books))

//shows default

function display(booksArray){
    article.innerHTML = ``
    if(booksArray.length === 0){
        article.innerHTML = `<p> Sorry! Item was not found. </p>`
    }else{
        booksArray.forEach(book=>{
        article.innerHTML+=`
                        <div class="card" id='cards'>
                        <img class="card-img-top" src='${book.image}'>
                        <div class="card-body">
                        <h6 class="card-title">${book.title}</h6>
                        ${book.price}
                        <br>
                        <button type="button" class="btn btn-outline-pink" id="purchase" value="${book.id}">ADD to Cart</button>
                        <!-- Button trigger modal -->
                        <button type="button" class="btn btn-outline-pink" id="viewMore" data-bs-toggle="modal" data-bs-target="#staticBackdrop${book.id}">
                        View More
                        </button>

                        <!-- Modal -->
                        <div class="modal fade" id="staticBackdrop${book.id}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="staticBackdropLabel"> Product Description</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="card">
                                <img src="${book.image}"
                                <div class="card-body">
                                <p class="card-text">${book.description}</p>
                                </div>
                                </div>
                            </div>
                            
                            </div>
                        </div>
                        </div>
                        
    
    
                     `
    })}

}
display(books)
let searchBtn = document.querySelector('#searching')
let resetBtn = document.querySelector('#searchingReset')

let inp = document.querySelector('#inp')
//resets page
resetBtn.addEventListener('click', ()=>{
    article.innerHTML = ``
    inp.value = ''
    display(books)
})
//shows filtered results using search button
searchBtn.addEventListener('click',()=>{
    article.innerHTML = ``
    let search = books.filter(book=>{
        return book.title.toLowerCase().includes(inp.value.toLowerCase())
        
    })
    display(search)
})

//part1 of checkout
let purchasedBtn = document.querySelectorAll('#purchase')
let purchasedItems =JSON.parse(localStorage.getItem('purchasedItems')) ||[]
function addToCheckout(id){
   let existItems = purchasedItems.findIndex(item=> item.id ===+id)
    if(existItems!==-1){
        purchasedItems[existItems].quantity++
    }else{
        let item = books.find(object=> object.id === +id)
        if(item){
            item.quantity = 1
            purchasedItems.push(item)
        }
    }
    console.log(purchasedItems)
}
purchasedBtn.forEach(button=>{
    button.addEventListener('click',(event)=>{
        addToCheckout(event.target.value)
        localStorage.setItem("purchasedItems",JSON.stringify(purchasedItems))
    })
    
})

//filter by category

let selected = document.querySelector('#dropdown')
selected.addEventListener('change',()=>{
    let val = selected.value
    if(val == 'none'){
        display(books)
        return
    }
    console.log(val);
    let sort = books.filter(book=>{
        return book.category.includes(val)
        
    })
    display(sort)

})

// sort by price

let sorting = document.querySelector('#sorting')
sorting.addEventListener('click',()=>{
    let sorted = books.sort(function(a,b){
        return a.price - b.price
    })
    display(sorted)
})

// still need to add a spinner for books=[] and sort by price