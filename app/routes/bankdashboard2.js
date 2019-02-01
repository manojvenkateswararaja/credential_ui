import Route from "@ember/routing/route";

export default Route.extend({
  didThisDone: false,
  model() {
    this.controllerFor("bankdashboard2").set("showLogin", true);
    this.controllerFor("bankdashboard2").set("showUser", true);
    var usertype = this.controllerFor("bankdashboard").get("usertype");
    console.log(">>>user", usertype);
    this.controllerFor("bankdashboard2").set("usertype", usertype);
    var myroute = this;
    var token = sessionStorage.getItem("token");
    console.log("token", token);
    var userid = this.controllerFor("bankdashboard").get("userId");
    console.log("route userid", userid);
    this.controllerFor("bankdashboard2").set("userid", userid);
    var creditscore = this.controllerFor("bankdashboard").get("creditscore");
    console.log("creditscore", creditscore);

    return $.ajax({
      url: "http://206.189.138.133:8082/getHistory",
      type: "GET",
      contentType: "application/json",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: userid
      },

      success: function(response) {
        var showrecords = response.result;
        console.log("manoj", showrecords);
        // var token=showrecords.token
        // console.log("token", token)
        myroute.controllerFor("bankdashboard2").set("showrecords", showrecords);
        var len = showrecords.length;
        console.log("len show>>>", len);
        for (let i = 0; i <= len - 1; i++) {
          var record = showrecords[i];

          myroute.controllerFor("bankdashboard2").set("record", record);
          console.log("hi manoj", record);
          var statusForCreditRequest =
            showrecords[i].Records.statusForCreditRequest;
          console.log("statusForCreditRequest", statusForCreditRequest);
          var statuspreclose = record.Records.statuspreclose;
          console.log("statuspreclose", statuspreclose);
          var bankpreclose = record.Records.bankpreclose;
          console.log("bankpreclose?????", bankpreclose);
          console.log("DEBUG: GET Enquiries OK");
          myroute.controllerFor("bankdashboard2").set("isStatus", true);
          if (
            statuspreclose === "Requested For Preclose" ||
            statusForCreditRequest === "Legalverifier approved" ||
            statusForCreditRequest === "Requested for Legalverifier" ||
            record.Records.statusForBankLegal ===
              "Loan successfully accepted by user" ||
            bankpreclose === "Loan Closed" ||
            statusForCreditRequest === "Loan Rejected"
          ) {
            // swal(">>>>>>>>>>>")
            myroute.controllerFor("bankdashboard2").set("didThisDone", true);
            myroute.controllerFor("bankdashboard2").set("isStatus", false);
            myroute
              .controllerFor("bankdashboard2")
              .set("statusForCreditRequest", statusForCreditRequest);
            console.log(statusForCreditRequest);
            myroute.controllerFor("bankdashboard2").set("IsCreditStatus", true);
            myroute
              .controllerFor("bankdashboard2")
              .set("IsLegalValidated", true);
          } else if (statusForCreditRequest === "Creditscore Generated") {
            myroute.controllerFor("bankdashboard2").set("isStatus", false);
            //default
            myroute.controllerFor("bankdashboard2").set("IsCreditStatus", true);
            myroute
              .controllerFor("bankdashboard2")
              .set("statusForCreditRequest", statusForCreditRequest);
            //default status
          } else if ((statusForCreditRequest = null)) {
            console.log("hiiii >>> this is true");
            myroute
              .controllerFor("bankdashboard2")
              .set("IsCreditStatus", false);
            myroute.controllerFor("bankdashboard2").set("isStatus", true);
            console.log("DefaultStatus", status);
            myroute.controllerFor("bankdashboard2").set("status", status);
          }
        }
      }
    });
  }
});
