let adrese = window.location.hash //Pievieno datus
//console.log(adrese)
adrese = decodeURI(adrese)
adrese = adrese.replace('#','')
adrese = adrese.split(",")
let vards  = adrese[0]
document.querySelector('.virsraksts').innerHTML = 'Sveiks, '+vards


// let laukumuSaturs = ['A','K','A','B','L','C','O','Ā','A']
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
        
        //pedejieDivi.push(laukums)
        //let burts = 
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