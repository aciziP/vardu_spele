let adrese = window.location.hash //Pievieno datus
//console.log(adrese)
adrese = decodeURI(adrese)
adrese = adrese.replace('#','')
adrese = adrese.split(",")
let vards  = adrese[0]
document.querySelector('.virsraksts').innerHTML = 'Sveiks, '+vards

// function random_burts()
//  {
//     const alphabet = "AĀBCČDEĒFGĢHIĪJKĶLĻMNŅOPRSŠTUŪVZŽ"
//     const randomCharacter_null = alphabet[Math.floor(Math.random() * alphabet.length)]
//     const randomCharacter_one = alphabet[Math.floor(Math.random() * alphabet.length)]
//     const randomCharacter_two = alphabet[Math.floor(Math.random() * alphabet.length)]
//     const randomCharacter_three = alphabet[Math.floor(Math.random() * alphabet.length)]
//     const randomCharacter_four= alphabet[Math.floor(Math.random() * alphabet.length)]
//     const randomCharacter_five = alphabet[Math.floor(Math.random() * alphabet.length)]
//     const randomCharacter_six = alphabet[Math.floor(Math.random() * alphabet.length)]
//     const randomCharacter_seven = alphabet[Math.floor(Math.random() * alphabet.length)]
//     const randomCharacter_eight = alphabet[Math.floor(Math.random() * alphabet.length)]
//     document.getElementById("B0").innerHTML =randomCharacter_null //Pievieno burtu
//     document.getElementById("B1").innerHTML =randomCharacter_one
//     document.getElementById("B2").innerHTML =randomCharacter_two
//     document.getElementById("B3").innerHTML =randomCharacter_three
//     document.getElementById("B4").innerHTML =randomCharacter_four
//     document.getElementById("B5").innerHTML =randomCharacter_five
//     document.getElementById("B6").innerHTML =randomCharacter_six
//     document.getElementById("B7").innerHTML =randomCharacter_seven
//     document.getElementById("B8").innerHTML =randomCharacter_eight
//  }

let variants = 0

function var_izv()
{
    const variants = "123"
    let izv_variants = variants[Math.floor(Math.random() * variants.length)]

    if (izv_variants == 1)
    {
        pvariants(1)
    }
    else if (izv_variants == 2)
    {
        dvariants(2)
    }
}

function pvariants(variants)
{
    
   
    document.getElementById("B0").innerHTML ="A"
    document.getElementById("B1").innerHTML ="K"
    document.getElementById("B2").innerHTML ="A"
    document.getElementById("B3").innerHTML ="B"
    document.getElementById("B4").innerHTML ="L"
    document.getElementById("B5").innerHTML ="C"
    document.getElementById("B6").innerHTML ="V"
    document.getElementById("B7").innerHTML ="Ā"
    document.getElementById("B8").innerHTML ="A"
        
}

function dvariants(variants)
{
    
    document.getElementById("B0").innerHTML ="V"
    document.getElementById("B1").innerHTML ="A"
    document.getElementById("B2").innerHTML ="I"
    document.getElementById("B3").innerHTML ="O"
    document.getElementById("B4").innerHTML ="T"
    document.getElementById("B5").innerHTML ="A"
    document.getElementById("B6").innerHTML ="V"
    document.getElementById("B7").innerHTML ="Ā"
    document.getElementById("B8").innerHTML ="A"
}



function parbaudit(izv_variants)
{
    console.log(izv_variants)
    let sal = document.getElementById("r_vards").innerHTML.split(" ").join("")
    
    let pp = sal.split(":")[1]
    console.log(pp)

    let punkti = 0
   
    // if (limenis == 1)
    // {
        if (pp == "AKA")
        {
            punkti +=1
        }
        else if (pp == "ALA")
        {
            punkti +=1
        }
        else
        {
            punkti +=0
        }

        let tikai = document.getElementById("punkti").innerHTML.split(" ").join("")
        let tikai_p = tikai.split(":")[1]
        console.log(tikai_p)
        let visi_p = parseInt(tikai_p) + punkti

        document.getElementById("punkti").innerHTML = "Punkti:"+visi_p

        document.getElementById("r_vards").innerHTML = "Vārds:"
    //}
}

let atvertieLaukumi = []





function veiktGajienu(laukums)
{
    
    let laukumuSaturs = [
        document.getElementById("B0").innerHTML,
        document.getElementById("B1").innerHTML,
        document.getElementById("B2").innerHTML,
        document.getElementById("B3").innerHTML,
        document.getElementById("B4").innerHTML,
        document.getElementById("B5").innerHTML,
        document.getElementById("B6").innerHTML,
        document.getElementById("B7").innerHTML,
        document.getElementById("B8").innerHTML,
        ]
        console.log(laukumuSaturs)
    let atvertsJaunsLaukums = false
    if( atvertieLaukumi.indexOf(laukums) == -1 )
    {
        atvertsJaunsLaukums = true
        console.log(document.getElementById(laukums).innerHTML)
    }
    else
    {
        atvertsJaunsLaukums = false
    }
    
    
    if(atvertsJaunsLaukums)
    {
        
        //Nomainīts uz visibility. Nemaina izkārtojumu!
        
        //KĻŪDA, pēc buru nomaiņas neredz, ka tas ir div elements
        // document.querySelector('#'+laukums+' div').style.visibility="hiden";
        // document.querySelector('#'+laukums+' div').style.opacity="0.1";
        
        
        //  document.querySelector(laukums).style.visibility="hiden";
        // document.querySelector(laukums).style.opacity="0.1";

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

}