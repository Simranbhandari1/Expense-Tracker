// window.onload = function () {
//   const catagory = document.getElementById("catagory");
//   const amount = document.getElementById("amount");
//   const date = document.getElementById("date");
//   const btn = document.getElementById("sub-btn");
//   const table = document.getElementsByTagName("table")[0];
  

//   // ✅ Step 1: Load saved expenses and render them on table
//   let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
//   expenses.forEach(exp => {
//     let newRow = document.createElement("tr");
//     newRow.classList.add("expense-row");
//     newRow.innerHTML = `
//       <td>${exp.catagory}</td>
//       <td>${exp.amount}</td>
//       <td>${exp.date}</td>
//       <td><button class="update-btn"><i class="fa-solid fa-pen"></i></button></td>
//       <td><button class="delete-btn"><i class="fa-solid fa-trash"></i></button></td>
//     `;
//     table.appendChild(newRow);
//   });

//   // ✅ Step 2: Add new expense on button click
//   btn.addEventListener("click", () => {
//     let catagory_val = catagory.value;
//     let amount_val = amount.value;
//     let date_val = date.value;

//     if (!catagory_val || !amount_val || !date_val) return;

//     expenses.push({
//       catagory: catagory_val,
//       amount: amount_val,
//       date: date_val
//     });

//     localStorage.setItem("expenses", JSON.stringify(expenses));

//     let newRow = document.createElement("tr");
//     newRow.classList.add("expense-row");
//     newRow.innerHTML = `
//       <td>${catagory_val}</td>
//       <td>${amount_val}</td>
//       <td>${date_val}</td>
//       <td><button class="update-btn"><i class="fa-solid fa-pen"></i></button></td>
//       <td><button class="delete-btn"><i class="fa-solid fa-trash"></i></button></td>
//     `;
//     table.appendChild(newRow);

//     // clear inputs
//     catagory.value = "";
//     amount.value = "";
//     date.value = "";
//   });

//   const del = document.getElementsByClassName("update-btn");

//   del.addEventListener("click" ,() =>{

//   })
// };

window.onload = function () {
  const catagory = document.getElementById("catagory");
  const amount = document.getElementById("amount");
  const date = document.getElementById("date");
  const btn = document.getElementById("sub-btn");
  const table = document.getElementsByTagName("table")[0];

  // ✅ Load saved expenses
  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  let editIndex = -1; // -1 means no editing, >=0 means editing that index
  renderExpenses();

  // ✅ Function to render table
  function renderExpenses() {
    table.querySelectorAll(".expense-row").forEach(row => row.remove()); // clear old rows
    expenses.forEach((exp, index) => {
      let newRow = document.createElement("tr");
      newRow.classList.add("expense-row");
      newRow.innerHTML = `
        <td>${exp.catagory}</td>
        <td>${exp.amount}</td>
        <td>${exp.date}</td>
        <td><button class="update-btn"><i class="fa-solid fa-pen"></i></button></td>
        <td><button class="delete-btn"><i class="fa-solid fa-trash"></i></button></td>
      `;
      table.appendChild(newRow);

      // ✅ Delete functionality
      newRow.querySelector(".delete-btn").addEventListener("click", () => {
        expenses.splice(index, 1); // remove from array
        localStorage.setItem("expenses", JSON.stringify(expenses)); // update storage
        renderExpenses(); // re-render table
      });

      // ✅ Update functionality
      newRow.querySelector(".update-btn").addEventListener("click", () => {
        // fill the inputs with the row data
        catagory.value = exp.catagory;
        amount.value = exp.amount;
        date.value = exp.date;

        editIndex = index; // mark which row we are editing
        btn.textContent = "Update Expense"; // change button text
      });
    });
  }

  // ✅ Add new expense / Update existing one
  btn.addEventListener("click", () => {
    let catagory_val = catagory.value;
    let amount_val = amount.value;
    let date_val = date.value;

    if (!catagory_val || !amount_val || !date_val) return;

    if (editIndex === -1) {
      // 🔹 Add new expense
      expenses.push({
        catagory: catagory_val,
        amount: amount_val,
        date: date_val
      });
    } else {
      // 🔹 Update existing expense
      expenses[editIndex] = {
        catagory: catagory_val,
        amount: amount_val,
        date: date_val
      };
      editIndex = -1; // reset
      btn.textContent = "Add Expense"; // back to normal
    }

    localStorage.setItem("expenses", JSON.stringify(expenses));
    renderExpenses();

    // clear inputs
    catagory.value = "";
    amount.value = "";
    date.value = "";
  });
};

