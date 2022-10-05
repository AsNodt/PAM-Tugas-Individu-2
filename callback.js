function Callback() {
    return "Hello ";
}
    function main(a, callback) {
        return Callback()+a;
}
    document.getElementById("callback").innerHTML = main("World", Callback);
    