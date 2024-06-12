let tbody = document.querySelector('tbody')
let cartDis = localStorage.getItem('purchasedItems')
let items = JSON.parse(localStorage.getItem('purchasedItems')) || []

tbody.innerHTML = `<div>Hehehehehehehehehe</div>`
// setTimeout(function() {
// },1000)

tbody.innerHTML = ``
    items.forEach(item=>{
    tbody.innerHTML += `
                    <tr>
                        <td>${item.id}</td>
                        <td>${item.title}</td>
                        <td>${item.price}</td>
                        <td>${item.quantity}</td>
                        <td> </td>
                    </tr>

                `
               
})
