function cross() {
    document.getElementById('popup').classList.replace('popup' ,'none');
}
function show(n) {
    document.getElementById('popup').classList.replace('none' ,'popup');
    document.getElementById('img_src').src = document.getElementById(`img${n}`).src;

}