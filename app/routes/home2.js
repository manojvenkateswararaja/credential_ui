import Route from "@ember/routing/route";
export default Route.extend({
  isStatus: true,
  model() {
    var firstname = this.controllerFor("login1").get("firstname");
    console.log(">>>user", firstname);
    this.controllerFor("home2").set("firstname", firstname);
    var userid = this.controllerFor("login1").get("userid");
    console.log("route userid", userid);
    this.controllerFor("home2").set("userid", userid);
    this.controllerFor("home2").set("showLogin", true);
    this.controllerFor("home2").set("showUser", true);

    var myroute = this;
    this.controllerFor("home2").set("ShowRequest", true);
    // usertype
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
        myroute.controllerFor("home2").set("showrecords", showrecords);
        console.log("Allrequest", showrecords);
      }
    });
    var showrecords = this.controllerFor("home").get("showrecords");
    this.controllerFor("home2").set("showrecords", showrecords);

    // var len = showrecords[0]
    // console.log("len show>>>", len);
    var statusForUser = showrecords.Records.statusForUser;
    // console.log("home page statusForUser???>>",statusForUser)
    var statusForCreditRequest = showrecords.Records.statusForCreditRequest;
    // console.log("home page statusForCreditRequest",statusForCreditRequest)
    var statuspreclose = showrecords.Records.statuspreclose;
    // console.log("home page statusForUser",statuspreclose)
    var userpreclosestatus = showrecords.Records.userpreclosestatus;
    console.log("userpreclosestatus", userpreclosestatus);
    console.log("home page statusForUser", statusForUser);
    console.log("home page record", showrecords);

    if (
      statusForUser === "Request sent successfully" ||
      statuspreclose === "Requested For Preclose" ||
      userpreclosestatus === "preclosure accepted"
    ) {
      //show status
      console.log("if loop 1");
      myroute.controllerFor("home2").set("ShowRequest", true);
      myroute.controllerFor("home2").set("isStatus", false);
      myroute.controllerFor("home2").set("isBankPreclose", false);
      myroute.controllerFor("home2").set("showrecords", showrecords);
    } else if (statusForCreditRequest === "Loan Scheduled") {
      console.log("if loop 2");
      myroute.controllerFor("home2").set("IsCreditStatus", false);
      myroute.controllerFor("home2").set("ShowRequest", true);
      myroute.controllerFor("home2").set("isBankPreclose", false);
      myroute.controllerFor("home2").set("DisablePrecoleButton", true);
      myroute.controllerFor("home2").set("showrecords", showrecords);
    }
  }
});
