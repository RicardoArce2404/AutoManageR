const list = [['du', 5, 20], ['chi', 5, 10], ['le', 20, 30], ['vi', 25, 35],
              ['ga', 30, 40], ['gu', 35, 45], ['te', 35, 60],
              ['cho', 40, 60], ['ham', 60, 80], ['ba', 15, 25]]

var [s1,s2,s3,s4] = ['', '', '', '']

function g1(x, lot_) {
    let res = x + `co,${lot_},`;
    s1 = res; return res.slice(0,res.length - 1);
}
function g2(x, id_) {
    let res = x + `${id_},${id_},`;
    s2 = res; return res.slice(0,res.length - 1);
}
function g3(x, total_, num_) {
    let res = x + `${total_},${num_},`;
    s3 = res; return res.slice(0,res.length - 1);
}
function g4(x) {
    let res = x + '-,+,';
    s4 = res; return res.slice(0,res.length - 1);
}


function main() {

    var lot = document.getElementById('lot').value;
    var id = document.getElementById('id').value;
    var num = document.getElementById('num').value;

    var shop = document.getElementById('shop');
    var sStatus = (shop.checked) ? true : false;

    var clp = document.getElementById('clp');
    var addClp = (clp.checked) ? true : false;

    for (let i = 0; i < list.length; i++) {
        if (list[i][0] == lot){var total = (sStatus) ? list[i][1]*num : list[i][2]*num }}

    var result = `/chlots ${g1(s1, lot)} ${g2(s2, id)} ${g3(s3, total, num)} ${g4(s4)}`

    if (addClp == true && result.slice(result.length-3) != 'clp'){result += ' clp'}

    document.getElementById('result').textContent = result;
    document.getElementById("form").reset();
}
