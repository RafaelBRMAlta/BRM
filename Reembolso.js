document.getElementById('requestForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var formData = new FormData(this);
    var template = 
    `******CHECK REQUEST*******
    CAR RENTAL REIMBURSEMENT

    Total amount: $${formData.get('totalAmount')}
    Breakdown: ${formData.get('startDate')} to ${formData.get('endDate')}

    Daily Rate: $${formData.get('dailyRate')} (${formData.get('numberOfDays')} Days)

    Documents:
    ${formData.get('repairOrder')} - Repair order - ${formData.get('startDate')} to ${formData.get('endDate')}
    ${formData.get('bankStatement')} - Bank statement
    ${formData.get('rentalAgreement')} - Rental agreement ${formData.get('startDate')} to ${formData.get('endDate')} "$${formData.get('totalAmount')}"

    Reason: ${formData.get('reason')}

    Justification: ${formData.get('justification')}`;

    // Ocultamos el formulario y mostramos el resultado
    document.getElementById('requestForm').style.display = 'none';
    document.getElementById('templateResult').innerText = template;
    document.getElementById('templateResult').style.display = 'block';
});
