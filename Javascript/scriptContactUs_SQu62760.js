class costumer
{
    constructor(Name,LastName,Email,rate)
    {
        this.FirstName = Name;
        this.LastName = LastName;
        this.Email = Email;
        this.rates = rate;
    }

    FullName(){
        return this.FirstName + " " +this.LastName+ " with the Mail " + this.Email;
    }

}

// Event listener


window.addEventListener("DOMContentLoaded",function(){
InitializeOptions();
})

let Bttn= document.getElementById("Mybttn")
Bttn.addEventListener("click", function(){

    console.log(Bttn)
    let validation = AccumulateData();
    
   if(validation==true){ 
    DisplayData();

    let img= document.createElement('img');
            img.src = "../Content/message.gif"
            img.id = "MessageGif"
            document.getElementById("AnimationMessage").style.top = "800px"
            console.log(img)
            document.getElementById("AnimationMessage").append(img);

            document.getElementById("AnimationMessage").style.height = "300px"

    setInterval(AnimationGif,150);}
});
      




function InitializeOptions(){

    var rate = [
        {val: "1", text: "1"},
        {val:"2", text:"2"},
        {val: "3", text: "3"},
        {val: "4", text: "4"},
        {val:"5", text:"5"}
    ];
    let sel = document.getElementById("questions_id");

    for(let ratings of rate)
    {
        let option = document.createElement('option');
        option.text = ratings.text;
        option.value = ratings.val;

        rate.id ="rates";

        sel.append(option);
    }
    let node = document.createElement('section');
    node.id = "accumulate";
    document.body.append(node);


}

// Form Data Processi

var Data= [];
function AccumulateData(){
    let form = document.myform;

    //validation
    console.log(document.getElementById("Name"))
    let input1 = document.getElementById("Name").checkValidity();
    let input2 = document.getElementById("LastName").checkValidity();
    let input3 = document.getElementById("Email").checkValidity();


    if(input1 && input2 && input3)
    {
        let cost= new costumer();
        cost.FirstName = form.elements["Name"].value;
        cost.LastName = form.elements["LastName"].value;
        cost.Email = form.elements["Email"].value;
        cost.rates = form.elements["questions_id"].value;

        Data.push(cost);
        console.log(Data)
        return true;

    }
    else
    {
        alert("please fillout all the fields");
        return false;
    }
}
    function DisplayData(){
        let target = document.getElementById("accumulate");
        if(!document.getElementById("data")){

            let heading = document.createElement('h2');
            heading.innerText = "Costumer Response List"
            heading.id = "data";
            target.append(heading);

            var costList= document.createElement('ol');
            costList.id = "List";
            heading.after(costList);
        }
        else
        {
            var costList= document.getElementById("list");
        }
        let text = ""
        for(let cost of Data){

            console.log(cost)
            let CostumerName = document.createElement('strong');
            CostumerName.innerText = cost.FullName();

            text = ", gave the page  "+cost.rates.toUpperCase()+" star/s";

            var li = document.createElement('li');
            li.append(CostumerName, text);
            costList.append(li);
        }
        console.log(costList);
        
        document.getElementById("costSection").append(costList);
        }

        let TopChange= 0;
        let LeftChange = 0;
        let LeftPosition = 0;
        let TopPosition= 800;

        function AnimationGif()
        {
            //create and append img
            

            //Animate img
            let MessageGif = document.getElementById("MessageGif");
            console.log(LeftChange);
            console.log(TopChange); 
            LeftPosition+= LeftChange;
            TopPosition+= TopChange;

            console.log(LeftPosition)
            console.log(TopPosition)
            MessageGif.style.left = LeftPosition + "px";
            MessageGif.style.top = TopPosition + "px";

           
            if((LeftPosition==0)|| (LeftPosition>= screen.availWidth-450))
            {
                LeftPosition = 100;
                TopPosition= 800;
                

                LeftChange= Math.floor(Math.random()*10 +20);
                TopChange= Math.floor(Math.random()*3 + 2);
                

                let plusMinus = Math.random()<0.5 ? -1: 1;
                TopChange*=plusMinus;
            } 


        }

        

