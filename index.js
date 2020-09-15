 const name = document.querySelector('#nameId');
 const firstname = document.querySelector('#firstnameId');
 const button = document.querySelector('button');
 const div = document.querySelector('#message');
 const p = document.createElement('p');
 const male = document.querySelector('#male');
 const female = document.querySelector('#female');

 var civil = "";


 button.addEventListener('click', (event) => {
     
     event.preventDefault()
     if(male.checked){
        civil = male.value
     }
     else if(female.checked){
         civil = female.value
     }
     else{
         alert('Veuillez selectionner un genre ! ');
     }
     const birth = new Date(document.querySelector('#birth'));
     p.innerText = `Bonjour ${civil} ${firstname.value} ${name.value} , vous êtes née le ${birth.getTime} ${birth.getMonth} ${birth.getFullYear} `
 })
 

 div.appendChild(p)