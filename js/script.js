var messageBtn = document.getElementsByClassName('send-message');
var message1 = document.getElementsByClassName('message');

messageBtn.onclick = function() {
    message1.classList.remove('d-none');
};