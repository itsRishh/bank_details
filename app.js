// Get the "Copy to Clipboard" button and the account number text
const copyButton = document.getElementById('copy-btn');
const copyButtonupi = document.getElementById('copy-btn-upi');
const accountNumber = document.getElementById('account-number').innerText;
const upiId = document.getElementById('upiID').innerText;

// Add event listener to the button
copyButton.addEventListener('click', function() {
  // Create a temporary text area to copy the text
  const textarea = document.createElement('textarea');
  textarea.value = accountNumber;
  document.body.appendChild(textarea);

  // Select and copy the text
  textarea.select();
  document.execCommand('copy');

  // Remove the temporary textarea
  document.body.removeChild(textarea);

  // Show an alert confirming the copy action
  alert('Account number copied to clipboard!');
});

copyButtonupi.addEventListener('click', function() {
  // Create a temporary text area to copy the text
  const textarea = document.createElement('textarea');
  textarea.value = upiId;
  document.body.appendChild(textarea);

  // Select and copy the text
  textarea.select();
  document.execCommand('copy');

  // Remove the temporary textarea
  document.body.removeChild(textarea);

  // Show an alert confirming the copy action
  alert('UPI ID copied to clipboard!');
});
