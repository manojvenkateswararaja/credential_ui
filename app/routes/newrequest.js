import Route from '@ember/routing/route';

export default Route.extend({
    showDialog:false,
    model(){
        var firstname=this.controllerFor('login1').get('firstname');
        console.log(">>>user",firstname)
        this.controllerFor('newrequest').set('firstname',firstname);
        var userid= this.controllerFor('login1').get('userid');
        this.controllerFor('newrequest').set('userid',userid)
        console.log("route userid",userid)
        this.controllerFor('newrequest').set('showLogin',true);
        this.controllerFor('newrequest').set('showUser',true);
    }
});
