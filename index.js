 const name = document.querySelector('#nameId');
 const firstname = document.querySelector('#firstnameId');
 const button = document.querySelector('button');
 const div = document.querySelector('#message');
 const p = document.createElement('p');
 const male = document.querySelector('#male');
 const female = document.querySelector('#female');
 const mail1 = document.querySelector('#mail1');
 const mail2 = document.querySelector('#mail2');

 var civil = "";

 class person {
    constructor(name,firstname,gender,mail) {
       this.name = name,
       this.firstname = firstname,
       this.gender = gender,
       this.mail = mail
    }


   
}


if(localStorage.getItem('person')!= null){
    

}


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
     
    const birth = new Date(document.querySelector('#birth').value);
    if (mail1.value == mail2.value){
        p.innerText = `Bonjour ${civil} ${firstname.value} ${name.value} , vous êtes née le ${birth} ${birth.getMonth} ${birth.getFullYear} `;
        localStorage.setItem('person') = new person(name.value,firstname.value,civil,mail1.value);
    }
    else {
        p.innerText = `Les 2 emails ne correspondent pas `
    }
     
 })
 

 div.appendChild(p)

