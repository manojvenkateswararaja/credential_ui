import Controller from '@ember/controller';

export default Controller.extend({
showLogin:true,
isShowHome:false,
   actions:{
    gotologin:function(){
        this.transitionToRoute('login');       
       },
       gotosignup:function(){
        this.transitionToRoute('signup');
       },
       gotohome:function(){
        this.transitionToRoute('home');
     },
  
   }
});