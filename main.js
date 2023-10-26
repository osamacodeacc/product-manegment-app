let title = document.getElementById("title")
let price = document.getElementById("price")
let tax = document.getElementById("tax")
let ads = document.getElementById("ads")
let discount = document.getElementById("discount")
let total = document.getElementById("total")
let count = document.getElementById("count")
let category = document.getElementById("category")
let submit = document.getElementById("submit")

function getTotal() {
    if (price.value != "") {
        let result = (+price.value + +tax.value + +ads.value) - +discount.value
        total.innerHTML = result
        total.style.background = "rgb(226, 0, 0)"
    } else {
        total.innerHTML = ""
        total.style.background = "#3165a5"
    }
}
//creat product
let productdata
if (localStorage.prodct != null) {
    productdata = JSON.parse(localStorage.prodct)
} else {
    productdata = []
}

submit.onclick = function () {
    let newpro = {
        title: title.value,
        price: price.value,
        tax: tax.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
        category: category.value,
    }

    productdata.push(newpro)
    localStorage.setItem("prodct", JSON.stringify(productdata))
    cleardate()
showdata()
}

//

function cleardate() {
    title.value = "";
    price.value = "";
    tax.value = "";
    ads.value = "";
    discount.value = "";
    total.innerHTML = "";
    count.value = "";
    category.value = "";
}
// read
function showdata(){
    let tabels ='';
    for(let i=0;i<productdata.length;i++){
        tabels += `
        <tr>
                        <td>${i}</td>
                        <td>${productdata[i].title}</td>
                        <td>${productdata[i].price}</td>
                        <td>${productdata[i].tax}</td>
                        <td>${productdata[i].ads}</td>
                        <td>${productdata[i].discount}</td>
                        <td>${productdata[i].total}</td>
                        <td>${productdata[i].category}</td>
                        <td><button id="update">update</button></td>
                        <td><button id="delete" onclick = "deletedate(${i})">delete</button></td>
                    </tr>
        `
    }
    document.getElementById("tbodys").innerHTML=tabels;
}
showdata()

// delete

function deletedate(i){
    productdata.splice(i,1);
    localStorage.prodct=JSON.stringify(productdata);
    showdata()
}
