function odpalbutton(){
    var namei = document.getElementById('iname');
    let imiee = document.querySelector('p.ppierwszy');
    imiee.textContent=(namei.value);
    console.log(namei.value);
    var surnamei = document.getElementById('isurname');
    let nazwisko = document.querySelector('p.pdrugi');
    nazwisko.textContent=(surnamei.value);
    console.log(surnamei.value);
    var phonei = document.getElementById('iphone');
    let telefon = document.querySelector('p.ptrzeci');
    telefon.textContent=(phonei.value);
    console.log(phonei.value);
    
}
