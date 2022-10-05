function MyUmur() {
    let a = 19;
    return a;
}

function MyNewFunction() {
    return MyUmur();
}
document.getElementById("contoh").innerHTML = MyNewFunction();