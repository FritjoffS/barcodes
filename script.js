function generateBarcodes() {
    const numberInput = document.getElementById('numberInput');
    const barcodeContainer = document.getElementById('barcodeContainer');
    const numbers = numberInput.value.split('\n').filter(num => num.trim() !== '');

    barcodeContainer.innerHTML = '';

    numbers.forEach((number, index) => {
        const barcodeDiv = document.createElement('div');
        barcodeDiv.className = 'barcode-item';

        const canvas = document.createElement('canvas');
        canvas.id = `barcode-${index}`;

        barcodeDiv.appendChild(canvas);
        barcodeContainer.appendChild(barcodeDiv);

        JsBarcode(`#barcode-${index}`, number.trim(), {
            format: "CODE128",
            width: 2,
            height: 100,
            displayValue: true
        });
    });
}