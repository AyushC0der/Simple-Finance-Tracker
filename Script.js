
//Input
var CatergorySel = document.getElementById("Cat_");
var type = document.querySelector("#Typ_");
const IncomeCat = [
    {text: "Salary", value: "sal"},
    {text: "Got Money", value: "gotMon"},
    {text: "Credit Cart Return", value: "CredRet"}
];
const ExpenCat = [
    {text: "Food", value: "a"},
    {text: "Chips", value: "b"},
    {text: "Stationary", value: "c"}
];

//Display


//Table


/*Functions*/
document.addEventListener('DOMContentLoaded', function() {
  const select = document.querySelector('#Typ_');
  select.addEventListener('change', function() {
    if(type.value === "inc"){
        CatergorySel.options.length = 0;
        console.log("Income");
        IncomeCat.forEach(item => {
            CatergorySel.add(new Option(item.text, item.value));
        });
    }
    else if(type.value === "exp"){
        CatergorySel.options.length = 0;
        console.log("Expense");
        ExpenCat.forEach(item => {
            CatergorySel.add(new Option(item.text, item.value));
        });
    }
  });
});   


