function oblicz(){
    let rodzaj = document.getElementById('paliwo').value;
    let litry = document.getElementById('litry').value;
    let koszt = 0;
    let wynik = "";
    if(rodzaj == 1) {
        koszt = litry * 4;
        document.getElementById('wynik').innerHTML = "Koszt wynosi: " + koszt;
    }
    else if(rodzaj == 2) {
        koszt = litry * 3,5;
        document.getElementById('wynik').innerHTML = "Koszt wynosi: " + koszt;
    }
    else{
        document.getElementById('wynik').innerHTML = "Podane wartości są niepoprawne!";
    }
}