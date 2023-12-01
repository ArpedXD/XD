// alert('If you refresh the page, your gonna have to make a new acc.');
// alert('accounts doesnt save in this code.');
let i = 1;
let block = document.getElementById("block");
let doing = document.getElementById("doing");
let page = document.getElementById("page");
let textpage = document.getElementById("textpage");
let loginpa = document.getElementById("loginpa");
let loginus = document.getElementById("loginus");
let accountpa = 'password';
let accountus = 'username';
let signupus = document.getElementById("signupus");
let signuppa = document.getElementById("signuppa");
let forms = document.getElementById("forms1");
let pfpus = document.getElementById("pfpus");
let pfp1 = document.getElementById("pfp1");
let rndm = document.getElementById("rndm");
let pic = document.getElementById("picture");
let mbar = document.getElementById("mbar");
let mvar = 0;
function dosomething(){
     if(doing.innerHTML === 'Signup'){
        block.style.left = '0px';
        block.style.borderBottomLeftRadius = '30px';
        block.style.borderBottomRightRadius = '100px';
        doing.innerHTML = 'Login';
        page.innerHTML = 'Good day!' + '</br>' + 'Already ' + 'Have ' + 'an ' + 'account?' + '</br>' + 'Login Now!';
        } else{
        page.innerHTML = 'Good day!' + '</br>' + 'Are you new?' + '</br>' + 'Sign up now!';
        doing.innerHTML = 'Signup';
        block.style.left = '300px';
        block.style.borderBottomLeftRadius = '100px';
        block.style.borderBottomRightRadius = '30px';
     }
}

function signup(){
   accountpa = signuppa.value;
   accountus = signupus.value;
   alert('Done!');
}

function login(){
   if(loginpa.value === accountpa && loginus.value === accountus){
      forms.style.top = '-600px';
      setTimeout(() => {
         pfpus.innerHTML = accountus;
         pfp1.style.top = '50px';
      }, 3000);
      i = 0;
   }else if(loginpa.value === 'a' && loginus.value === 'a'){ //for easy testing
      forms.style.top = '-600px';
      setTimeout(() => {
         pfpus.innerHTML = accountus;
         pfp1.style.top = '50px';
      }, 3000);
      i = 0; // ends here.
   } else if(accountpa === 'password' && accountus === 'username'){
      alert("signup now, there is no account found.");
   } else{
      alert("Wrong password or username, Remember: username and password is CASE SENSITIVE.");
      i++;
   }

   if(i === 4){
      alert("you got the password wrong again, rewrite it using the signup button.");
   } else if(i === 7){
      alert("i'll do it for you.");
      dosomething();
      i = 0;
   }
}

let valuedrn = Math.floor(Math.random() * (670516 - 340700)) + 340700;
rndm.innerHTML += valuedrn;

pic.addEventListener("click",() => {
   let mypfp = prompt('Put your Pictures name below and the picture should be inside the folder','example = picture.');
   if(mypfp){
      let mypfp2 = prompt('what kind of file is it?', 'example = jpeg,jpg and png')
      pic.style.backgroundImage = "url" + "('" + mypfp + "." + mypfp2 + "')";
   } else{
      // do nothing //
   }
})

function gobac(){
   if(forms.offsetTop === 100){
      alert('login is right there!');
   } else{
      forms.style.top = '100px';
      pfp1.style.top = '-600px';
   }
}

pfpus.addEventListener("click",() => {
   let pfpuse = prompt("Display Name","Username");
   if(pfpuse){
   pfpus.innerHTML = "(" + accountus + ")" + pfpuse;
   }  else{
      // do nothing //
   }
})

function Menu(){
   if(mvar === 0){
      mbar.style.width = '130px';
      mvar++;
   } else{
      mvar = 0;
      mbar.style.width = '0px';
   }
}

// document.body.addEventListener("keydown",(yes) => { --- example..
//    if(yes.key == 'a'){
//        alert("yes");
//    }
// });

document.addEventListener("keydown", ae => {
   //ae.preventDefault() // prevents the default,IMPORTANT:
   //Please make sure you put preventDefault inside your IF statements, 
   //to ensure you don't disable ALL default behaviour.

   if(ae.key === 'u' && ae.ctrlKey){ // when ctrl + u is pressed.
      ae.preventDefault()
      alert("worked!");
   };
   
});