let card = document.querySelector(".cardHolder");
card.setAttribute(
  "style",
  "display: flex; justify-content: center; align-items: center;"
);

function generateCard() {
  let cardHtml = `
    <div class="card shadow-lg p-3 bg-white rounded" style="max-width: 18rem;">
        <div class='card-header bg-info rounded' style='height: 250px;'>
            <img class='card-img-top rounded mx-auto d-block m-2' src='Images/qrcode.png' alt='QR code for himanshu's portfolio' />
        </div>
        <div class='card-body text-center'>
            <h5 class="card-title m-2">coderhimanshu.com</h5>
            <p class="card-text">Scan the QR Code to visit my portfolio</p>
        </div>
    </div>
    `;

  return (card.innerHTML = cardHtml);
}

generateCard();
