$('#myForm').submit(function(event) {
    event.preventDefault();

    let name = $('#name-input').val();
    $('#target').html(name);

})