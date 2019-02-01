import Controller from '@ember/controller';
export default Controller.extend({
    
    actions: {
       
        home2:function(showrecords)
{
   
   console.log("po0pr up",showrecords)
   if(showrecords==""){
       swal("Sorry!", "You haven,t made any request!", "error");
   }else if((showrecords!=null)) {
    // swal("Good job!", "User Account!", "success");
   this.transitionToRoute('home2');
 
   }
  
    
   
},
     gotoApply:function(){
        // window.location.href = "newrequest";
             this.transitionToRoute('newrequest');
             //this.transitionToRoute('ember-paper-stepper');
        },
        logout:function(){
            console.log("in logout");
            window.location.reload(true);
        },
    }

   
});