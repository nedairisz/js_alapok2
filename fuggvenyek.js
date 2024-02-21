


// páros vagy páratlan a paraméter? visszatér ogikai

export function parose(szam){
    let paros = false;
    /* if (szam%2 === 0){
        paros= true;
    } */

    //TERNÁLIS OPERÁTOR
    szam% 2 === 0 ? paros=true : ps=false; // feltétel ? ha igaz : ha hamis
    return paros
}