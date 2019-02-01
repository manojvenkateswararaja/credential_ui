import Route from '@ember/routing/route';
export default Route.extend({
    isDisplayed:false,
    isDisplayedApproval:false,
    model(){
        this.controllerFor('legalverification').set('showLogin',true);
        this.controllerFor('legalverification').set('showUser',true);
        var usertype=this.controllerFor('login1').get('usertype');
        console.log(">>>user",usertype)
        this.controllerFor('legalverification').set('usertype',usertype);
        var userid= this.controllerFor('legalverification2').get('record.Key');
        console.log("route userid",userid)
        this.controllerFor('legalverification').set("userid",userid);
        var loanID = this.controllerFor('legalverification2').get('record');
        this.controllerFor('legalverification').set('record',loanID);
        console.log("record",loanID)
        var lastdetails= loanID.Record
        console.log(length)
        this.controllerFor('legalverification').set('lastdetails',lastdetails);
        console.log("updates",lastdetails)
        console.log("userdetails page00",loanID)
        var date=lastdetails.date
        var time=lastdetails.time
        this.controllerFor('legalverification').set('date',date);
        this.controllerFor('legalverification').set('time',time);
        var legal=loanID.Record.legal
        console.log("creditscore route ",legal)
        if(legal==null){
            this.controllerFor('legalverification').set('legalButton',false)
        }else if(legal!=null){
            swal("Sorry,You already done with this!", "status", "info");
            this.controllerFor('legalverification').set('legalButton',true)
        }
        
        
        
   }
})