function calculateTotal() {
    let flights = parseFloat(document.getElementById('flights').value) || 0;
    let accommodation = parseFloat(document.getElementById('accommodation').value) || 0;
    let food = parseFloat(document.getElementById('food').value) || 0;
    let transport = parseFloat(document.getElementById('transport').value) || 0;
    let insurance = parseFloat(document.getElementById('insurance').value) || 0;
    let shopping = parseFloat(document.getElementById('shopping').value) || 0;

    let totalPerPerson = flights + accommodation + food + transport + insurance + shopping;
    let buffer = totalPerPerson * 0.1;

    document.getElementById('buffer').value = buffer.toFixed(2);
    document.getElementById('total').value = (totalPerPerson + buffer).toFixed(2);
    document.getElementById('total2').value = ((totalPerPerson + buffer) * 2).toFixed(2);

    // Currency Conversion
    let conversionRate = parseFloat(document.getElementById('usdToDkk').value) || 1;
    let totalInUsd = ((totalPerPerson + buffer) * 2) * conversionRate;

    document.getElementById('totalUsd').value = totalInUsd.toFixed(2);
}
