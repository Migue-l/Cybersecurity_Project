let bankBalance = 0;
let accountBalance = 1000;

function updateBalances() {
  document.getElementById('bankBalance').textContent = bankBalance.toFixed(2);
  document.getElementById('accountBalance').textContent = accountBalance.toFixed(2);
}

function deposit() {
  const amount = parseFloat(document.getElementById('amountInput').value);
  const message = document.getElementById('message');
  message.className = 'error';

  if (isNaN(amount) || amount <= 0) {
    message.textContent = 'Enter a valid positive number.';
    return;
  }

  if (amount > accountBalance) {
    message.textContent = 'Insufficient funds in your account.';
    return;
  }

  bankBalance += amount;
  accountBalance -= amount;
  updateBalances();
  document.getElementById('amountInput').value = '';
  message.className = 'success';
  message.textContent = `Deposited $${amount.toFixed(2)} into bank.`;
}

function withdraw() {
  const amount = parseFloat(document.getElementById('amountInput').value);
  const message = document.getElementById('message');
  message.className = 'error';

  if (isNaN(amount) || amount <= 0) {
    message.textContent = 'Enter a valid positive number.';
    return;
  }

  if (amount > bankBalance) {
    message.textContent = 'Insufficient bank balance.';
    return;
  }

  bankBalance -= amount;
  accountBalance += amount
  updateBalances();
  document.getElementById('amountInput').value = '';
  message.className = 'success';
  message.textContent = `Withdrew $${amount.toFixed(2)} from bank.`;
}

updateBalances();
