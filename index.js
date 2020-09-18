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
    constructor(name,firstname,gender,mail,birth) {
       this.name = name,
       this.firstname = firstname,
       this.gender = gender,
       this.mail = mail,
       this.birth = birth
    }
    


   
}


if(localStorage.getItem('person')!= null){
    console.log('localStorage detected : ');
    body = JSON.parse(localStorage.getItem('person'))
    console.log(body);
    name.value = `${body.name}`;
    firstname.value =`${body.firstname}`;
    if (body.gender == "monsieur"){
        male.checked=true;
    }
    else if(body.gender =="madame"){
        female.checked=true;
    }
    document.querySelector('#birth').value=body.birth;
}
else{
    console.log('localstorage empty');
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
     
    var birth = new Date(document.querySelector('#birth').value);
    if (mail1.value == mail2.value){
        p.innerText = `Bonjour ${civil} ${firstname.value} ${name.value} , vous êtes née le ${birth}`;
        body = new person(name.value,firstname.value,civil,mail1.value,birth);
        localStorage.setItem('person',JSON.stringify(body));
    }
    else {
        p.innerText = `Les 2 emails ne correspondent pas `
    }
     
 })
 

 div.appendChild(p)

