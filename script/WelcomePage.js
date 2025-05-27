function openNav() {
document.getElementById("mySidebar").style.width = "250px";
document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
document.getElementById("mySidebar").style.width = "0";
document.getElementById("main").style.marginLeft= "0";
}

var email="jdididaoud@gmail.com"
var password="1234"
localStorage.setItem("credentials",JSON.stringify([{email:email,password:password}]))


var credentials=JSON.parse(localStorage.getItem("credentials"))
//  credentials

console.log( credentials.email)
function Car(name,type,speedMax,power,acceleration,category,photo,price){
var instance = {};
instance.name=name
instance.type=type
instance.speedMax=speedMax
instance.power=power
instance.acceleration=acceleration
instance.category=category
instance.photo=photo
instance.price=price
return instance
}
var lamborghini=Car("S V J","Lamborghini","350","770","2.8","Sport","490,000")
var cars =[lamborghini]
var lamborghini=Car("uras","lamborghini","312","800","3.4","sport","370,000")
var cars=[lamborghini]
var maserati=Car("lavanti","maserati","280","580","3.7","suv","180,000")
var cars=[maserati]
var maserati=Car("grand torismo","maserati","320","761","2.7","sport","230,000")
var cars=[maserati]
var  mercedes=Car("G-class 6x6","mercedes","185","544","6.8","suv","1,800,000")
var cars=[mercedes]
var mercedes=Car("GT 63","mercedes","340","585","3.2","sport","420,000")
var cars=[mercedes]
var mercedes=Car("S63","mercedes","280","585","3.9","sidan","200,000")
var cars=[mercedes]
var toyota=Car("land-cruiser","toyota","210","415","5.8","suv","95,000")
var cars=[toyota]
var toyota=Car("supra","toyota","290","340","3.2","sport","70,000")
var cars=[toyota]


