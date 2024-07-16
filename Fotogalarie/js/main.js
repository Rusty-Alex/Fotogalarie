// Array erstellung

let myImages = ['img/bild1.jpg', 'img/bild2.jpg', 'img/bild3.jpg', 'img/bild4.jpg', 'img/bild5.jpg',
    'img/bild6.jpg', 'img/bild7.jpg', 'img/bild8.jpg', 'img/bild9.jpg', 'img/bild10.jpg', 'img/bild11.jpg',
    'img/bild12.jpg', 'img/bild13.jpg', 'img/bild14.jpg'];
// hier wird eine image Index festgelegt
let imageIndex = 0;
// Auf den Bereich von den haubt div zugreifen
let fotoMain = document.getElementById('picContent');
// funktion zu erstellung von den einzelnen Divs

function imageLoad() {
    fotoMain.innerHTML = '';

    for (let i = 0; i < myImages.length; i++) {
        //    hier wird die funktion mit einen Index zu jeden Image gesetzt  onclick="overlayOn(${i}) " src=" ${myImages[i]} "
        fotoMain.innerHTML += ` 
    
    <div class="picArea"><img id="picImage" onclick="overlayOn(${i}) " src=" ${myImages[i]} " alt="Bilder der Fotogalarie"></div>
            `;
    }
}

// Overlay an und auschalten

let overlay = document.getElementById('overlay');

function overlayOn(i) {
    // hier wird die einznle image mit einer Index verknüft
    imageIndex = i;
    // hier wird die classe d_none deaktiviert
    overlay.classList.remove('d_none');
    overlayImage();

}

function overlayoff() {
// hier wird die classe d_none aktiviert
    overlay.classList.add('d_none');

}

// Overlay image aufruf

function overlayImage() {
    let overlayImages = document.getElementById('overlayPic');
    overlayImages.innerHTML = `
   <!--hiert wird das bild im array=myImages mit den Imageindex wert verknüft  -->
            <div id="overlayPics"><img src="${myImages[imageIndex]}" alt=""></div>
            <div class="controll">
                <div id="backBTN" class="btn"><img onclick="backImage()" src="img/icons8-links-2-50.png"alt="Pfeillinks"></div>
                <div><img class="closeIcone" onclick="overlayoff()" src="img/icons8-close-50 (1).png" alt=""></div>
                <div id="nextBTN" class="btn"><img onclick="nextImage()" src="img/icons8-pfeil_-vorwärts-50.png" alt=""></div>
            </div>
    `
}

// Nächstes bild


function nextImage() {
    // hier wird das das Bild vergliechen ob es am ende ist wenn ja wird es an den anfang gesezt
    if (imageIndex == 13) {
        imageIndex = 0;
    } else {
        // ansonsten wird wird der index um 1 erhöht per jedesmal ausfühurg der function
        imageIndex++;
    }
    // hier wird der wert ImageIndex an die funktion weiter geben somit weis man welcher wert bzw welches foto angezeit wird 
    overlayImage(imageIndex);
}

// Zurück Blättern

function backImage() {
    // hier wird verglichen ob der wert bzw das bild am anfang ist sonst wird es an ende zurück gesezt
    if (imageIndex == 0) {
        imageIndex = 13;
    } else {

        // hier wird der wert um 1 minimiert bzw um 1 subtrahiert
        imageIndex--;
    }
    // hier wird der wert ImageIndex an die funktion weiter geben somit weis man welcher wert bzw welches foto angezeit wird 
    overlayImage(imageIndex);
}

























