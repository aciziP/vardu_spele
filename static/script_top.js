const API = "https://varduspele.viktorijapizica.repl.co"

let adrese = window.location.hash //Pievieno datus
//console.log(adrese)
adrese = decodeURI(adrese)
adrese = adrese.replace('#','')
adrese = adrese.split(",")
let vards  = adrese[0]
let vecums = adrese[1]
let punkti = adrese[2]

document.querySelector('.virsraksts_top').innerHTML = 'Apsveicam '+vards+', Jūs ieguvāt '+punkti+' punktus.';



function pievienotTop()
{
    console.log('sutitZinu() darbojas');

    //chataZinas.innerHTML+='<br/>'+manaZina.value

    fetch(API+'/sutit/'+vards+'/'+vecums+'/'+punkti)
}

async function ieladetDBSaturu()
{
    let datiNoServera = await fetch(API + '/lasit')
    let dati = await datiNoServera.json()
    console.log(dati)
    //chataZinas.innerHTML = dati
    console.log(dati[0])

  let tabula = document.querySelector(".tops");

  tabula.innerHTML =`<tr>
                    <td>Spēlētājs</td><td>Vecums</td><td>Punkti</td><td>Datums</td>
                </tr>`

  for (i = 0; i < dati.length; i++)
  {
      

      

      // console.log(dati[i]['id'])
      // console.log(dati[i]['vards'])
      // console.log(dati[i]['vecums'])
      // console.log(dati[i]['punkti'])
      // console.log(dati[i]['datums'])

    

      tabula.innerHTML = tabula.innerHTML+`
      <tr id="`+dati[i]['id']+`">
      <td> `+dati[i]['vards']+` </td>
      <td> `+dati[i]['vecums']+` </td>
      <td> `+dati[i]['punkti']+` </td>
      <td> `+dati[i]['datums']+` </td>
      </tr>`;

  }

}

setInterval(ieladetDBSaturu,1000)

// async function ieladetChataZinasJson()
// {
//     let datiNoServera = await fetch(API + '/lasit');
//     let dati = await datiNoServera.json();
    
//     //console.log(await dati[0]['zina'] )
//     chataZinas.innerHTML = '';
    
//     i = 0;
//     while ( i < await dati.length )
//     {
//         //console.log(i);
//         let laiks = '[<i>' + '????          ' + '</i>] ';
//         if ("laiks" in dati[i]) {
//             laiks = '[<i>' + dati[i]['laiks'] + '</i>] ';
//         }
//         chataZinas.innerHTML = chataZinas.innerHTML + laiks + dati[i]['vards']+': '+dati[i]['zina']+'<br />';

//         i = i+1;
//     }

//     chataZinas.scrollTop = chataZinas.scrollHeight;
// }//beidzas ieladetChataZinasJson()

// setInterval( ieladetChataZinasJson, 1000 )





// const API = "https://varduspele.viktorijapizica.repl.co"
// // let manaZina = document.querySelector('.manaZina');//Jāraksta nosaukums cs stilā
// // //reference atsauce uz svaigāko ziņu (jo bez .value)
// // let chataZinas = document.querySelector('.chataZinas')
// // let vards = document.querySelector('.vards')

// function sutitZinu()
// {
//     console.log('sutitZinu() darbojas');

//     //chataZinas.innerHTML+='<br/>'+manaZina.value

//     fetch(API+'/sutit/'+vards.value+'/'+manaZina.value+'/'+punkti.value)
// }

// async function ieladetChataZinas()
// {
//     let datiNoServera = await fetch(API + '/lasit')
//     let dati = await datiNoServera.text()
//     //console.log(dati)
//     chataZinas.innerHTML = dati
// }

// //setInterval(ieladetChataZinas,1000)

// async function ieladetChataZinasJson()
// {
//     let datiNoServera = await fetch(API + '/lasit');
//     let dati = await datiNoServera.json();
    
//     //console.log(await dati[0]['zina'] )
//     chataZinas.innerHTML = '';
    
//     i = 0;
//     while ( i < await dati.length )
//     {
//         //console.log(i);
//         let laiks = '[<i>' + '????          ' + '</i>] ';
//         if ("laiks" in dati[i]) {
//             laiks = '[<i>' + dati[i]['laiks'] + '</i>] ';
//         }
//         chataZinas.innerHTML = chataZinas.innerHTML + laiks + dati[i]['vards']+': '+dati[i]['zina']+'<br />';

//         i = i+1;
//     }

//     chataZinas.scrollTop = chataZinas.scrollHeight;
// }//beidzas ieladetChataZinasJson()

// setInterval( ieladetChataZinasJson, 1000 )





// //no adreses iegūst vārdu un ievieto to virsrakstā
// let adrese = window.location.hash;
// adrese = adrese.replace('#','');
// adrese = decodeURI(adrese);
// adrese = adrese.split(",");

// let vards   = adrese[0]
// let vecums  = adrese[1]
// let punkti = adrese[2]

// document.querySelector('.virsraksts').innerHTML = 'Apsveicam '+vards+', punkti:'+punkti;


// let datums = new Date();
// let datumsString = datums.getFullYear()+'-'+datums.getMonth()+'-'+datums.getDate()

// async function iegutDatusNoApi(url)
//   {
//     let datiNoServera = await fetch(url);
//     let datiJson = await datiNoServera.json();
//     return datiJson;
//   }

  
// async function atlasitTop()
// {

//     //let topsJson = await iegutDatusNoApi('https://armandspucs.github.io/atminas_spele_pabeigts_2/rezultati.json');
//     let topsJson = await iegutDatusNoApi('topData');
//     //console.log(datiJson);

//   for (i = 0; i < topsJson.length; i++)
//   {
      

//       let tabula = document.querySelector(".tops");

      

//       tabula.innerHTML = tabula.innerHTML+`
//       <tr id="`+topsJson[i]['id']+`">
//       <td> `+topsJson[i]['vards']+` </td>
//       <td> `+topsJson[i]['vecums']+` </td>
//       <td> `+topsJson[i]['punkti']+` </td>
//       <td> `+topsJson[i]['datums']+` </td>
//       </tr>`;

//   }

// }

// atlasitTop();



// function pievienotTop()
// {
//     let tabula = document.querySelector(".tops");


//     tabula.innerHTML = tabula.innerHTML+`
//     <tr id="jauns">
//     <td> `+vards+` </td>
//     <td> `+vecums+` </td>
//     <td> `+punkti+` </td>
//     <td> `+datumsString+` </td>
//     </tr>`;
// }