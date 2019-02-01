import Route from "@ember/routing/route";
export default Route.extend({
  showUserDetails: true,
  IsStatusForCreditRequest: false,
  IsStatusForGenerated: false,
  model() {
    this.controllerFor("legalverification2").set("showLogin", true);
    this.controllerFor("legalverification2").set("showUser", true);
    var usertype = this.controllerFor("login1").get("usertype");
    console.log(">>>user", usertype);
    this.controllerFor("legalverification2").set("usertype", usertype);

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
        var len = showrecords.length;
        console.log("len show>>>", len);
        for (let i = 0; i <= len; i++) {
          //     var showrecords=showrecords
          //    console.log(">>>>>>>",showrecords)
          var statusForCreditRequest =
            showrecords[i].Record.statusForCreditRequest;
          console.log("statusForCreditRequest>>>>>>>", statusForCreditRequest);
          if (
            statusForCreditRequest === "Requested for Legalverifier" ||
            statusForCreditRequest === "Legalverifier approved" ||
            statusForCreditRequest === "Legalverifier rejected"
          ) {
            var details = showrecords[i];
            myroute
              .controllerFor("legalverification2")
              .set("IsStatusForCreditRequest", true);
            myroute.controllerFor("legalverification2").set("details", details);
            console.log("details.....loop1...", details);
            myroute
              .controllerFor("legalverification2")
              .set("statusForCreditRequest", statusForCreditRequest);
          } else if (statusForCreditRequest === "Legalverifier Generated") {
            console.log("working fine");
            var details = showrecords[i];
            myroute.controllerFor("legalverification2").set("details", details);
            console.log("details llopp2........", details);
            myroute
              .controllerFor("legalverification2")
              .set("IsStatusForCreditRequest", true);
            myroute
              .controllerFor("legalverification2")
              .set("statusForCreditRequest", statusForCreditRequest);
          }
        }
      }
    });
  }
});
