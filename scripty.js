document.addEventListener('DOMContentLoaded', function () {
    var addButton = document.getElementById('addImgBtn');
    var gallery = document.getElementById('gallery');

    addButton.addEventListener('click', function () {
        var imgLink = prompt('Enter the link to the image:');

        if (imgLink) {
            addImageToGallery(imgLink);
        }
    });

    function addImageToGallery(imgLink) {
        var newAnchor = document.createElement('a');
        newAnchor.className = 'col-md-12 col-lg-4 img-fluid py-2';
        newAnchor.href = imgLink;
        newAnchor.setAttribute('data-toggle', 'lightbox');
        newAnchor.setAttribute('data-gallery', 'photo_gallery');

        var newImage = document.createElement('img');
        newImage.src = imgLink;
        newImage.alt = 'random img';
        newImage.className = 'img-fluid';

        newAnchor.appendChild(newImage);

        gallery.appendChild(newAnchor);
    }
});
