import {parose} from "./fuggvenyek.js"

//let szam;
//console.log(parose(5))

/* var let const - hatókörök */

//console.log(szam); // var szam -> undefined // let szam -> hibaüz:nem fut tovabb, nem elérhető inicializáció előtt
let szam=12;

function fv1(){
    let szam = 5;
    console.log(szam);
    let masikszam=23;
    console.log(masikszam);
}

//console.log(masikszam); // hibaüzenet - reference errror
//console.log(szam);
// fv1(); // függvénydeklaráció felemelkedik a hatóköre tetejére

function fv2(){
    let x=2
    {
        let x =3
        console.log(x)
    }
    // letx=4 - hiba, nem fut
    console.log(x)
}
//fv2()

function fv3(){
    for (let index = 0; index < 3; index++) {
        console.log(index) 
    }
    console.log(index)
}
//fv3()

function fv4(szam){ 
    // ternális operátorral
    // a fv adja vissza a 3-al való osztási maradékot szövegesen 
    // szöveg: "nulla"
    //szam% 2 === 0 ? paros=true : ps=false; 
    // feltétel ? ha igaz : ha hamis

    let szoveg="";
    szam%3===0 ? (szoveg = "nulla") : szam%3===1 ? (szoveg = "egy") : (szoveg = "ketto");

    if (szam%3===0){
        szoveg="nulla"
    }else if(szam%3===1) {
        szoveg="egy"
    }else{
        szoveg="kettő"
    }
    return szoveg
}