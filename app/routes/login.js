import Route from '@ember/routing/route';

export default Route.extend({
    model(){
    this.controllerFor("login").set('isShowingModal',false);

    }
});

 
