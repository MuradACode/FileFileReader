let fileInput = document.querySelector(".fileInput");
let images = document.querySelector(".images");
let area = document.querySelector(".area")
let icon = document.getElementById("Icon");

area.addEventListener("drop", (ev) => {
    fileInput.click();
});

icon.addEventListener("click", (ev) => {
    fileInput.click();
});

fileInput.addEventListener("change", (ev) => {
    let files = ev.target.files;

    for (const file of files) {
        let reader = new FileReader();

        reader.readAsDataURL(file);

        reader.addEventListener("loadend", () => {
            let image = createImage(reader.result);

        });

        let image = document.getElementsByClassName("image");

        console.log(image);
    }
});

function createImage(base64String) {
    images.innerHTML += `<img class="image" src="${base64String}">`;
}