let tbody = document.querySelector('tbody')
let cartDis = localStorage.getItem('purchasedItems')
let items = JSON.parse(localStorage.getItem('purchasedItems')) || []
let tyBtn = document.querySelector('#submitPurchase')
let grandtotal = 0
// spinner
// tbody.innerHTML = `<div>Hehehehehehehehehe</div>`
// setTimeout(function() {
    
// },1000)
let total = document.querySelector('#ans')
tbody.innerHTML = ``
items.forEach(item=>{
    let subtotal = (item.price * item.quantity).toFixed(2)
    grandtotal += parseFloat(subtotal) 
    total.innerText = grandtotal
    
    console.log(grandtotal)
    tbody.innerHTML += `
                        <tr  class="table-light">
                            <td>${item.title}</td>
                            <td><span id="amount">${item.price}</span></td>
                            <td><input type="number" id="inp" value="${item.quantity}"></td>
                            <td><span id="smlTot">${subtotal}</span></td>
                            <td class="delete" data-id="${item.id}"> x</td>
                        </tr>

                        `
               
})
// updating totals

let inputs = document.querySelectorAll('#inp')
inputs.forEach(input=>{
    input.addEventListener('change',()=>{
        let grandtotal = 0
        inputs.forEach((input,i)=>{
            let quantity = parseInt(input.value)
            items[i].quantity = quantity
            let subTotal = (items[i].price*quantity).toFixed(2)
            document.querySelectorAll('#smlTot')[i].innerText = subTotal
            grandtotal +=parseFloat(subTotal)
        })
        total.innerText = grandtotal.toFixed(2)
        localStorage.setItem("purchasedItems",JSON.stringify(purchasedItems))
    })
})
//still need to update local storage
// remove from cart
let remove = document.querySelectorAll('.delete')

function removed(id) {
    let purchasedItems = JSON.parse(localStorage.getItem('purchasedItems')) || []
    purchasedItems = purchasedItems.filter(item => item.id !== +id)
    localStorage.setItem('purchasedItems', JSON.stringify(purchasedItems))
}

remove.forEach(btn => {
    btn.addEventListener('click', (event) => {
        removed(event.target.dataset.id)
        event.target.closest('tr').remove()
    })
})

// Thank You Message
tyBtn.addEventListener('click',()=>{
    alert('Thank You For Choosing Us <3')
})