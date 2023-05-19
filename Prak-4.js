var pil = [];
var button = "";
var teksPlhn = [];
var input = "";
var cek = "";
function tampilPil() {
    var banyakPil = document.getElementById("banyakPilihan").value;
    var pilihan = "";
    button = '<button onclick="resultBtn()">SHOW</button>';

    for (var i = 1; i <= banyakPil; i++) {
        pilihan += '<p> Pilihan ' + i + ': <input type="text" id="input' + i + 
        '" placeholder="Masukkan Teks yang dipilih"> </p>';
    }
    pilihan += button;
    document.getElementById("pilihan").innerHTML = pilihan;

}

function resultBtn() {
    var banyakPil = document.getElementById("banyakPilihan").value;
    var teksPil = "";

    button = '<button onclick="result()">YA</button>';

    for (var i = 1; i <= banyakPil; i++) {
        pil[i - 1] = document.getElementById("input" + i).value;
        input += pil[i - 1] + " , ";
        teksPil += '<p><input type="checkbox" name="pilihan" value="' + pil[i - 1] + '"> ' 
        + pil[i - 1] + '</p>';
    }
    teksPil += button;
    document.getElementById("checked").innerHTML = teksPil;
}

function result() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    banyakPil = document.getElementById("banyakPilihan").value;
    let pil = []
    var check = document.getElementsByName("pilihan");

    for (let i = 0; i < check.length; i++) {
        if (check[i].checked) {
            teskPlhn = check[i].value;
            pil += teskPlhn + ' , ';
        }
    }
    var hasil = 'Hai, nama saya ' + nama +  ', dengan email , ' + email + 
    '. Saya mempunyai ' + banyakPil + ' pilihan hobi, yaitu ' + input + ' dan saya menyukai ' + pil;

    document.getElementById("HasilAkhir").innerHTML = hasil;
}