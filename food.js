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
{foodName: "Pasta", foodImageUrl: "https://www.freundin.de/sites/freundin.de/files/styles/og_image/public/images/2019-03/pasta-puttanesca-t.jpg?h=0e824653&itok=5bIxtC6V", foodDescription: "Made by love and it is the best pasta ever", foodPrice: "30"},
{foodName: "Pizza", foodImageUrl: "https://th.bing.com/th/id/R6ea4226f206faf5a82cf8169ebf4f050?rik=mhEU%2fnTIlBUYBQ&pid=ImgRaw", foodDescription: "Made by love and it is the best pizza ever", foodPrice: "27"},
{foodName: "Humborger", foodImageUrl: "https://th.bing.com/th/id/R18c4c8ef34d4e6c8885ea46d6bcdbe0b?rik=50xHjIizFyHhzw&pid=ImgRaw", foodDescription: "Made by love and it is the best humburger ever", foodPrice: "25"},
{foodName: "Panini", foodImageUrl: "https://www.freundin.de/sites/freundin.de/files/styles/og_image/public/images/2019-03/pasta-puttanesca-t.jpg?h=0e824653&itok=5bIxtC6V", foodDescription: "Made by love and it is the best panini ever", foodPrice: "15"},
{foodName: "Ojja espagnol", foodImageUrl: "https://www.freundin.de/sites/freundin.de/files/styles/og_image/public/images/2019-03/pasta-puttanesca-t.jpg?h=0e824653&itok=5bIxtC6V", foodDescription: "Made by love and it is the ojja espangol pasta ever", foodPrice: "30"},
{foodName: "French Toast", foodImageUrl: "https://www.freundin.de/sites/freundin.de/files/styles/og_image/public/images/2019-03/pasta-puttanesca-t.jpg?h=0e824653&itok=5bIxtC6V", foodDescription: "Made by love and it is the best frensh toast ever", foodPrice: "21"},
{foodName: "coscous", foodImageUrl: "https://www.freundin.de/sites/freundin.de/files/styles/og_image/public/images/2019-03/pasta-puttanesca-t.jpg?h=0e824653&itok=5bIxtC6V", foodDescription: "Made by love and it is the best coscous ever", foodPrice: "50"},
{foodName: "tacos", foodImageUrl: "https://www.freundin.de/sites/freundin.de/files/styles/og_image/public/images/2019-03/pasta-puttanesca-t.jpg?h=0e824653&itok=5bIxtC6V", foodDescription: "Made by love and it is the best tacos ever", foodPrice: "20"},
{foodName: "makloub", foodImageUrl: "https://www.freundin.de/sites/freundin.de/files/styles/og_image/public/images/2019-03/pasta-puttanesca-t.jpg?h=0e824653&itok=5bIxtC6V", foodDescription: "Made by love and it is the best pasta ever", foodPrice: "20"},
];

for(var i=0 ; i<foodList.length ; i++) {
    var collection=document.createElement("DIV")
    collection.id="food"+i
    $(collection).addClass("collection")
    var foodImage=document.createElement('img');
    foodImage.src=foodList[i].foodImageUrl;
    foodImage.class = "food-image"
    collection.appendChild(foodImage)
    var foodName=document.createElement("H3")
    var foodNameText=document.createTextNode(foodList[i].foodName)
    
    foodName.appendChild(foodNameText)
    collection.appendChild(foodName)
    document.getElementById("cont").appendChild(collection)

    
}

