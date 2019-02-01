import Controller from "@ember/controller";

export default Controller.extend({
  showPreclosure: true,
  isPreclosed: false,
  PaymentMode: ["Cash/Check", "NEFT/RTGS/IMPS"],
  actions: {
    preclose: function(record) {
      var modalvalue = this.get("showDialog");
      if (modalvalue != true) {
        this.set("showDialog", true);
      } else {
        this.set("showDialog", false);
      }

      // console.log("details>>>>preclose",details)
      console.log("record>>> preclose", record);
      var EMI = this.get("EMI");
      this.set("EMI", EMI);
      var userid = this.get("userid");
      this.set("userid", userid);
      console.log("userid", userid);
      console.log("EMI is>>>>>>", EMI);
      var installment = this.get("installment");
      this.set("installment", installment);
      console.log("installment>>", installment);
      var Payment = this.get("Payment");
      this.set("Payment", Payment);
      console.log("Payment>>", Payment);
      var date = new Date().toLocaleDateString();
      this.set("date", date);
      var time = new Date().toTimeString();
      this.set("time", time);
      var url = this.get("url");
      this.set("url", url);

      var transactionstring = {
        id: userid,
        transactionstring: {
          loan: record.Records.loan,
          amount: record.Records.amount,
          propertyType: record.Records.propertyType,
          income: record.Records.income,
          location: record.Records.location,
          requestid: record.Records.requestid,
          year: record.Records.year,
          size: record.Records.size,
          income: record.Records.income,
          fname: record.Records.fname,
          lname: record.Records.lname,
          estimated: record.Records.estimated,
          age: record.Records.age,
          phone: record.Records.phone,
          email: record.Records.email,
          address: record.Records.address,
          country: record.Records.country,
          occupation: record.Records.occupation,
          genderType: record.Records.genderType,
          nationalityType: record.Records.nationalityType,
          Company: record.Records.Company,
          joiningdate: record.Records.joiningdate,
          salary: record.Records.salary,
          address: record.Records.address,
          legal: record.Records.legal,
          bank: "applied",
          creditscore: record.Records.creditscore,
          loanamount: record.Records.loanamount,
          loanterms: record.Records.loanterms,
          // "status":details.status,
          amountinterestrate: record.Records.amountinterestrate,
          paymentperyear: record.Records.paymentperyear,
          installmentpermonth: record.Records.installmentpermonth,
          date: date,
          time: time,
          installment: installment,
          url: url,
          EMI: EMI,
          statuspreclose: "Requested For Preclose",
          Payment: Payment,
          date: date,
          time: time
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
          mycontroller.set("isShchedule", true);
        }
      });
    },
    pay: function() {
      this.transitionToRoute("paymentgateway");
    },
    closeDialog1: function() {
      this.set("showDialog", false);
    },
    okay1: function() {
      this.set("isPreclosed", true);
      this.set("showDialog", false);
      this.transitionToRoute("home2");
    },
    signout: function() {
      this.transitionToRoute("login1");
    },
    closeDialog: function() {
      this.set("showDialogUpload", false);
    },
    logout: function() {
      console.log("in logout");
      window.location.reload(true);
    },
    okay: function() {
      this.set("showDialogUpload", false);
    },
    logout: function() {
      console.log("in logout");
      window.location.reload(true);
    }
  }
});
