import Controller from '@ember/controller'; 
export default Controller.extend({
  isShowingModel:false,
  showhome:true,
  shoUserInfo:false,
  showDashboard:true,
    
  actions: {
  
   
    userdetails: function(showrecords) {
     this.set('record',showrecords)
     console.log("get credit score",showrecords)
      var score=showrecords.Record.creditscore
      this.set('score',score)
      var userId=showrecords.Key
      this.set('userId',userId)
      console.log("i got creditscore in bank",score)
       if(score == null){
           this.transitionToRoute('bankdashboard2')
       }
      else if(score != null){
           this.transitionToRoute('bankdashboard2')   
       }
     
      // this.transitionToRoute('userdetails');
    },
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
  },
  }  
});


