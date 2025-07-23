const list = [['du', 5, 10], ['chi', 5, 10], ['le', 15, 20], ['vi', 30, 35],
              ['ga', 20, 25], ['gu', 35, 40], ['te', 30, 35], ['cho', 40, 45], 
              ['ham', 50, 55], ['ba', 15, 25], ['in', 25, 0], ['har', 40, 0], ['re', 90, 0]]

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
const copy = async () => {
    let result = document.getElementById('result').innerHTML;
    try {await navigator.clipboard.writeText(result); alert('Copiado');}
    catch (err) {alert('No se pudo copiar, error: ' + err)}
}
