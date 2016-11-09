// JavaScript File

document.getElementById('go').onclick = function() {
    var div = $('#texter').val();
    var add = div + ", dawg";
    document.getElementById('output').innerHTML = add;
};