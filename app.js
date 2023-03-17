let card = document.querySelector(".cardHolder");
card.setAttribute("class", "shadow-lg p-3 mb-5 bg-white rounded");
function generateCard() {
  let cardHtml = `
    <div class="card m-3" style="max-width: 18rem;">
        <div class='card-header bg-info'>
            <img class='card-img-top rounded mx-auto d-block w-50 ' src='Images/qrcode.png' />
        </div>
        <div class='card-body text-center'>
            <h4 class="card-title">coderhimanshu.com</h4>
            <p class="card-text">Scan the QR Code to visit my portfolio</p>
        </div>
    </div>
    `;

  return (card.innerHTML = cardHtml);
}

generateCard();

// TO DO: Design it and improve UI.
