
if (localStorage.getItem('products') === null) {
    localStorage.setItem('products', JSON.stringify([]))
}

buttons = document.querySelectorAll('.btn-addtocard')
for (let btn of buttons) {
    btn.addEventListener('click', function () {
        let id = btn.parentElement.id

        let src = btn.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild.src

        let name = btn.previousElementSibling.previousElementSibling.firstElementChild.innerHTML
        let price = btn.previousElementSibling.firstElementChild.innerHTML
        let count=1

        let product = {
            'ID': id,
            'Src': src,
            'Name': name,
            'Price': price,
            'Count': count


        }


debugger
        let products = JSON.parse(localStorage.getItem('products'))
        let length = products.length
        if (length == 0) {
            products.push(product)
            localStorage.setItem('products', JSON.stringify(products))
            
        }
        else{
            for(let pair of products){
                if(pair.ID===product.ID){
                    
                    pair.Count+=1
                    localStorage.setItem('products', JSON.stringify(products))
                }
                else{
                    products.push(product)
                    localStorage.setItem('products', JSON.stringify(products))

                }
            }
        }
       



        


    })
}


