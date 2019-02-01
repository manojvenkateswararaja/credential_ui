import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        next:function(){
            this.transitionToRoute('preclosure');
        }
    }
});
