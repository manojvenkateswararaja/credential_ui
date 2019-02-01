import Route from '@ember/routing/route';

export default Route.extend({
    
    model(){
        
        this.controllerFor('userloanschedule').set('showLogin',true);
        this.controllerFor('userloanschedule').set('showUser',true);
        var usertype=this.controllerFor('login1').get('usertype');
        console.log(">>>user",usertype)
        this.controllerFor('userloanschedule').set('usertype',usertype);
        var userid= this.controllerFor('home').get('userid');
        console.log("route userid",userid)
        this.controllerFor('userloanschedule').set("userid",userid);
    var LoanController=this.controllerFor('home2').get('record')
    this.controllerFor('userloanschedule').set('record',LoanController)
    var payments=LoanController.Records.payments
    this.controllerFor('userloanschedule').set('payments',payments)
    console.log("userloanschedule>>>>",LoanController)
    console.log("userloanschedule>>>>details",LoanController.Records.statusForCreditRequest)
    if(LoanController.Records.statusForCreditRequest=="Loan Scheduled"){
        this.controllerFor('userloanschedule').set('IsAlreadyDone',false)
        this.controllerFor('userloanschedule').set('DisablePrecoleButton',true)   
    }else if(LoanController.Records.statusForBankLegal=="Loan successfully accepted by user"){
        this.controllerFor('userloanschedule').set('IsAlreadyDone',true)
        this.controllerFor('userloanschedule').set('DisablePrecoleButton',false)
    }else{
        this.controllerFor('userloanschedule').set('IsAlreadyDone',false)
        this.controllerFor('userloanschedule').set('DisablePrecoleButton',true)

    }
        }
});
