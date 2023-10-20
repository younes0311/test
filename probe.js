let nachname = document.getElementById('nachname');
let vorname = document.getElementById('vorname');
let gd = document.getElementById('gd');
let str = document.getElementById('str');
let  hn= document.getElementById('hn');
let plz = document.getElementById('plz');
let stadt = document.getElementById('stadt');
let ea = document.getElementById('ea');
let sendBtn = document.getElementById('sendbtn');


let userdata;
if(localStorage.Kunden !=null){
    userdata =JSON.parse(localStorage.Kunden)
  
}else{
    userdata=[];
}


sendBtn.onclick=function(){
    let userinfo={
nachname:nachname.value,
vorname:vorname.value,
Geburtsdatum:gd.value,
Straße:str.value,
Hausnummer:hn.value,
Postleitzahl:plz.value,
stadt:stadt.value,
EmailAdresse:ea.value,
    }
    userdata.push(userinfo);
    localStorage.setItem('Kunden',JSON.stringify(userdata));
    console.log(userdata);
Clear();
removeAll()
}


function Clear(){
    nachname.value='';
    vorname.value='';
    gd.value='';
    str.value='';
    hn.value='';
    plz.value='';
    stadt.value='';
    ea.value=''
}

let box=document.getElementById('box');
let thanks=document.getElementById('thanks');


function removeAll(){
box.style.display='none';
thanks.style.display='flex';
}

