let adrese = window.location.hash //Pievieno datus
//console.log(adrese)
adrese = decodeURI(adrese)
adrese = adrese.replace('#','')
adrese = adrese.split(",")
let vards  = adrese[0]
document.querySelector('.virsraksts').innerHTML = 'Sveiks/a, '+vards


// function skaitit_laiku()
// {
//     var countDownTime = new Date("0:0:30").getTime();

//     console.log(countDownTime)

//     var x = setInterval(function() {
//         var now = new Date().getTime();
//         var distance = countDownTime - now;
//         var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//         var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//         document.getElementById("laiks_s").innerHTML = "Laiks:" + minutes + "m " + seconds + "s ";

//         if (distance < 0) {
//             clearInterval(x);
//             document.getElementById("laiks_s").innerHTML += "EXPIRED";
//           }
//         }, 1000);

// }
function iesl_laiku(){
    const timeInSeconds = 2;
    const currentTime = Date.parse(new Date());
    const deadline = new Date(currentTime + timeInSeconds*60*60*1000);
    initializeClock( deadline);
}

function skaitit_laiku(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    
    return {
      total,
      seconds
    };
  }
  
  function initializeClock( endtime) {
    const clock = document.getElementById("laiks_s");
  
    function updateClock() {
      const t = skaitit_laiku(endtime);

      clock.innerHTML = ('Laiks: '+t.seconds+"s");
  
      if (t.total <= 0) {
        //clearInterval(timeinterval);
        let tikai = document.getElementById("punkti").innerHTML.split(" ").join("")
        let tikai_p = tikai.split(":")[1]
        window.location='tops.html/'+vards+'/'+vecums+'/'+tikai_p
      }
    }
  
    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }
  


function var_izv()
{
    const variants = "123"
    let izv_variants = variants[Math.floor(Math.random() * variants.length)]

    if (izv_variants == 1)
    {
        pvariants()
    }
    else if (izv_variants == 2)
    {
        dvariants()
    }
    else if(izv_variants == 3)
    {
        tvariants()
    }
    console.log(izv_variants)
    return izv_variants
}


function pvariants()
{
    
   
    document.getElementById("B0").innerHTML ="A"
    document.getElementById("B1").innerHTML ="K"
    document.getElementById("B2").innerHTML ="A"
    //document.querySelector("#"+"B0"+" div").style.visibility="visible";
    
    
        
}

function dvariants()
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

function tvariants()
{
    
    document.getElementById("B0").innerHTML ="S"
    document.getElementById("B1").innerHTML ="P"
    document.getElementById("B2").innerHTML ="Ķ"
    document.getElementById("B3").innerHTML ="A"
    document.getElementById("B4").innerHTML ="T"
    document.getElementById("B5").innerHTML ="K"
    document.getElementById("B6").innerHTML ="I"
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
   
   
        if (pp == "AKA")
        {
            punkti +=1
        }
        else if (pp == "ALA")
        {
            punkti +=1
        }
        else if (pp == "LABA")
        {
            punkti +=1
        }
        else if (pp == "VĀCA")
        {
            punkti +=1
        }
        else if (pp == "VAI")
        {
            punkti +=1
        }
        else if (pp == "OTA")
        {
            punkti +=1
        }
        else if (pp == "KAĶIS")
        {
            punkti +=1
        }
        else if (pp == "TAVA")
        {
            punkti +=1
        }
        else if (pp == "TAVI")
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