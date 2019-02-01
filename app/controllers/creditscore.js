import Controller from '@ember/controller'; 
export default Controller.extend({
  isShowingModel:false,
  showhome:true,
  shoUserInfo:false,
  showCreditscore:true,
  isCreditGen:false,
  creditscoreForwardButton:true,
  actions: {
    signUp(event){ 
      // Only when assigning the action to an inline handler, the event object
      // is passed to the action as the first parameter.
      swal("Sorry,You already done with this!", "status", "info");
      event.click("hiiiii")
    },
    click_button()
    {
      $('#my_button').mousedown(function(event){
           event.preventDefault();
           if(event.button == 0)
          console.log('Left button')
         if(event.button == 2)
                console.log('Rigth button')




                
    });               
    },
    // ApproveUpdate:function (showrecords,records,creditscore)
    ApproveUpdate:function (lastdetails,records,creditscore) {
      var modalvalue = this.get('showDialog')
      
                if(modalvalue!=true){
                  this.set('showDialog',true)
                }
                else{
                  this.set('showDialog',false)
                }
          var mycontroller=this;
          console.log("record>>>>>>>>loan",lastdetails)
          console.log("creditscore>>>>>>",creditscore)
          // console.log("key>>>>>>",records)
          var date=new Date().toLocaleDateString();
          this.set('date',date)
          var time=new Date().toTimeString();
          this.set('time',time)
          var userid=this.get('userid')
          this.set('userid',userid)
          console.log("userid",userid)
         var transactionstring={
           "id":userid,"transactionstring":{
            "loan":lastdetails.loan,
            "amount":lastdetails.amount,
            "propertyType":lastdetails.propertyType,
            "income":lastdetails.income,
            "location":lastdetails.location,
            "year":lastdetails.year,
            "size":lastdetails.size,
            "income":lastdetails.income,
            "fname":lastdetails.fname,
            "lname":lastdetails.lname,
            "estimated":lastdetails.estimated,
            "age":lastdetails.age,
            "phone":lastdetails.phone,
            "email":lastdetails.email,
            "address":lastdetails.address,
            "country":lastdetails.country,
            "requestid":lastdetails.requestid,
            "occupation":lastdetails.occupation,
            "genderType":lastdetails.genderType,
            "nationalityType":lastdetails.nationalityType,
            "Company":lastdetails.Company,
            "joiningdate":lastdetails.joiningdate,
            "salary":lastdetails.salary,
            "address":lastdetails.address,
            "bank":"applied",
            "creditscore":creditscore,
            "statusForCreditRequest":"Score Generated",
            "legal":"",
            "date":date,
            "time":time
          }
        }
        
        console.log("transactionstring-update Approve----->",transactionstring);
        var token = sessionStorage.getItem('token');
        console.log("manoj",token);
          return $.ajax({
          url:'http://206.189.138.133:8082/updatetransaction',//web service for credit score
          type: 'POST',
          contentType:'application/json',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-access-token': token
        },
          data:JSON.stringify(transactionstring),
          success: function(response) {
          console.log("service update transaction")
          mycontroller.set('showCredit',true)
          var record=response
          console.log("my updated data with creditscore>>>>>>>>>>>>.",record);
       
            },
          })
        },
    
      closeDialog:function(){
          this.set('showDialog',false)
      },
      okay:function(){
        this.set('isCreditGen',true)
        // console.log("isCreditGen",isCreditGen)
        this.set('showDialog',false)
      },
      creditscore: function(records) {
         var requestid={
           "records":records
         }
        console.log("creditscore---request id--->",requestid);
        var mycontroller=this
          return $.ajax({
          url:'http://206.189.138.133:8082/creditscore',//web service for credit score
          type: 'POST',
          contentType:'application/json',
          data:JSON.stringify(requestid),
          success: function(response) {
          console.log("service creditscore") 
         if(response!=null){
          mycontroller.set('creditscoreForwardButton',false)
         }else{
          mycontroller.set('creditscoreForwardButton',true)
         }
          var creditscore=response.creditscore
          mycontroller.set('creditscore',creditscore)
          
         
          console.log(creditscore);
      
            }
            })
      
    },
    signout:function() {
      this.transitionToRoute('login1');
  },
  openNav:function(){
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
},
closeNav: function() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
},
logout:function(){
  console.log("in logout");
  window.location.reload(true);
},  
}
})
  
  



