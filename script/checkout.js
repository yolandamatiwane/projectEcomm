let tbody = document.querySelector('tbody')
let cartDis = localStorage.getItem('purchasedItems')
let items = JSON.parse(localStorage.getItem('purchasedItems')) || []
// spinner
// tbody.innerHTML = `<div>Hehehehehehehehehe</div>`
// setTimeout(function() {
    
// },1000)
tbody.innerHTML = ``
    items.forEach(item=>{
    tbody.innerHTML += `
                    <tr  class="table-light">
                        <td>${item.title}</td>
                        <td><span id="amount">${item.price}</span></td>
                        <td><input type="number" id="inp" value="${item.quantity}"></td>
                        <td id="smlTot"> </td>
                    </tr>

                `
               
})

// calculation
let inp = document.querySelectorAll('#inp')

inp.forEach((input,index)=>{
    input.addEventListener('input',()=>{
        subtotal(index)
        calculateTotal()
    })
})
// Function to update subtotal for a given item index
function updateSubtotal(index) {
    let quantity = parseInt(inp1[index].value);
    let price = parseFloat(items[index].price);
    let subtotal = quantity * price;
    smTot[index].textContent = subtotal.toFixed(2);
}

// Function to calculate total
function calculateTotal() {
    let subtotalArray = Array.from(smTot).map(td => parseFloat(td.textContent));
    let totalPrice = subtotalArray.reduce((acc, val) => acc + val, 0);
    total.textContent = totalPrice.toFixed(2);
}
