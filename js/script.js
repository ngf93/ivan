$(".search_trigger").on('click', function() {
    $(".search_block").removeClass('d-none')
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

/* adding new fieldset */
function addFieldset(btn) {
    let cloneInput = btn.nextElementSibling.cloneNode(true);
    btn.before(cloneInput);
}

// account page show unverified email window
$(".unverified_trigger").on('click', function() {
    $(".unverified_window").removeClass('d-none');
});

// открываем/закрываем блок, добаляя/удаляя класс 'd-none'
function closeDiv(elem) {
    elem.classList.add('d-none');
}

// account page hide email window
let item = document.querySelector('.unverified_window');
let btn = document.querySelector('.unverified_trigger');
document.addEventListener('click', function(e) {
    const target = e.target;
    const currentBtn = target == btn || btn.contains(target);
    const currentDiv = target == item || item.contains(target);
    if (!currentDiv && !currentBtn) {
        closeDiv(item);
    }
});

/* выбор полей через селект */
function toggleGroups(selId, val, formId) {
    let arr_options = Array.from(document.querySelectorAll('#' + selId + ' option'));
    let vals = [];
    for (var i = 0, j = arr_options.length; i < j; i++) {
        if (arr_options[i].value != "") {
            vals.push(arr_options[i].value);
        }
    }
    console.log('vals =' + vals);

    vals.forEach(function(item, i, arr) {
        let arrFields = Array.from(document.querySelectorAll('#' + formId + ' .' + item));
        arrFields.forEach(function(elem, i, arr) {
            if (item == val) {
                elem.classList.remove('d-none');
            } else {
                elem.classList.add('d-none');
            }
        });
    });
}