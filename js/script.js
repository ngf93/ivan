/* password button state change */
let passBtn = Array.from(document.querySelectorAll('.pass_btn'));
passBtn.forEach(function(item, i, arr) {
    item.addEventListener('click', () => {
        let state = item.getAttribute('data-state');
        if (state == 'invisible') {
            item.previousElementSibling.type = 'text';
            item.dataset.state = 'visible';
        } else {
            item.previousElementSibling.type = 'password';
            item.dataset.state = 'invisible';
        }
    });
});

// write review on user page
$(".write-review-btn").on('click', function() {
    $(".write-review-btn").prop('disabled', 'true');
    $(".write-review-block").removeClass('d-none');
    $(".bg-block").removeClass('d-none');
});

$(".write-review-close").on('click', function() {
    $(".write-review-btn").removeAttr('disabled');
    $(".write-review-block").addClass('d-none');
    $(".bg-block").addClass('d-none');
});

// send message on user page
$(".write-message-btn").on('click', function() {
    $(".write-message-block").removeClass('d-none');
    $(".bg-block").removeClass('d-none');
});

$(".write-message-close").on('click', function() {
    $(".write-message-block").addClass('d-none');
    $(".bg-block").addClass('d-none');
});

// response message
$(".write-response-btn").on('click', function() {
    $(".write-response-block").removeClass('d-none');
});

$(".write-response-close").on('click', function() {
    $(".write-response-block").addClass('d-none');
});

// favorite
$('.btn-fav-2').on('click', () => {
    $('.btn-fav-2>span').html('Добавить в избранное');
})
$('.btn-fav-2').on('click', () => {
    $('.btn-fav-2.active>span').html('В избранном');
})

let numOfClicks = 0;
const $elem = $('.unconfirmed');
const $elem2 = $('.uncon-tooltip');

$elem.on('click', () => {
    ++numOfClicks;
    $elem2.toggleClass('d-none', numOfClicks % 2 !== 0);
});

/* adding new parametres inputs */
function addInput(elem) {
    let cloneInput = elem.previousElementSibling.cloneNode(true);
    elem.before(cloneInput);
}