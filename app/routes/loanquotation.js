import Route from '@ember/routing/route';

export default Route.extend({
    model(){
    this.controllerFor('loanquotation').set('showLogin',true);
    this.controllerFor('loanquotation').set('showUser',true);
    var usertype=this.controllerFor('login1').get('usertype');
    console.log(">>>user",usertype)
    this.controllerFor('loanquotation').set('usertype',usertype);
    }
});
