// step-1: add event listeners to the deposit button
document.getElementById("btn-deposit").addEventListener("click", function () {
  //   step-2: get the deposit amount from the deposit button;
  const depositField = document.getElementById("deposit-field");
  const newDepositAmountString = depositField.value;
  newDepositAmount = parseFloat(newDepositAmountString);
  //   step-3: get the current deposit total amount
  //   for non-input (element other than input, textarea) use the innerText to get the text.
  const depositTotalElement = document.getElementById("deposit-total");
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);
  const currentDepositTotal = newDepositAmount + previousDepositTotal;
  depositTotalElement.innerText = currentDepositTotal;

  //   seep-7: clear the deposit field
  depositField.value = "";
});
