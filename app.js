window.onload = function () {
  const catagory = document.getElementById("catagory");
  const amount = document.getElementById("amount");
  const date = document.getElementById("date");
  const btn = document.getElementById("sub-btn");
  const table = document.getElementsByTagName("table")[0];

  // ✅ Step 1: Load saved expenses and render them on table
  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  expenses.forEach(exp => {
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
  });

  // ✅ Step 2: Add new expense on button click
  btn.addEventListener("click", () => {
    let catagory_val = catagory.value;
    let amount_val = amount.value;
    let date_val = date.value;

    if (!catagory_val || !amount_val || !date_val) return;

    expenses.push({
      catagory: catagory_val,
      amount: amount_val,
      date: date_val
    });

    localStorage.setItem("expenses", JSON.stringify(expenses));

    let newRow = document.createElement("tr");
    newRow.classList.add("expense-row");
    newRow.innerHTML = `
      <td>${catagory_val}</td>
      <td>${amount_val}</td>
      <td>${date_val}</td>
      <td><button class="update-btn"><i class="fa-solid fa-pen"></i></button></td>
      <td><button class="delete-btn"><i class="fa-solid fa-trash"></i></button></td>
    `;
    table.appendChild(newRow);

    // clear inputs
    catagory.value = "";
    amount.value = "";
    date.value = "";
  });
};
