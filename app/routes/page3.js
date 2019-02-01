import Route from '@ember/routing/route';

export default Route.extend({
    actions:{
        logout:function(){
            console.log("in logout");
            window.location.reload(true);
        },
    }
});
