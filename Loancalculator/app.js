document.getElementById('loan-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission
    document.getElementById("results").style.display = "none";
    // document.getElementById("loading").style.display = "block";
  
    setTimeout(calciEvent, 2000);
  });
  
  function calciEvent() {
    const loan_amount = document.getElementById('loan_amount');
    const interest_amount = document.getElementById('interest_amount');
    const years = document.getElementById('years');
    const Monthly_pay = document.getElementById('Monthly_pay');
    const toalAmount = document.getElementById('yearly_pay');
    const totalInterest = document.getElementById('total_amount');
  
    const principleamount = parseFloat(loan_amount.value);
    const calculatedinterest = parseFloat(interest_amount.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;
    const x = Math.pow(1 + calculatedinterest, calculatedPayments);
    const monthly = (principleamount * x * calculatedinterest) / (x - 1);
  
    if (isFinite(monthly)) {
      Monthly_pay.value = monthly.toFixed(2);
      toalAmount.value = (monthly * calculatedPayments).toFixed(2);
      totalInterest.value = (monthly * calculatedPayments - principleamount).toFixed(2);
  
     
      document.getElementById("results").style.display = "block"; // Show the results element
      
      document.getElementById("loading").style.display = "none"; // Hide the loading element
    } else {
      showalert('Please enter all fields...!');
    }
  }
  
  function showalert(error) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode(error));
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
  
    card.insertBefore(errorDiv, heading);
  
    setTimeout(function () {
      document.querySelector('.alert').remove();
    }, 3000);
  }
  