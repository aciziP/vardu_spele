let adrese = window.location.hash //Pievieno datus
//console.log(adrese)
adrese = decodeURI(adrese)
adrese = adrese.replace('#','')
adrese = adrese.split(",")
let vards  = adrese[0]
document.querySelector('.virsraksts').innerHTML = 'Sveiks, '+vards

function random_burts()
 {
    const alphabet = "AĀBCČDEĒFGĢHIĪJKĶLĻMNŅOPRSŠTUŪVZŽ"
    const randomCharacter_null = alphabet[Math.floor(Math.random() * alphabet.length)]
    const randomCharacter_one = alphabet[Math.floor(Math.random() * alphabet.length)]
    const randomCharacter_two = alphabet[Math.floor(Math.random() * alphabet.length)]
    const randomCharacter_three = alphabet[Math.floor(Math.random() * alphabet.length)]
    const randomCharacter_four= alphabet[Math.floor(Math.random() * alphabet.length)]
    const randomCharacter_five = alphabet[Math.floor(Math.random() * alphabet.length)]
    const randomCharacter_six = alphabet[Math.floor(Math.random() * alphabet.length)]
    const randomCharacter_seven = alphabet[Math.floor(Math.random() * alphabet.length)]
    const randomCharacter_eight = alphabet[Math.floor(Math.random() * alphabet.length)]
    document.getElementById("B0").innerHTML =randomCharacter_null //Pievieno burtu
    document.getElementById("B1").innerHTML =randomCharacter_one
    document.getElementById("B2").innerHTML =randomCharacter_two
    document.getElementById("B3").innerHTML =randomCharacter_three
    document.getElementById("B4").innerHTML =randomCharacter_four
    document.getElementById("B5").innerHTML =randomCharacter_five
    document.getElementById("B6").innerHTML =randomCharacter_six
    document.getElementById("B7").innerHTML =randomCharacter_seven
    document.getElementById("B8").innerHTML =randomCharacter_eight
 }


debugger
console.log(document.getElementById("B1").innerHTML)
let laukumuSaturs = [document.getElementById("B0").innerHTML,
document.getElementById("B1").innerHTML,
document.getElementById("B2").innerHTML,
document.getElementById("B3").innerHTML,
document.getElementById("B4").innerHTML,
document.getElementById("B5").innerHTML,
document.getElementById("B6").innerHTML,
document.getElementById("B7").innerHTML,
document.getElementById("B8").innerHTML,
]
let atvertieLaukumi = []
// let pedejieDivi = []
//let r_vards = ('#'+r_vards+' div')

function veiktGajienu(laukums)
{
    let atvertsJaunsLaukums = false
    if( atvertieLaukumi.indexOf(laukums) == -1 )
    {
        atvertsJaunsLaukums = true
    }
    else
    {
        atvertsJaunsLaukums = false
    }
    
    
    if(atvertsJaunsLaukums)
    {
        
        //Nomainīts uz visibility. Nemaina izkārtojumu!
        document.querySelector('#'+laukums+' div').style.visibility="hiden";
        document.querySelector('#'+laukums+' div').style.opacity="0.1";
        
        /*debugger
        //Sadalīt "laukums?", lai var paņemt tikai skaitli un izmantot to, lai paņemtu burtu no masīva
        // let viss_kop = document.getElementById(laukums);
        // let sadal = viss_kop
        // document.getElementById("r_vards").innerHTML = 'Vārds: '+sadal*/

        //VISS IR VIENKĀRŠĀK!!!!!
        let sadal = laukums[1]   //Paņem laukuma numuru
        let kurs_burts = laukumuSaturs[sadal]   //Paņem attiecīgo burtu no laukumuSaturs
        document.getElementById("r_vards").innerHTML +=kurs_burts  //Pievieno burtu
        
    }

    // if( laukumuSaturs.length == atvertieLaukumi.length )
    // {
    //     // var hey = document.getElementById("L5");
    //     // console.log(hey)
    //     // if (window.getComputedStyle(hey).visibility === "visible"){
    //     //     setTimeout(()=>{
    //     //         alert('Apsveicam!')
    //     //     },1000);
            
    //     // }

    //     setTimeout(()=>
    //     {
    //         alert('Apsveicam!')
    //     },1000);
        
    // }
}