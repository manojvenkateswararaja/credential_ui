import Controller from "@ember/controller";

export default Controller.extend({
  isPreclose: true,
  isBankPreclosed: false,
  actions: {
    finalPreclose: function(record) {
      var modalvalue = this.get("showDialog");
      if (modalvalue != true) {
        this.set("showDialog", true);
      } else {
        this.set("showDialog", false);
      }

      console.log("record>>>bnkpreclose", record);

      var date = new Date().toLocaleDateString();
      this.set("date", date);
      var time = new Date().toTimeString();
      this.set("time", time);
      var transactionstring = {
        id: record.Key,
        transactionstring: {
          loan: record.Record.loan,
          amount: record.Record.amount,
          propertyType: record.Record.propertyType,
          income: record.Record.income,
          location: record.Record.location,
          year: record.Record.year,
          size: record.Record.size,
          requestid: record.Record.requestid,
          income: record.Record.income,
          fname: record.Record.fname,
          lname: record.Record.lname,
          estimated: record.Record.estimated,
          age: record.Record.age,
          phone: record.Record.phone,
          email: record.Record.email,
          address: record.Record.address,
          country: record.Record.country,
          occupation: record.Record.occupation,
          genderType: record.Record.genderType,
          nationalityType: record.Record.nationalityType,
          Company: record.Record.Company,
          joiningdate: record.Record.joiningdate,
          salary: record.Record.salary,
          address: record.Record.address,
          legal: record.Record.legal,
          bank: "applied",
          creditscore: record.Record.creditscore,
          loanamount: record.Record.loanamount,
          //"loanterms":details.loanterms,
          status: record.Record.status,
          amountinterestrate: record.Record.amountinterestrate,
          paymentperyear: record.Record.paymentperyear,
          installmentpermonth: record.Record.installmentpermonth,
          date: date,
          time: time,
          installment: record.Record.installment,
          EMI: record.Record.EMI,
          changestatus: "change",
          userpreclosestatus: "preclosure accepted, you will get notified soon",
          bankpreclose: "Loan Closed",
          Payment: record.Record.Payment
        }
      };
      console.log(JSON.stringify(transactionstring));
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
          console.log("message>>>>>>>>>>" + message);
        }
      });
    },
    closeDialog: function() {
      this.set("showDialog", false);
    },
    okay: function() {
      this.set("isBankPreclosed", true);
      this.set("showDialog", false);
      this.transitionToRoute("bankdashboard2");
    },
    logout: function() {
      console.log("in logout");
      window.location.reload(true);
    }
  }
});
