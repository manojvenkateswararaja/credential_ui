import Route from '@ember/routing/route';

export default Route.extend({

    model(){
        
        var newRequestController = this.controllerFor('newrequest');
        var genderType=newRequestController.get('genderType');
        var nationalityType=newRequestController.get('nationalityType');
        var propertyType = newRequestController.get('propertyType');
        var mortgaugeType=newRequestController.get('mortgaugeType');
        var Company=newRequestController.get('Company');
        var Amount=newRequestController.get('Amount');
        var price=newRequestController.get('price');
        var location=newRequestController.get('location');
        var country=newRequestController.get('country');
        var paymentPercentage=newRequestController.get('paymentPercentage');
        var Age=newRequestController.get('Age');
        var occupation=newRequestController.get('occupation');
        var Choice=newRequestController.get('Choice');
        var income=newRequestController.get('income');
        var firstname=newRequestController.get('firstname');
        var lastname=newRequestController.get('lastname');
        var number=newRequestController.get('number');
        var email=newRequestController.get('email');
        this.controllerFor('employee-detail').set('Company',Company);
        this.controllerFor('employee-detail').set('genderType',genderType);
        this.controllerFor('employee-detail').set('nationalityType',nationalityType);
        this.controllerFor('employee-detail').set('propertyType',propertyType);
        this.controllerFor('employee-detail').set('mortgaugeType',mortgaugeType);
        this.controllerFor('employee-detail').set('Amount',Amount);
        this.controllerFor('employee-detail').set('location',location);
        this.controllerFor('employee-detail').set('price',price);
        this.controllerFor('employee-detail').set('country',country);
        this.controllerFor('employee-detail').set('paymentPercentage',paymentPercentage);
        this.controllerFor('employee-detail').set('Age',Age);
        this.controllerFor('employee-detail').set('occupation',occupation);
        this.controllerFor('employee-detail').set('Choice',Choice);  
       this.controllerFor('employee-detail').set('income',income);  
       this.controllerFor('employee-detail').set('firstname',firstname);  
      this.controllerFor('employee-detail').set('lastname',lastname); 
      this.controllerFor('employee-detail').set('number',number);  
      this.controllerFor('employee-detail').set('email',email);  
}
});
