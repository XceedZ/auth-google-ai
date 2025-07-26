// script.js
window.onload = () => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');

    const loadingElement = document.getElementById('loading');
    const codeContainer = document.getElementById('code-container');
    const codeBox = document.getElementById('auth-code');

    if (code) {
        loadingElement.style.display = 'none';
        codeBox.textContent = code;
        codeContainer.style.display = 'block';
    } else {
        loadingElement.textContent = "Gagal mendapatkan kode otorisasi. Silakan coba lagi dari WhatsApp.";
    }
};

function copyCode() {
    const codeBox = document.getElementById('auth-code');
    navigator.clipboard.writeText(codeBox.textContent).then(() => {
        const successMsg = document.getElementById('success-msg');
        successMsg.style.display = 'block';
        setTimeout(() => {
            successMsg.style.display = 'none';
        }, 2000);
    });
}