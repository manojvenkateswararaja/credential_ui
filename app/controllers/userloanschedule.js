import Controller from "@ember/controller";

export default Controller.extend({
  showUserSchedule: true,
  isLoanSchedule: false,
  actions: {
    print: function() {},

    userschedule: function(details, record) {
      var modalvalue = this.get("showDialog");

      if (modalvalue != true) {
        this.set("showDialog", true);
      } else {
        this.set("showDialog", false);
      }
      console.log("records", record);
      console.log("details", details);
      var date = new Date().toLocaleDateString();
      var time = new Date().toTimeString();
      var userid = this.get("userid");
      this.set("userid", userid);
      console.log("userid", userid);
      this.set("date", date);
      this.set("time", time);
      var transactionstring = {
        id: userid,
        transactionstring: {
          loan: details.Records.loan,
          amount: details.Records.amount,
          propertyType: details.Records.propertyType,
          income: details.Records.income,
          requestid: details.Records.requestid,
          location: details.Records.location,
          year: details.Records.year,
          size: details.Records.size,
          income: details.Records.income,
          fname: details.Records.fname,
          lname: details.Records.lname,
          estimated: details.Records.estimated,
          age: details.Records.age,
          phone: details.Records.phone,
          email: details.Records.email,
          address: details.Records.address,
          country: details.Records.country,
          occupation: details.Records.occupation,
          genderType: details.Records.genderType,
          nationalityType: details.Records.nationalityType,
          Company: details.Records.Company,
          joiningdate: details.Records.joiningdate,
          salary: details.Records.salary,
          address: details.Records.address,
          legal: details.Records.legal,
          bank: "applied",
          creditscore: details.Records.creditscore,
          loanamount: details.Records.loanamount,
          loanterms: details.Records.loanterms,
          amountinterestrate: details.Records.amountinterestrate,
          paymentperyear: details.Records.paymentperyear,
          installmentpermonth: details.Records.installmentpermonth,
          payments: details.Records.payments,
          statusForBankLegal: "Loan successfully accepted by user",
          time: time,
          date: date
        }
      };

      console.log("userloan schedule", JSON.stringify(transactionstring));
      var mycontroller = this;
      var token = sessionStorage.getItem("token");
      console.log("manoj", token);
      return $.ajax({
        url: "http://206.189.138.133:8082/updatetransaction",
        type: "POST",
        contentType: "application/json",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "x-access-token": token
        },
        data: JSON.stringify(transactionstring),
        success: function(response) {
          console.log(JSON.stringify(response));
          var message = response;
          mycontroller.set("message", message);
          sessionStorage.setItem("message", message);
          console.log("schedule accepted>>>>>>>>>>" + message);
        }
      });
    },
    closeDialog: function() {
      this.set("showDialog", false);
    },
    okay: function() {
      this.set("isLoanSchedule", true);
      this.set("showDialog", false);
      this.transitionToRoute("home2");
    },
    logout: function() {
      console.log("in logout");
      window.location.reload(true);
    },
    gotoPreclose: function(record) {
      this.set("record", record);
      this.transitionToRoute("preclosure");
    }
  }
});
