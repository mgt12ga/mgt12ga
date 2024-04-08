function selectImage() {
    var firstMenu = document.getElementById("first-menu");
    var secondMenu = document.getElementById("second-menu");
    var selectedImage = document.getElementById("selected-image");

    // Get the selected values
    var selectedValue1 = firstMenu.value;
    var selectedValue2 = secondMenu.value;

    // Choose the image based on user selections
    var imagePath = getImagePath(selectedValue1, selectedValue2);

    // Set the image source
    selectedImage.src = imagePath;
}

function getImagePath(selectedValue1, selectedValue2) {
    var imagePath = "Images/" + selectedValue1 + ',' + selectedValue2 + '.png';

    // Don't forget to return the imagePath
    return imagePath;
}
