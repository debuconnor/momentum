let img = document.getElementById("test")
EXIF.getData(img, () => {
    console.log(EXIF.getAllTags(this));
});