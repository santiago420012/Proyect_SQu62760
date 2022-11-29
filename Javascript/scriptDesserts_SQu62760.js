class Prices
{
    constructor (Dessert1,Dessert2,Dessert3,Dessert4,Dessert5,
        Order1,Order2,Order3,Order4,Order5)
    {
        this.option1= Dessert1;
        this.option2= Dessert2;
        this.option3= Dessert3;
        this.option4= Dessert4;
        this.option5= Dessert5;

        this.orderCount1 = Order1;
        this.orderCount2 = Order2;
        this.orderCount3 = Order3;
        this.orderCount4 = Order4;
        this.orderCount5 = Order5;
    }
    OrderPrices(){
        return "Your order is: " 
        +"Alfajor: "+this.orderCount1+ " unit/s "+ "price per unit: "+ this.option1+"$ <br>"+
        "Donuts: "+this.orderCount2+ " unit/s " + "price per unit: "+ this.option2 + "$ <br>"+
        "Parfait: "+this.orderCount3 + " unit/s " + "price per unit: "+ this.option3 + "$ <br>"+
        "Hojaldre: "+this.orderCount4+ " unit/s " + "price per unit: "+ this.option4+ "$ <br>"+
        "Cupcake: "+this.orderCount5+ " unit/s " + "price per unit: "+  this.option5+ "$";
    }
    
}
let orderNum = document.getElementsByName("orderNum")

window.addEventListener("DOMContentLoaded", function(){ 
    document.getElementById("form").addEventListener
    ("click",ShowInput)
   for(i=0;i<orderNum.length;i++)
   {orderNum[i].addEventListener('change',AddNumber)}

    
    });


function ShowInput()
{

    let checkboxes =    document.getElementsByName("checks");
    
    checkboxes.forEach
    (        checkbox =>
        {
            if(checkbox.checked== true)
            {
                let OrderNum = (checkbox.parentElement.childNodes[13]);
                OrderNum.style.visibility= "visible";

                
            }
            else
            {
                checkbox.checked= false;
            }
            
        }
            
    
    )
}    
var data=[];
var totalP=0;
function AddNumber(){

let total = 0; 
    orderNum.forEach(
        Numbers=>
        {
            NumbersItems= Numbers.value;
            if(NumbersItems> 0)
            {
            
            let price = (Numbers.nextSibling.parentElement.childNodes[11].innerText);
            let priceFloat = parseFloat(price.slice(0,price.length-1))
            
            let priceList = new Prices();
            priceList.orderCount1 = form.elements["productcount1"].value;
            priceList.orderCount2 = form.elements["productcount2"].value;
            priceList.orderCount3 = form.elements["productcount3"].value;
            priceList.orderCount4 = form.elements["productcount4"].value;
            priceList.orderCount5 = form.elements["productcount5"].value;
            if(priceList.orderCount=="")
            {
                priceList.orderCount= "0"; 
            }

            priceList.option1 = 20;
            priceList.option2 = 18;
            priceList.option3 = 6;
            priceList.option4 = 7;
            priceList.option5 = 20;
            let FinalPrice= NumbersItems*priceFloat;
            data.push(priceList);

            totalP= total+ FinalPrice;
            console.log(total);
            console.log(data);
            }
            
            
            
        }
    )
    
    }

function PrintOrder()
{
   event.preventDefault();

   var target = document.getElementById("ShowCart");

    target.innerHTML = "<h2> Your order is:</h2><br>";
    
    target.innerHTML += "<p>"+data[data.length-1].OrderPrices()+ "</p>"
    

    target.innerHTML+= "<p><strong> The Total price is: </strong></p>"+totalP+ " $";


}