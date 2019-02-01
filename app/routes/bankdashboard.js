import Route from "@ember/routing/route";
export default Route.extend({
  IsLegalValidated: false,
  isDefaultStatus: false,
  IsCreditStatus: false,
  isStatus: true,
  isLoanReject: false,
  isBankpreclose: false,
  model() {
    this.controllerFor("bankdashboard").set("showLogin", true);
    this.controllerFor("bankdashboard").set("showUser", true);
    var usertype = this.controllerFor("login1").get("usertype");
    console.log(">>>user", usertype);
    this.controllerFor("bankdashboard").set("usertype", usertype);
    var myroute = this;
    var token = sessionStorage.getItem("token");
    console.log("manoj", token);
    return $.ajax({
      url: "http://206.189.138.133:8082/getloandetails",
      type: "GET",
      contentType: "application/json",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": token
      },
      success: function(response) {
        var showrecords = response.message;
        console.log("Allrequest", showrecords);
        var token = showrecords.token;
        console.log("token", token);
        myroute.controllerFor("bankdashboard").set("showrecords", showrecords);
        var len = showrecords.length;
        console.log("len show>>>", len);
        for (let i = 0; i <= len - 1; i++) {
          var record = showrecords[i];
          myroute.controllerFor("bankdashboard").set("record", record);
          console.log("hi manoj", record);
          var statusForCreditRequest =
            showrecords[i].Record.statusForCreditRequest;
          console.log("statusForCreditRequest", statusForCreditRequest);
          var statuspreclose = record.Record.statuspreclose;
          console.log("statuspreclose", statuspreclose);
          // statusfor preclosing request
          var bankpreclose = record.Record.bankpreclose;
          console.log("bankpreclose?????", bankpreclose);
          //creditscore status change
          console.log("DEBUG: GET Enquiries OK");

          myroute.controllerFor("bankdashboard").set("isStatus", true);

          //         if(statusForCreditRequest==="Legalverifier approved" || statusForCreditRequest==="Requested for Legalverifier" || record.Record.statusForBankLegal==="Loan successfully accepted by user" ||statuspreclose==="User Requested For Preclose" ||bankpreclose==="Loan Closed"|| statusForCreditRequest==="Loan Rejected"){
          //              myroute.controllerFor('bankdashboard').set('isStatus',false)
          //              myroute.controllerFor('bankdashboard').set('statusForCreditRequest',statusForCreditRequest)
          //              console.log(statusForCreditRequest)
          //              myroute.controllerFor('bankdashboard').set('IsCreditStatus',true)
          //              myroute.controllerFor('bankdashboard').set('IsLegalValidated',true)
          //          }else if(statusForCreditRequest==="Creditscore Generated"){
          //     myroute.controllerFor('bankdashboard').set('isStatus',false)
          //     //default
          //     myroute.controllerFor('bankdashboard').set('IsCreditStatus',true)
          //     myroute.controllerFor('bankdashboard').set('statusForCreditRequest',statusForCreditRequest)
          //     //default status
          //     }else if(statusForCreditRequest=null){
          //         console.log("hiiii >>> this is true")
          //         myroute.controllerFor('bankdashboard').set('IsCreditStatus',false)
          //         myroute.controllerFor('bankdashboard').set('isStatus',true)
          //         console.log("DefaultStatus",status)
          //         myroute.controllerFor('bankdashboard').set('status',status)
          //     }
        }
      }
    });
  },
  timestamp: function() {
    this.transitionToRoute("timestamp");
  }
});
