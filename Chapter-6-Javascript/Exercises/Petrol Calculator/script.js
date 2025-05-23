// Loading the interface
document.addEventListener('DOMContentLoaded', function () {
  // adding values
  const costInput = document.getElementById('costPerLiter');
  const litersInput = document.getElementById('litersPurchased');
  const totalDisplay = document.getElementById('totalCost');
  const calcButton = document.getElementById('calculateBtn');

  // Giving the button a function
  calcButton.addEventListener('click', function () {
    const cost = parseFloat(costInput.value);
    const liters = parseFloat(litersInput.value);
    const total = cost * liters;

    // Display total in AED
    totalDisplay.textContent = `Total Cost: AED ${total.toFixed(2)}`;
  });
});
