let adrese = window.location.hash //Pievieno datus
//console.log(adrese)
adrese = decodeURI(adrese)
adrese = adrese.replace('#','')
adrese = adrese.split(",")
let vards  = adrese[0]
document.querySelector('.virsraksts').innerHTML = 'Sveiks, '+vards

function iesl_laiku(){
    const timeInSeconds = 15;
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
        clearInterval(timeinterval);
      }
    }
    
    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
     
  }
  
  function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
  



function var_izv()
{
    const variants = "123"
    let izv_variants = variants[Math.floor(Math.random() * variants.length)]

    if (izv_variants == 1)
    {
        pvariants()
        iesl_laiku()
    }
    else if (izv_variants == 2)
    {
        dvariants()
        iesl_laiku()
    }
    else if(izv_variants == 3)
    {
        tvariants()
        iesl_laiku()
    }
    console.log(izv_variants)
    return izv_variants
}


function pvariants()
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



function parbaudit()
{
    
    let sal = document.getElementById("r_vards").innerHTML.split(" ").join("")
    
    let pp = sal.split(":")[1]
    

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
        
        //VISS IR VIENKĀRŠĀK!!!!!
        let sadal = laukums[1]   //Paņem laukuma numuru
        let kurs_burts = laukumuSaturs[sadal]   //Paņem attiecīgo burtu no laukumuSaturs
        document.getElementById("r_vards").innerHTML +=kurs_burts  //Pievieno burtu
        
    }

}