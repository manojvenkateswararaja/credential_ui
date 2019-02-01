import Controller from '@ember/controller';

export default Controller.extend({
    showCreditscore:true,
    actions:{
        userdetails: function(showrecords) {
            this.set('record', showrecords);
                 this.transitionToRoute('legalverification')
             },
        reject:function(){
            var reject="Your property details has been failed for verification"
            alert("Your property details has been failed for verification");
        },
        okay:function(){
            this.set('showDialog',false)
          },
          closeDialog:function(){
            this.set('showDialog',false)
        },
        signout:function(){
            this.transitionToRoute('login1');
        },
        logout:function(){
            console.log("in logout");
            window.location.reload(true);
        },
    }
});
