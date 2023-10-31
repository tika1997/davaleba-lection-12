let Facebookuser={
    userName:"Keti",
    userLastname:"Nazghaidze",
    userDateofbirth:"1995",
    userPassword:"Keti1995",
    userMail:"Nazghaidzeketi@gmail.com",
    userPhonenumber:"599345823",
    userFriendslist :["Nini Nazghaidze","Mariam Seturidze", "Lika Nanava", "Giorgi Lagvilava", "Alex Gogilava","Tamara Nazghaidze","Dima Sichinava", "Jaba Nazghaidze","Mariam Gagadze","Dato Gigauri"] ,
    userIsAuthorised:false,
    userImage:"https://www.facebook.com/qeti.nazgaidze.98",
    userImagealt:"ქეთი ნაზღაიძის ფეისბუქის სურათი",
    userPagelist:["Gudauri Paragliding","Rafting","Sport today","Husky","Winter","Gudauri","Quadro Tours"],
    Login:function(){
        this.userIsAuthorised=true;
        console.log(`ავტორიზაცია  ${this.userName}${this.userLastname} წარმატებულია`)
    },
    LogOut:function(){
        this.userIsAuthorised=false;
        console.log(`ავტორიზაცია  ${this.userName}${this.userLastname} წარუმატებულია`)
    }
    


}
console.log(Facebookuser);
