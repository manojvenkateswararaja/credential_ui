import Route from '@ember/routing/route';

export default Route.extend({
    
    model(){
         //if it is user request id generated
         var status="Processing"
         this.controllerFor('login1').set('status',status)
         console.log("status>>>>>>property",status)
        
        
     
    }
});
