const editableDiv = document.getElementById('editableDiv');
editableDiv.addEventListener('click', () => {

  // Skip if already input
  if (editableDiv.querySelector('input')) return;
  const currentValue = editableDiv.textContent.trim();
  editableDiv.textContent = ''; // clear div
  const input = document.createElement('input');
  input.type = 'number';
  input.value = currentValue;
  editableDiv.appendChild(input);
  input.focus();
  
  // Save value when blurred or Enter pressed
  const saveValue = () => {
    editableDiv.textContent = input.value || currentValue;
  };
  input.addEventListener('blur', saveValue);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      saveValue();
    }
  });
});