// var input= document.createElement("input");
// input.id="list"
// document.getElementById("container").appendChild(input);


// //----
// var button = document.createElement("button");
// button.innerHTML="add";
// button.onclick= function () {
//     var a= document.getElementById("list").value
//     createTask(a)

// };
// document.getElementById("container").appendChild(button);

// //-------
// function createTask(task) {
// var li= document.createElement("li");
// li.innerHTML=task;
// document.getElementById("container").appendChild(li);
// }
var foodList = [
{foodName: "Pasta",  foodImageUrl: "https://www.freundin.de/sites/freundin.de/files/styles/og_image/public/images/2019-03/pasta-puttanesca-t.jpg?h=0e824653&itok=5bIxtC6V", foodDescription: "Made by love and it is the best pasta ever", foodPrice: "30"},
{foodName: "Pizza", foodImageUrl: "https://th.bing.com/th/id/R6ea4226f206faf5a82cf8169ebf4f050?rik=mhEU%2fnTIlBUYBQ&pid=ImgRaw", foodDescription: "Made by love and it is the best pizza ever", foodPrice: "27"},
{foodName: "Humborger", foodImageUrl: "https://th.bing.com/th/id/R18c4c8ef34d4e6c8885ea46d6bcdbe0b?rik=50xHjIizFyHhzw&pid=ImgRaw", foodDescription: "Made by love and it is the best humburger ever", foodPrice: "25"},
{foodName: "Panini", foodImageUrl: "https://th.bing.com/th/id/R8b7cd917412e2e21fc2bd3a0eae14a54?rik=uKXlReQ3im1q6A&riu=http%3a%2f%2fwww.macuisinesante.com%2fwp-content%2fuploads%2f2016%2f05%2fpanini_meridional.jpg&ehk=afhyBoL4uF8eDmMaBDM%2bjCxS%2f5FpxXSuK8KcU2T9o%2bc%3d&risl=&pid=ImgRaw", foodDescription: "Made by love and it is the best panini ever", foodPrice: "15"},
{foodName: "Ojja ", foodImageUrl: "https://th.bing.com/th/id/R97857ef7ebc99590970b122a2eebf573?rik=4Fk8eIYWoZC7xw&pid=ImgRaw", foodDescription: "Made by love and it is the ojja  ever", foodPrice: "30"},
{foodName: "French Toast", foodImageUrl: "https://cdn.copymethat.com/media/orig_baileys-french-toast-201712122229132121543rqrl.jpg", foodDescription: "Made by love and it is the best frensh toast ever", foodPrice: "21"},
{foodName: "coscous", foodImageUrl: "https://www.onamangepourvous.tn/wp-content/uploads/2019/09/3-41-1.jpg", foodDescription: "Made by love and it is the best coscous ever", foodPrice: "50"},
{foodName: "tacos", foodImageUrl: "https://d1ralsognjng37.cloudfront.net/cba3ae4a-7605-4016-8cf9-0ab36c651f39.jpeg", foodDescription: "Made by love and it is the best tacos ever", foodPrice: "20"},
{foodName: "makloub", foodImageUrl: "https://tounsicaferesto.com/wp-content/uploads/2020/11/MAKLOUB-TOUNSI.png", foodDescription: "Made by love and it is the best pasta ever", foodPrice: "20"},
];

function appand(oneItem , i ){
    var collection=document.createElement("DIV")
    collection.id="food" + i 
    $(collection).addClass("collection")
    var foodImage=document.createElement('img');
    foodImage.src=oneItem.foodImageUrl;
    foodImage.class = "food-image"
    collection.appendChild(foodImage)
    var foodName=document.createElement("H3")
    var foodNameText=document.createTextNode(oneItem.foodName)
    var btn=document.createElement("button")
    btn.innerHTML = "order"
    btn.id = "ll"
    btn.onclick = function(){
      hello(oneItem.foodName)
      window.location.replace(href="order.html");
    }
    foodName.appendChild(foodNameText)
    collection.appendChild(foodName)
    collection.appendChild(btn)
    document.getElementById("cont").appendChild(collection)
   
}


for(var i = 0 ; i < foodList.length ; i++ ){
  appand(foodList[i] , i )
}

function hello(food){
  console.log(food)
}


