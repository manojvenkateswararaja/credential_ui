import Route from "@ember/routing/route";
export default Route.extend({
  model() {
    this.controllerFor("userdetails").set("showLogin", true);
    this.controllerFor("userdetails").set("showUser", true);
    var usertype = this.controllerFor("login1").get("usertype");
    console.log(">>>user", usertype);
    this.controllerFor("userdetails").set("usertype", usertype);
    var userid = this.controllerFor("bankdashboard2").get("userid");
    console.log("route userid", userid);
    this.controllerFor("userdetails").set("userid", userid);
    var loanID = this.controllerFor("bankdashboard2").get("record");
    this.controllerFor("userdetails").set("record", loanID);
    console.log("record", loanID);
    var lastdetails = loanID.Records;
    console.log("hi.....", lastdetails);
    if (lastdetails.statusForCreditRequest == "Requested For Score") {
      this.controllerFor("userdetails").set("isDetailsDisableButton", true);
      // swal("Bank have Requested For Creditscore!! ", "status", "info");
    }
    this.controllerFor("userdetails").set("lastdetails", lastdetails);
    console.log("updates", lastdetails);
    var GetBankCredit = this.controllerFor("creditscore");
    var creditscore = GetBankCredit.get("creditscore");
    this.controllerFor("userdetails").set("creditscore", creditscore);
    console.log("creditscore", creditscore);
  }
});
