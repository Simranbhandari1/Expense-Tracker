window.onload = function() {
  
const catagory=document.getElementById("catagory");
const amount=document.getElementById("amount");
const date=document.getElementById("date");
const btn=document.getElementById("sub-btn");
const table = document.getElementsByTagName("table")[0];

// First code → stores elements → always use .value inside the click listener.

// Second code → stores static values at load time → won’t update when user types later.
btn.addEventListener("click",() => {
    catagory_val=catagory.value;
    amount_val=amount.value;
    date_val=date.value;

    let newRow = document.createElement("tr");

//     let td1 = document.createElement("td");
//     td1.textContent=catagory_val;

//     let td2=document.createElement("td");
//     td2.textContent=amount_val;

//     let td3 =document.createElement("td");
//     td3.textContent=date_val;
    
//       tr.appendChild(td1);
//   tr.appendChild(td2);
//   tr.appendChild(td3);
//   tbody.appendChild(tr); 
   newRow.classList.add("expense-row");
    newRow.innerHTML=`
    <td>${catagory_val}</td>
    <td>${amount_val}</td>
    <td>${date_val}</td>
    <td><button class="update-btn"><i class="fa-solid fa-pen"></i></button></td>
    <td><button class="delete-btn"><i class="fa-solid fa-trash"></i></button></td>
    `;

   table.appendChild(newRow);
   catagory.value="";
   amount.value="";
   date.value="";

   


});


};


