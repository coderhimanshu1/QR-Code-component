let card = document.querySelector(".cardHolder");

function generateCard() {
  let cardHtml = `
    <div class='card'>
        <img class='card-img-top rounded mx-auto d-block w-50 ' src='Images/qrcode.png' />
        
    </div>
    <div class='card-body text-center'>
        <h4 class="card-title">coderhimanshu.com</h4>
        <p class="card-text">Scan the QR Code to visit my portfolio</p>
        </div>
    `;

  return (document.body.innerHTML = cardHtml);
}

generateCard();

// TO DO: Design it and improve UI.
