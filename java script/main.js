// change color 

        let signinBtn=document.querySelector(".signinBtn")
        let signupBtn=document.querySelector(".singupBtn")
        let formBx=document.querySelector(".formBx")
        let body=document.querySelector("body")
        signinBtn.addEventListener("click",function(){
        formBx.classList.remove("active")
        body.classList.remove("active")
        })

        signupBtn.addEventListener("click", function () {
        formBx.classList.add("active")
        body.classList.add("active")
        })

// password validation in sign up
let userSignUp=document.querySelector(".signupForm input[placeholder='Username']")
console.log(userSignUp)



let passSignUp=document.querySelector(".signupForm input[placeholder='Password']")

passSignUp.oninput=function(e){
document.querySelector(".collapse").classList.add("show")
}

passSignUp.addEventListener("blur",()=>{
document.querySelector(".collapse").classList.remove("show")
})


// show and hidden the text in password

let cnotainerEye=document.querySelector(".eyeContainer")
let passInput=document.querySelector(".passContainer input[type='password']")

cnotainerEye.addEventListener("click",function(){
        if(passInput.getAttribute("type")==='password'){
                passInput.setAttribute("type","text")
                cnotainerEye.classList.add("hide")
        }else{
                passInput.setAttribute("type","password")
                cnotainerEye.classList.remove("hide")
        }})

        
        let lower=document.querySelector(".lower")
        let upper=document.querySelector(".uper")
        let number=document.querySelector(".number")
        let specialC=document.querySelector(".specialC")
        let lest8=document.querySelector(".least8")
console.log(lest8)
        function checkPassword(data){
                // reqular expression for li
                let lowerRe=/[a-z]/g
                let upperRe=/[A-Z]/g
                let numberRe=/[0-9]/g
                let specialCRe=/!|@|#|\$|%|\^|&|\*| /g
                let lest8Re=/.{8,}/ig


                // test password value with reqular expression
                if(lowerRe.test(data)){
                        lower.classList.add("valid")
                }else{
                        lower.classList.remove("valid")
                }

                if(upperRe.test(data)){
                        upper.classList.add("valid")
                }else{
                        upper.classList.remove("valid")
                }

                if(numberRe.test(data)){
                        number.classList.add("valid")
                }else{
                        number.classList.remove("valid")
                }

                if(specialCRe.test(data)){
                        specialC.classList.add("valid")
                }else{
                        specialC.classList.remove("valid")
                }

                if(lest8Re.test(data)){
                        lest8.classList.add("valid")
                }else{
                        lest8.classList.remove("valid")
                }
                

        }
        


let cnotainerEyer=document.querySelector(".eyeContainerr")
let passInputr=document.querySelector(".passContainerr input[type='password']")

cnotainerEyer.addEventListener("click",function(){
        if(passInputr.getAttribute("type")==='password'){
                passInputr.setAttribute("type","text")
                cnotainerEyer.classList.add("hide")
        }else{
                passInputr.setAttribute("type","password")
                cnotainerEyer.classList.remove("hide")
        }})

// revison jason and promis

// let JASONOBJECT='{"Moamedtalat":"alsdkfja","ahmed":"aaaaaaa"}'
// console.log(JASONOBJECT)

// let object=JSON.parse(JASONOBJECT)
// console.log(object)

// object["Moamedtalat"]="Amed";
// object["ahmed"]="Moaz";

// console.log(object)

// let jason=JSON.stringify(object)
// console.log(jason)

// let myRequest =new XMLHttpRequest();
// myRequest.open("GET","https://api.github.com/users/mohamed1-1137/repos",true)
// myRequest.send()

// myRequest.onreadystatechange=function(){
//         if(this.status===200 && this.readyState===4){
//         let object=JSON.parse(this.responseText);
//         for(let i=0;i<object.length;i++){
//         let div=document.createElement("div")
//         let repoName=document.createTextNode(object[i].name)
//         console.log(object[i].name)
//         div.appendChild(repoName)
//         document.body.appendChild(div)
//         }
//         }
        
        
// }

// let myPromise=new Promise(function(resolvevalue,rejectvalue){
//         let connect=true;
//         if(connect){
//                 resolvevalue("Mohamed talat ahmed")
//         }else{
//                 rejectvalue(Error("this is error"))
//         }
// }).then(
//         (resolve)=>console.log(resolve),
//         (reject)=>console.log(reject)
// )
// console.log(myPromise)

// let apilink=function(api){
// return new Promise((resolve,reject)=>{
//         let myRequest= new XMLHttpRequest();
//         myRequest.onload=function(){
//                 if(this.status===200 && this.readyState===4){
//                         resolve(JSON.parse(this.responseText))
//                 }else{
//                         reject(Error("No Data Found"))
//                 }
//         };
//         myRequest.open("GET",api);
//         myRequest.send()
// })
// }

// apilink("https://api.github.com/users/mohamed1-1137/repos").then(
//         (result)=>{
//                 result.length=1
//                 return result
//         }
// ).then(
//         (result)=>{
//                 console.log(result[0].full_name)
//         }
// )

// fetch("https://api.github.com/users/mohamed1-1137/repos").then((result)=>{
// let myData=result.json()
// console.log(myData)
// return myData
// }).then((result)=>{
// console.log(result[0].id)
// console.log(result[1].id)
// console.log(result[2].id)


// })

function prom(){
        let user=[]
        if(user.length>0){
                return Promise.resolve("user found")
        }else{
                return Promise.reject("No user found")
        }
}
prom().then(
        (resolvevaleu)=>console.log(resolvevaleu),
        (rejectvalue)=>console.log(rejectvalue)
)