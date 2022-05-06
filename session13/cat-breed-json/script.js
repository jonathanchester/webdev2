// Starter JSON Request Code:
// https://www.w3schools.com/js/js_ajax_http.asp

loadData();

function loadData() {
    // Create an XMLHttpRequest object
    const xhttp = new XMLHttpRequest();

    // Define a callback function
    xhttp.onload = function() {
        // Here you can use the Data
     let imageData = JSON.parse(this.response);

     generateGallery(imageData);
    }

    // Send a request
    xhttp.open("GET", "data.json");
    xhttp.send();
}

function generateGallery(data) {
    const gallery = document.querySelector ('.gallery');

    for(let imageData of data.cat_breeds) {
        
        const card = document.createElement('div');

        card.classList.add('card')

        const newImage = new Image();
        console.log(newImage);

        newImage.src =`${imageData.img_link}`;

        newImage.alt = imageData.breed;

        newImage.classList.add("card__img");

        let caption = document.createElement("p");
        caption.classList.add("card__caption");
        caption.textContent = imageData.breed;
        


        card.appendChild(newImage);
        card.appendChild(caption);


        gallery.appendChild(card);

    }
}

// let button = document.querySelector('.print');

// button.addEventListener("click", function() {

//     let text = document.querySelector('.myText');

//     alert(text.value)
// })