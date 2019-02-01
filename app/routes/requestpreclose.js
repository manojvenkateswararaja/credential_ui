import Route from '@ember/routing/route';

export default Route.extend({
    isGenerated:false,
    model(){
        this.controllerFor('requestpreclose').set('showLogin',true);
        this.controllerFor('requestpreclose').set('showUser',true);
        var usertype=this.controllerFor('login1').get('usertype');
        console.log(">>>user",usertype)
        this.controllerFor('requestpreclose').set('usertype',usertype);
        var record = this.controllerFor('bankdashboard').get('record');
        this.controllerFor('requestpreclose').set('record',record);
        console.log("record",record)
        var date=new Date().toLocaleDateString();
        var time=new Date().toTimeString();
        this.controllerFor('requestpreclose').set('date',date);
        console.log("date",date)
        this.controllerFor('requestpreclose').set('time',time);
        console.log("time",time)
        var EMI=record.Record.EMI
        this.set('EMI',EMI)
        console.log("bank preclosure>>",EMI)
      

       
    }
});
