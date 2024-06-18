let imgbox = document.getElementById("qr");
let qrimage = document.getElementById("qrimage");
let qrtext = document.getElementById("inp");
let btn = document.getElementById("butn");

btn.addEventListener("click", function(e) {
    e.preventDefault();
    generate();
});

function generate() {
    let qrValue = qrtext.value;
    if (qrValue !== "") {
        qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrValue);
        imgbox.style.maxHeight = "150px";
        btn.innerHTML = "Reset";
        
        btn.removeEventListener("click", handleGenerateClick);  // Remove previous event listener
        btn.addEventListener("click", handleResetClick);
    } else {
        alert("Write something");
    }
}

function reset() {
    imgbox.style.maxHeight = "0";
    qrimage.src = "";
    qrtext.value = "";  // Optionally clear the input field
    btn.innerHTML = "Generate QR";
    
    btn.removeEventListener("click", handleResetClick);  // Remove previous event listener
    btn.addEventListener("click", handleGenerateClick);
}

function handleGenerateClick(e) {
    e.preventDefault();
    generate();
}

function handleResetClick(e) {
    e.preventDefault();
    reset();
}
