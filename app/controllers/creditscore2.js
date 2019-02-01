import Controller from '@ember/controller'; 
export default Controller.extend({
  isShowingModel:false,
  showhome:true,
  shoUserInfo:false,
  showDashboard:true,
    
  actions:{
   
    userdetails: function(showrecords) {
      this.set('record', showrecords);


           this.transitionToRoute('creditscore')
       
       },
     
      // this.transitionToRoute('userdetails');
    
    signout:function() {
      this.transitionToRoute('login1');
  },
  openNav:function(){
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
},
closeNav: function() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
},
timestamp:function(){
  this.transitionToRoute('timestamp')
},
logout:function(){
  console.log("in logout");
  window.location.reload(true);
}
},
   
});


