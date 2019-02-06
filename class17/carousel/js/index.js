let images = ['images/food2.jpg', 'images/food3.jpg', 'images/food4.jpg', 'images/food5.jpg', 'images/food6.jpg', 'images/food7.jpg'];
let imageIndex = 0;

$('.btn-next').click(nextImage);
$('.btn-prev').click(prevImage);

function nextImage() {
    if (imageIndex < images.length - 1) {
        imageIndex++;
        $('#image-to-vote-on').attr('src', images[imageIndex]);
    } else {
        imageIndex = 0;
        $('#image-to-vote-on').attr('src', images[imageIndex]);
    }
}

function prevImage() {
    if (imageIndex > 0) {
        imageIndex--;
        $('#image-to-vote-on').attr('src', images[imageIndex]);
    }
}


images.forEach(function(image, index){
    $('#choose-image').append(`<option value=${index}>${image}</option>`)
  })
  
  $('#choose-image').change(function () {
    imageIndex = parseInt($(this).val())
    $('#image-to-vote-on').attr('src', images[imageIndex]);
  })