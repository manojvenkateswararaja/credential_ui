import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        logout:function(){
            console.log("in logout");
            window.location.reload(true);
        },
    }
});
