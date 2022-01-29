function creat(){

  adde.classList.add("anm");


  var u = document.getElementById('upto').value;
  var tab = document.getElementById('tab');
  
 let i = 0;
 while (i <= 2*u-1) {
 var row = tab.insertRow(i);
 let j = 0;
    while (j <= u) {
      row.insertCell(j);
      j+=1;
    }
 i+=1
 }

  tab.rows[0].cells[0].innerHTML = 'x';
  tab.rows[0].cells[1].innerHTML = 'y';

  let k = 3;
  while (k <= u) {
    tab.rows[0].cells[2].innerHTML = '&#916';
    tab.rows[0].cells[k].innerHTML = '&#916'+'<sup>'+(k-1)+'</sup>';
    k+=1;
  }

  var tds = document.querySelectorAll('td');

for (let m = u-(-1); m <= 2*u*(u + 1) - 1; m+=2*(u-(-1))){
  tds[m].contentEditable=true;
  tds[m+1].contentEditable=true;
}


}

function approx(num, decplace) {
      return Math.round((10**decplace)*num)/10**decplace;
}

function f(){

  var u = document.getElementById('upto').value;
  var tab = document.getElementById('tab');
  

for (let c = 2; c <= u; c++){
  for (let r = c; r <= 2*u-c; r+=2){
    var a = tab.rows[r+1].cells[c-1].innerHTML;
    var b = tab.rows[r-1].cells[c-1].innerHTML;


      var bmod = b.replace(/[+-]/g, function($1) { return $1 === '+' ? '-' : '+' });
    if (b[0] != '-') {
      document.getElementById('out').value=math.simplify(a+'-'+bmod);
}  else {
      document.getElementById('out').value=math.simplify(a+bmod);
}
      var mod = document.getElementById('out').value;
      var outm = mod.replace(/[*, ]/g, '');

    if (outm < 10**400) {
      outm = approx(Number(outm), 3);
}

      tab.rows[r].cells[c].innerHTML=outm;
          
   }
}

}

 function h(){
  var u = document.getElementById('upto').value;
  var tds = document.querySelectorAll('td');
  var bd = document.getElementById('bd');
  var cell = 2*u*(u + 1) - 1;

 for (let i = 0; i <= cell; i++){
    if (bd.checked==true) {
       tds[i].classList.remove("bord");
      }
      
    if (bd.checked==false) {
       tds[i].classList.add("bord");
      }

  }
     
}



  function k(){
  var u = document.getElementById('upto').value;
  var tds = document.querySelectorAll('td');
  var cell = (u + 1)*(2 * u + 3);
  var dg = document.getElementById('dg');

  for (let i = 0; i <= cell; i++){
    if (tds[i].innerHTML != 'x' & tds[i].innerHTML != 'y' & tds[i].innerHTML.includes("∆") == false & tds[i].innerHTML != '' & dg.checked==true) {
       tds[i].classList.add("des");
      }
      
    if (dg.checked==false) {
       tds[i].classList.remove("des");
      }

  }
     
  }
