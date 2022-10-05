function Higher() {
    return "Budi Suka ";
}

function Higherr(fungsi, nama) {
    fungsi();
    return fungsi() + nama;
}
document.getElementById("higher").innerHTML = Higherr(Higher, "Bermain Bola");
