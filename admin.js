async function addPost(){

    let id = document.getElementById("id").value;
    
    id = parseInt(id);
    console.log(typeof(id));
    let title = document.getElementById("title").value;
    let price = document.getElementById("price").value;
    let image = document.getElementById("images").value;

    // let send_this_data ={
    //     id: id,
    //     title: title,
    //     author: author
    // }

    let send_this_data ={
        id,
        title,
        price,
        image
    }

    // make POST request using fetch
    //fetch(url, { })

    let res = await fetch(`http://localhost:3000/products`,{
        method:"POST",
        
        body: JSON.stringify(send_this_data),

        headers : {
            'Content-Type': 'application/json',
        },


    });
    let data = await res.json();
    console.log(data)
}


async function deletePost(){

    let id = document.getElementById("delete_id").value;
    

    let res = await fetch(`http://localhost:3000/products/${id}`,{

    method : "DELETE",
    headers : {
        'Content-Type': 'application/json',
    },

    });
    let data = await res.json();
    console.log("data:", data);

}

async function patchProduct(){
    let ids = document.getElementById("patch_id").value;
    let new_name = document.getElementById("new_title").value;
    let price = document.getElementById("new_price").value;
    let res = await fetch(`http://localhost:3000/products/${ids}`,{
        method:"PATCH",
        
        body: JSON.stringify({
            title: new_name,
            price: price,
        }),

        headers : {
            'Content-Type': 'application/json',
        },


    });
    let data = await res.json();
    console.log(data);

}
let container = document.getElementById("container");
async function getProducts(){
   try{
    let res = await fetch(`http://localhost:3000/products`);
    let data = await res.json();
    console.log(data);
    appendProducts(data)

   }catch(err){
    console.log(err)

   }
}
getProducts();

let appendProducts =(data)=>{
     console.log(data);
     container.innerHTML = null;
     data.forEach((el)=>{
        console.log(el);
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = el.image;
        let title = document.createElement("h4");
        title.innerText ="Car: "+ el.title;
        let price = document.createElement("p");
        price.innerText = "Price:"+" "+ el.price;
        div.append(img, title, price);
        container.append(div);


     })
}