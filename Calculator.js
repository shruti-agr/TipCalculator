window.addEventListener('load' , init);


function init()
{
    var oButton = document.getElementById('button1');
    oButton.addEventListener('click', calculate);
}
function calculate()
{
    var amount = document.getElementById("amount").value;
    var people = document.getElementById("people").value;
    if(amount == "" || people == "")
    {
        alert("Please enter values");
    }
    if(isNaN(amount) || isNaN(people))
    {
        alert("enter only numbers");
    }
    var percentage = document.getElementById("select").value;
   // alert(percentage);

    var money = amount * percentage / ( people * 100);
   // alert(money);
    var displayMoney = "TIP AMOUNT $" + money + "each";    
    document.getElementById("money").innerHTML = displayMoney;

    
}