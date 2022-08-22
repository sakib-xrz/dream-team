// player add
const allSelectBtn = document.getElementsByClassName("select-btn");
for (const selectBtn of allSelectBtn) {
  selectBtn.addEventListener("click", function () {
    const playerName =
      selectBtn.parentElement.parentElement.children[1].children[0].innerText;
    const container = document.getElementById("order-list-container");
    const elementCreate = document.createElement("li");
    elementCreate.innerHTML = `
        <div style="color: #B4F500;" class="text-xl font-semibold p-2">${playerName}</div>
        `;
    if (container.children.length !== 5) {
      container.appendChild(elementCreate);
    } else {
      alert("You can't select more than five player.");
    }
    selectBtn.classList.add("btn-disabled");
    if (selectBtn.classList.contains("btn-disabled")) {
      selectBtn.style.backgroundColor = "#b4f50069";
    }
  });
}

// calculation for player cost
document
  .getElementById("calculate-player-cost")
  .addEventListener("click", function () {
    const perPlayerCost = getInputValueById("per-player-cost");
    const container = document.getElementById("order-list-container");
    const totalPlayer = container.children.length;
    
    if (totalPlayer <= 0) {
      alert("Please select at-least one player.");
    } else if (perPlayerCost <= 0 || isNaN(perPlayerCost)) {
      alert("Please input valid amount");
    } else {
      const TotalPlayerCost = perPlayerCost * totalPlayer;
      const playerExpenses = document.getElementById("player-expenses");
      playerExpenses.innerText = TotalPlayerCost;
    }
    perPlayerCost.value = "";  
  });

// calculation for total cost
document
  .getElementById("calculate-total-cost")
  .addEventListener("click", function () {
    const playerExpensesString = getTextValueById("player-expenses");

    const playerExpenses = parseFloat(playerExpensesString);
    const managerCost = getInputValueById("manager-cost");
    const coachCost = getInputValueById("coach-cost");

    const totalExpenses = document.getElementById("total");
    const total = playerExpenses + managerCost + coachCost;

    if (
      isNaN(managerCost) ||
      isNaN(coachCost) ||
      coachCost <= 0 ||
      managerCost <= 0
    ) {
      alert("Please input valid amount.");
    } else if (playerExpenses == 0 || isNaN(playerExpenses)) {
      alert("Player expenses can't be empty.");
    } else {
      totalExpenses.innerText = total;
    }
  });
