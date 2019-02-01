import Route from '@ember/routing/route';

export default Route.extend({
 
        model(){
           var newRequestController = this.controllerFor('newrequest');
            var page2Controller=this.controllerFor('page2');
            var page3Controller=this.controllerFor('page3');
            var genderType=newRequestController.get('genderType');
            var nationalityType=newRequestController.get('nationalityType');
            var fname=newRequestController.get('fname');
            var lname=newRequestController.get('lname');
            var age=newRequestController.get('age');
            var phone=newRequestController.get('phone');
            var email=newRequestController.get('email');
            var Occupation=newRequestController.get('occupation');
            var address=newRequestController.get('address');
            var country=newRequestController.get('country');
            var loan=page2Controller.get('loan');
            var amount=page2Controller.get('amount');
            var propertyType=page2Controller.get('propertyType');
          
            var year=page3Controller.get('year');
            var location=page3Controller.get('location');
            var size=page3Controller.get('size');
            this.controllerFor('page4').set('loan',loan);
            this.controllerFor('page4').set('amount',amount);
            this.controllerFor('page4').set('propertyType',propertyType);
            
           // console.log("page4 route",property);
            this.controllerFor('page4').set('year',year);
            this.controllerFor('page4').set('location',location);
            this.controllerFor('page4').set('size',size);
            this.controllerFor('page4').set('email',email);
            this.controllerFor('page4').set('occupation',Occupation);
            this.controllerFor('page4').set('address',address);
            this.controllerFor('page4').set('country',country);
            this.controllerFor('page4').set('genderType',genderType);
            this.controllerFor('page4').set('nationalityType',nationalityType);
            this.controllerFor('page4').set('fname',fname);
            this.controllerFor('page4').set('lname',lname);
            this.controllerFor('page4').set('age',age);
            this.controllerFor('page4').set('phone',phone);
    
        }
     

    
});
