import Route from '@ember/routing/route';
export default Route.extend({
    isDisplayed:false,
    isDisplayedApproval:false,
    model(){
        
        this.controllerFor('creditscore').set('showLogin',true);
        this.controllerFor('creditscore').set('showUser',true);
        var usertype=this.controllerFor('login1').get('usertype');
        console.log(">>>user",usertype)
        this.controllerFor('creditscore').set('usertype',usertype);
        
        var userid= this.controllerFor('creditscore2').get('record.Key');
        console.log("route userid",userid)
        this.controllerFor('creditscore').set("userid",userid);
    
        var loanID = this.controllerFor('creditscore2').get('record');
        this.controllerFor('creditscore').set('record',loanID);
        console.log("record",loanID)
        var lastdetails= loanID.Record
        console.log(length)
        this.controllerFor('creditscore').set('lastdetails',lastdetails);
        console.log("updates",lastdetails)
        console.log("userdetails page00",loanID)
        var date=lastdetails.date
        var time=lastdetails.time
        this.controllerFor('creditscore').set('date',date);
        this.controllerFor('creditscore').set('time',time);
        var creditscore=loanID.Record.creditscore
        console.log("creditscore route ",creditscore)
        if(creditscore==null){
            this.controllerFor('creditscore').set('creditscoreButton',false)
        }else if(creditscore!=null){
            swal("Sorry,You already done with this!", "status", "info");
            this.controllerFor('creditscore').set('creditscoreButton',true)
        }
        
        
   }
})