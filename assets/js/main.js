// 1. Grab elements
const els = {
  bills: document.getElementById('billInput'),
  persons: document.getElementById('peopleInput'),
  tipAmount: document.getElementById('tipAmount'),
  tipTotal: document.getElementById('tipTotal'),
  buttons: document.querySelectorAll('.tip-btn'),
};
const customTip = document.getElementById('customTip');
let selectedTip = null;

// 2. Helpers
function setError(input, message) {
  input.classList.add('is-invalid');
  const container = input.closest('.tip-sec') || input.parentElement;
  let msg = container.querySelector('.error');
  if (!msg) {
    msg = document.createElement('small');
    msg.className = 'error';
    msg.setAttribute('aria-live', 'polite');
    container.appendChild(msg);
  }
  msg.textContent = message;
}

function clearError(input) {
  input.classList.remove('is-invalid');
  const container = input.closest('.tip-sec') || input.parentElement;
  const msg = container.querySelector('.error');
  if (msg) msg.textContent = '';
}

function clearActiveButtons() {
  els.buttons.forEach(btn => btn.classList.remove('active'));
}

// 3. Validation
function validateFields() {
  const bill = parseFloat(els.bills.value);
  const people = parseInt(els.persons.value, 10);
  let ok = true;

  if (!(bill > 0)) {
    setError(els.bills, 'Bill is required and must be > 0.');
    ok = false;
  } else {
    clearError(els.bills);
  }

  if (!(people >= 1)) {
    setError(els.persons, 'Number of people is required and must be ≥ 1.');
    ok = false;
  } else {
    clearError(els.persons);
  }

  return ok;
}

// 4. Calculation
function calculateTip() {
  if (!validateFields()) {
    els.tipAmount.textContent = '0.00';
    els.tipTotal.textContent  = '0.00';
    return;
  }

  if (selectedTip === null || isNaN(selectedTip)) {
    els.tipAmount.textContent = '0.00';
    els.tipTotal.textContent  = '0.00';
    return;
  }

  const bill   = parseFloat(els.bills.value);
  const people = parseInt(els.persons.value, 10);

  const tipTotal        = (bill * selectedTip) / 100;
  const tipPerPerson    = tipTotal / people;
  const billSharePerson = bill / people;
  const totalPerPerson  = billSharePerson + tipPerPerson;

  els.tipAmount.textContent = tipPerPerson.toFixed(2);
  els.tipTotal.textContent  = totalPerPerson.toFixed(2);
}

// 5. Event listeners
function bindListeners() {
  const bind = (el, events, handler) => {
    if (!el) return console.warn('Missing element for binding:', el);
    events.forEach(evt => el.addEventListener(evt, handler));
  };

  bind(els.bills,   ['input', 'change'], calculateTip);
  bind(els.persons, ['input', 'change'], calculateTip);

  els.buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      clearActiveButtons();
      btn.classList.add('active');
      selectedTip = parseFloat(btn.dataset.tip);
      calculateTip();
    });
  });

  if (customTip) { // FIXED
    customTip.addEventListener('input', () => { // FIXED
      clearActiveButtons();
      selectedTip = parseFloat(customTip.value) || null; // FIXED
      calculateTip();
    });
  }
}

// 6. Init
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bindListeners);
} else {
  bindListeners();
}

// Reset
document.getElementById('reset').addEventListener('click', () => {
  els.bills.value = "";
  els.persons.value = "";
  els.tipAmount.textContent = "0.00";
  els.tipTotal.textContent = "0.00";
  customTip.value = "Custom";           // FIXED
  selectedTip = null;

  els.buttons.forEach(btn => btn.classList.remove('active'));
});