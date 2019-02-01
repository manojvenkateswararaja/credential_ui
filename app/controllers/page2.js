import Controller from '@ember/controller';

export default Controller.extend({
    showRequest:true,
        selectedOption: null,
        showAnimatedDialog:false,
        mylist: ["house","condo","land"],
        mortgaugeTypeList:["home","car"],
        downPaymentList:["Not Applicable","0% - 5%","6% - 10%","11%-15%"],
        jobOption:["First choice","Second choice","Third choice"],
        CompanytList:["Company One","Company Two"],
        genderlist:["male","female"],
        nationalitylist:["indian","other"],
        actions:{
            saveModel:function(){
                var loan=this.get('loan');
                console.log(loan);
                var amount=this.get('amount');
                console.log(amount);
                var property=this.get('propertyType');
                console.log(property);
                //   this.transitionToRoute('page3');
                // this.transitionToRoute('page3');
            },
            previousStep:function(){
                this.transitionToRoute('newrequest');
            },
            targetButton:function(){
              var modalvalue = this.get('showAnimatedDialog')
              
                        if(modalvalue!=true){
                          this.set('showAnimatedDialog',true)
                        }
                        else{
                          this.set('showAnimatedDialog',false)
                        }
            },
            openNav:function(){
                document.getElementById("mySidenav").style.width = "250px";
                document.getElementById("main").style.marginLeft = "250px";
            },
            
            closeNav: function() {
                document.getElementById("mySidenav").style.width = "0";
                document.getElementById("main").style.marginLeft= "0";
            },
            goTonewrequest:function(){
                this.transitionToRoute('newrequest');
            },
            goToloan:function(){
                this.transitionToRoute('page2');  
            },
            goToproperty:function(){
                this.transitionToRoute('page3');  
            },
            goToemployment:function(){
                this.transitionToRoute('page4');  
                
            },
            logout:function(){
                console.log("in logout");
                window.location.reload(true);
            },
        }

    
});
