
//Input
var CatergorySel = document.querySelector("#Cat_");
var type = document.querySelector("#Typ_");
var AmountInp = document.querySelector("#Amt_");
const IncomeCat = [
    {text: "Salary", value: "Salary"},
    {text: "Got Money", value: "Got Money"},
    {text: "Credit Cart Return", value: "Credit Cart Return"}
];
const ExpenCat = [
    {text: "Food", value: "Food"},
    {text: "Chips", value: "Chips"},
    {text: "Stationary", value: "Stationary"}
];

//Display
var dispAmt = document.querySelector("#displayTotalAmt_");
var dispInc = document.querySelector("#displayTotalInc_");
var dispExp = document.querySelector("#displayTotalExp_");

var amount = 0;
var income = 0;
var expense = 0;

//Table

var tableBody = document.querySelector("#fintrack-table_ tbody");


/////////////////////
DisplayTotalAmount();

/*Functions*/
document.addEventListener('DOMContentLoaded', function() {
  const select = document.querySelector('#Typ_');
  select.addEventListener('change', function() {
    if(type.value === "Income"){
        CatergorySel.options.length = 0;
        console.log("Income");
        IncomeCat.forEach(item => {
            CatergorySel.add(new Option(item.text, item.value));
        });
    }
    else if(type.value === "Expense"){
        CatergorySel.options.length = 0;
        console.log("Expense");
        ExpenCat.forEach(item => {
            CatergorySel.add(new Option(item.text, item.value));
        });
    }
  });
});   

function AddElement()
{
    AddRow(AmountInp.value, CatergorySel.value, type.value);
}

function DisplayTotalAmount()
{
    dispAmt.innerHTML = `₹ ${amount}`;
    dispInc.innerHTML = `₹ ${income}`;
    dispExp.innerHTML = `₹ ${expense}`;
    
}

function AddRow(amt, cat, typ)
{
    const row = document.createElement('tr');
    row.innerHTML=`
        <td>₹ ${amt}</td>
        <td>${cat}</td>
        <td>${typ}</td>
    `;
    tableBody.appendChild(row);
}