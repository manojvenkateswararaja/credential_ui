import Controller from "@ember/controller";

export default Controller.extend({
  isCommitAuthorize: false,
  actions: {
    showDialog() {
      // Will be used `app/templates/error-message.hbs`
      this.get("dialog").alert("error-message");
    },
    dismissModal: function() {
      this.set("isCommitAuthorize", true);
    },
    dismissModal1: function() {
      this.set("isCommitAuthorize", false);
    },

    userloanschedule: function(record) {
      console.log("unside userloanschedule action", record);
      this.set("record", record);
      if (record.Records.statusForUser === "Request sent successfully") {
        swal(
          "You Applied for credentialing sucessfully!! Wait for further process",
          "status",
          "info"
        );
      } else if (
        record.Records.statusForCreditRequest == "Requested For Score"
      ) {
        swal("Your RequestID sent to Score Validator!! ", "status", "info");
      } else if (record.Records.statusForCreditRequest == "Score Generated") {
        swal("Your Score Generated!! ", "status", "info");
      } else if (
        record.Records.statusForCreditRequest == "Requested for Legalverifier"
      ) {
        swal("Your RequestID sent to  App level 2!!", "status", "info");
      } else if (
        record.Records.statusForCreditRequest == "Legalverifier approved"
      ) {
        swal(
          "Your App level 2 approved & Credentialing Approved",
          "status",
          "info"
        );
      } else if (
        record.Records.statusForCreditRequest === "Loan Quotation" ||
        record.Records.statusForBankLegal ===
          "Loan successfully accepted by user"
      ) {
        swal(
          "Your Loan Successfully scheduled!! Navigating to LoanQuotation>>",
          "status",
          "info"
        );
        this.transitionToRoute("userloanschedule");
      }
    },
    logout: function() {
      console.log("in logout");
      window.location.reload(true);
    }
  }
});
