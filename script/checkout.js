let tbody = document.querySelector('tbody')
let cartDis = localStorage.getItem('purchasedItems')
let items = JSON.parse(localStorage.getItem('purchasedItems')) || []
let grandtotal = 0
// spinner
// tbody.innerHTML = `<div>Hehehehehehehehehe</div>`
// setTimeout(function() {
    
// },1000)
tbody.innerHTML = ``
items.forEach((item,index)=>{
    let subtotal = (item.price * item.quantity).toFixed(2)
    // console.log(grandtotal)
    tbody.innerHTML += `
                        <tr  class="table-light">
                            <td>${item.title}</td>
                            <td><span id="amount">${item.price}</span></td>
                            <td><input type="number" id="inp" value="${item.quantity}"></td>
                            <td><span id="smlTot">${subtotal}</span></td>
                            <td class="delete" data-id="${item.id}"> delete</td>
                        </tr>

                        `
               
})

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
        event.target.closest('tr').remove();
    })
})