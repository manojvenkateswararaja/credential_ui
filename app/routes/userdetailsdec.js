import Route from "@ember/routing/route";

export default Route.extend({
  isApprove: false,
  isLegalVerifierDone: false,
  IsUserDetails: false,
  IsUserDetailsApproves: false,
  isLegalDisableButton: false,
  IsAlreadyDone: false,
  model() {
    this.controllerFor("userdetailsdec").set("showLogin", true);
    this.controllerFor("userdetailsdec").set("showUser", true);
    var usertype = this.controllerFor("login1").get("usertype");
    console.log(">>>user", usertype);
    this.controllerFor("userdetailsdec").set("usertype", usertype);
    var userid = this.controllerFor("bankdashboard2").get("userid");
    console.log("route userid", userid);
    this.controllerFor("userdetailsdec").set("userid", userid);
    var loanID = this.controllerFor("bankdashboard").get("record");
    var statusForCreditRequest = loanID.Record.statusForCreditRequest;
    console.log("statusForCreditRequest>>>>", statusForCreditRequest);
    if (statusForCreditRequest === "Score Generated") {
      this.controllerFor("userdetailsdec").set("IsUserDetails", true);
      this.controllerFor("userdetailsdec").set("IsUserDetailsApproves", false);
      this.controllerFor("userdetailsdec").set("isApprove", true);
      this.controllerFor("userdetailsdec").set("isReject", false);
    } else if (
      statusForCreditRequest === "Requested for Legalverifier" ||
      statusForCreditRequest === "Legalverifier approved"
    ) {
      this.controllerFor("userdetailsdec").set("isLegalDisableButton", true);
      this.controllerFor("userdetailsdec").set("IsUserDetails", false);
      this.controllerFor("userdetailsdec").set("IsUserDetailsApproves", true);
      this.controllerFor("userdetailsdec").set("isApprove", false);
      this.controllerFor("userdetailsdec").set("isReject", false);
    } else if (
      loanID.Record.creditscore != null &&
      loanID.Record.legal != null
    ) {
      this.controllerFor("userdetailsdec").set("IsAlreadyDone", true);
      this.controllerFor("userdetailsdec").set("isLegalDisableButton", true);
      this.controllerFor("userdetailsdec").set("isApprove", true);
      this.controllerFor("userdetailsdec").set("isReject", true);
    }
    this.controllerFor("userdetailsdec").set("record", loanID);

    console.log("record>>>>", loanID);

    console.log("DEBUG: GET Enquiries userdetailsdec OK");
  }
});
