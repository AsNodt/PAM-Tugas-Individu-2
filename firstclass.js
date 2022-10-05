let assign_var = function invar() {
        return "Assign kedalam variable";
}
document.getElementById("assignvar").innerHTML = assign_var();

let a = {
    assign_ob : function assign_ob() {
        return "Assign kedalam objek";
    }
}
document.getElementById("assignob").innerHTML = a.assign_ob();

function passing() {
    return "Passing";
    }
    function passingg(a, b) {
        return (a() + b);
}
document.getElementById("passing").innerHTML = passingg(passing, "passingan");

function Return(a) {
    return function() {
        return ("Ini " + a);
    }
 }
document.getElementById("return").innerHTML = Return("budi")();