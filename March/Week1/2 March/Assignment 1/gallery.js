var counter = [0,0,0,0,0,0,0,0,0,0]
function like(n) {
    counter[n] += 1;
    document.getElementById(`counter${n}`).innerText=counter[n];
    console.log(n);
}
function dislike(n) {
    counter[n] -= 1;
    document.getElementById(`counter${n}`).innerText=counter[n];
}