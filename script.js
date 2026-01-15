const input = document.getElementById('text-input');
const sizeSelect = document.getElementById('size-select');
const output = document.getElementById('output');
const generateButton = document.getElementById('generate-btn');
const downloadButton = document.getElementById('download-btn');

let size = sizeSelect.value;

generateButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (input.value.trim() === '') {
        alert('Please enter text to generate a QR code.');
        return;
    }
    generateQRCode();
});

downloadButton.addEventListener('click', () => {
    downloadQRCode();
});

function generateQRCode() {
    output.innerHTML = '';
    size = sizeSelect.value;
    new QRCode(output, {
        text: input.value,
        width: size,
        height: size,
        colorLight: "#ffffff",
        colorDark: "#000000",
    });
}

function downloadQRCode() {
    if (output.innerHTML === '') {
        alert('Please generate a QR code first.');
        return;
    }
    const img = output.querySelector('img');
    const link = document.createElement('a');
    link.href = img.src;
    link.download = 'qrcode.png';
    link.click();
}