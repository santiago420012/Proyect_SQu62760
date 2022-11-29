// if one of the images of cakes is pressed then select the corresponding checkboxes related
// sum the price of eaxh one and print them at the bottom
var finalList = ""
function Check1()
{
    let inputS = document.getElementsByClassName("Sauces");
    let inputT = document.getElementsByClassName("Toppings");
    let inputD = document.getElementsByClassName("dough");
    let inputP = document.getElementsByClassName("presentation");
    

    for (i = 0; i < inputS.length; i++)
	inputS[i].checked = false ;
    
    for (i = 0; i < inputT.length; i++)
	inputT[i].checked = false ;
    
    for (i = 0; i < inputD.length; i++)
	inputD[i].checked = false ;
    
    for (i = 0; i < inputP.length; i++)
	inputP[i].checked = false ;
    

    document.getElementById("strawberrySauce").checked = true;
    document.getElementById("chantilli").checked= true;
    document.getElementById("berriesMix").checked= true;
    document.getElementById("vainillaFit").checked= true;
    document.getElementById("1Layer").checked=true;    
    
}

function Check2()
{
    let inputS = document.getElementsByClassName("Sauces");
    let inputT = document.getElementsByClassName("Toppings");
    let inputD = document.getElementsByClassName("dough");
    let inputP = document.getElementsByClassName("presentation");
    

    for (i = 0; i < inputS.length; i++)
	inputS[i].checked = false ;
    
    for (i = 0; i < inputT.length; i++)
	inputT[i].checked = false ;
    
    for (i = 0; i < inputD.length; i++)
	inputD[i].checked = false ;
    
    for (i = 0; i < inputP.length; i++)
	inputP[i].checked = false ;


    document.getElementById("2Layers").checked=true;
    document.getElementById("tripleMilk").checked=true;
    document.getElementById("specialDesign").checked=true;
    document.getElementById("appleCrumble").checked=true;
    document.getElementById("berriesMix").checked=true;
    document.getElementById("vainillaCreme").checked=true;
    document.getElementById("dulceDeLeche").checked= true;
}

function Check3()

{
    let inputS = document.getElementsByClassName("Sauces");
    let inputT = document.getElementsByClassName("Toppings");
    let inputD = document.getElementsByClassName("dough");
    let inputP = document.getElementsByClassName("presentation");
    

    for (i = 0; i < inputS.length; i++)
	inputS[i].checked = false ;
    
    for (i = 0; i < inputT.length; i++)
	inputT[i].checked = false ;
    
    for (i = 0; i < inputD.length; i++)
	inputD[i].checked = false ;
    
    for (i = 0; i < inputP.length; i++)
	inputP[i].checked = false ;
    document.getElementById("1Layer").checked=true;
    document.getElementById("redVelvet").checked= true;
    document.getElementById("merengon").checked= true;
    document.getElementById("vainillaCreme").checked= true;
    
}
function Check4()
{
    let inputS = document.getElementsByClassName("Sauces");
    let inputT = document.getElementsByClassName("Toppings");
    let inputD = document.getElementsByClassName("dough");
    let inputP = document.getElementsByClassName("presentation");
    

    for (i = 0; i < inputS.length; i++)
	inputS[i].checked = false ;
    
    for (i = 0; i < inputT.length; i++)
	inputT[i].checked = false ;
    
    for (i = 0; i < inputD.length; i++)
	inputD[i].checked = false ;
    
    for (i = 0; i < inputP.length; i++)
	inputP[i].checked = false ;
    document.getElementById("3Layers").checked=true;
    document.getElementById("specialBella").checked=true;
    document.getElementById("slicedAlmonds").checked=true;
    document.getElementById("smurfMagic").checked=true;
}
function Check5()
{
    let inputS = document.getElementsByClassName("Sauces");
    let inputT = document.getElementsByClassName("Toppings");
    let inputD = document.getElementsByClassName("dough");
    let inputP = document.getElementsByClassName("presentation");
    

    for (i = 0; i < inputS.length; i++)
	inputS[i].checked = false ;
    
    for (i = 0; i < inputT.length; i++)
	inputT[i].checked = false ;
    
    for (i = 0; i < inputD.length; i++)
	inputD[i].checked = false ;
    
    for (i = 0; i < inputP.length; i++)
	inputP[i].checked = false ;
    document.getElementById("1Layer").checked=true;
    document.getElementById("vainillaCreme").checked=true;
    document.getElementById("vainillaFit").checked=true;
}


function PrintOrder(event)
{
    event.preventDefault(); // prevenir que se recargue la pagina

    var checkboxes = document.querySelectorAll('input[type=checkbox]');
     console.log(checkboxes);
     var target = document.getElementById("printOrder");

     target.innerHTML= "<h2>Your order is:</h2><br>"

    let Total = 0;



     checkboxes.forEach
     (
        checkbox => 
        {
            if(checkbox.checked== true)
            {
                 // nextSibling > parentElement > parentNode > childNodes > InnerText
                target.innerHTML += `<p>${checkbox.name}
                 <b> ${checkbox.nextSibling.parentElement.parentNode.childNodes[3].innerText}</b></p>`
            

                let price = checkbox.nextSibling.parentElement.parentNode.childNodes[3].innerText
                let priceFloat= parseFloat(price.slice(0,price.length-1))

                Total = Total + priceFloat;
                
            }
            
           

        }
        
     )
     target.innerHTML +="<br> <h3>Total: </h3>" +"<b>" +Total+"$ </b>" 
    

    

}