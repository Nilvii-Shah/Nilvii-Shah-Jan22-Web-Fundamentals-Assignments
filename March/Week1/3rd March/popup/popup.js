function hidePopup() {
    var unsub = document.getElementById('main-box');
    document.getElementById('main-box').classList.replace('popup-box','d-none');

}
function showPopup() {
    document.getElementById('main-box').classList.replace('d-none','popup-box');
}