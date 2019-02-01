import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        this.controllerFor('loanschedule').set('showLogin',true);
        this.controllerFor('loanschedule').set('showUser',true);
        var usertype=this.controllerFor('bankdashboard').get('usertype');
        this.controllerFor('loanschedule').set('usertype',usertype);
        var loanID = this.controllerFor('userdetailsdec').get('record')
        this.controllerFor('loanschedule').set('record',loanID);
        // var details = this.controllerFor('userdetailsdec').get('details');
        var userid= this.controllerFor('userdetailsdec').get('record.Key');
        console.log("route userid",userid)
        this.controllerFor('loanschedule').set("userid",userid);
        var details=loanID.Record
        this.controllerFor('loanschedule').set('details',details) 
        console.log("loan schedule details",details)
        console.log("loan schedule records>>",loanID)
        var loanamount=loanID.Record.amount
        this.controllerFor('loanschedule').set('loanamount',loanamount) 
        console.log("loan amount",loanamount)
        
    }
});
