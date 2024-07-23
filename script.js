function generateBarcodes() {
    const numberInput = document.getElementById('numberInput');
    const barcodeContainer = document.getElementById('barcodeContainer');
    const numbers = numberInput.value.split('\n').filter(num => num.trim() !== '');

    barcodeContainer.innerHTML = '';

    numbers.forEach((number, index) => {
        const barcodeDiv = document.createElement('div');
        barcodeDiv.className = 'barcode-item';

        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.id = `barcode-${index}`;
        barcodeDiv.appendChild(svg);
        barcodeContainer.appendChild(barcodeDiv);

        JsBarcode(`#barcode-${index}`, number.trim(), {
            format: "CODE128",
            width: 2,
            height: 80,
            displayValue: true,
            fontSize: 12,
            margin: 5
        });
    });
}

function clearBarcodes() {
    document.getElementById('numberInput').value = '';
    document.getElementById('barcodeContainer').innerHTML = '';
}

