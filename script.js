alert("CHECK IN DESKTOP VIEW");
var date = Date();
var name = prompt("WHAT ARE YOU DOING BROTHER?");
alert("DESKTOP SITE");
document.write(name + "<br>");
 document.write(document.baseURI+"<br>")
document.write(document.title+"<br>");
document.write(date);
var pars = document.getElementsByTagName("p");
document.write(pars + "<br/>");
document.write(pars.length);
document.getElementById('test').innerHTML = "heeeeeeeeee!";
console.log("this is is ");
let string ='';
let buttons = document.querySelectorAll('.but');
Array.from(buttons).forEach((but)=>{
  but.addEventListener('click', (e) =>{
    if(e.target.innerHTML == '='){
       string  = eval(string);
       document.querySelector('input').value = string;

    }
    else if(e.target.innerHTML == 'C'){
      string  = '';
      document.querySelector('input').value = string;

   }
   else if(e.target.innerHTML == 'a'){
    string  = '';
    document.querySelector('input').value = string;

   }
    else{
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
    }
  

})
})

