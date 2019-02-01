import Controller from "@ember/controller";

export default Controller.extend({
  showCreditscore: true,
  isLegalverified: false,
  actions: {
    signout: function() {
      this.transitionToRoute("login1");
    },
    reject: function(lastdetails, records, creditscore) {
      var modalvalue = this.get("showDialog");

      if (modalvalue != true) {
        this.set("showDialog", true);
      } else {
        this.set("showDialog", false);
      }
      var mycontroller = this;
      console.log("requestid>>>>>>>>", records);
      var userid = this.get("userid");
      this.set("userid", userid);
      console.log("userid", userid);
      var date = new Date().toLocaleDateString();
      this.set("date", date);
      var time = new Date().toTimeString();
      this.set("time", time);
      var transactionstring = {
        id: userid,
        transactionstring: {
          loan: lastdetails.loan,
          amount: lastdetails.amount,
          propertyType: lastdetails.propertyType,
          income: lastdetails.income,
          location: lastdetails.location,
          year: lastdetails.year,
          size: lastdetails.size,
          income: lastdetails.income,
          fname: lastdetails.fname,
          lname: lastdetails.lname,
          estimated: lastdetails.estimated,
          age: lastdetails.age,
          phone: lastdetails.phone,
          email: lastdetails.email,
          requestid: lastdetails.requestid,
          address: lastdetails.address,
          country: lastdetails.country,
          occupation: lastdetails.occupation,
          genderType: lastdetails.genderType,
          nationalityType: lastdetails.nationalityType,
          Company: lastdetails.Company,
          joiningdate: lastdetails.joiningdate,
          salary: lastdetails.salary,
          address: lastdetails.address,
          creditscore: lastdetails.creditscore,
          statusForCreditRequest: "Legalverifier rejected",
          date: date,
          time: time
        }
      };
      console.log("creditscore------>", transactionstring);
      var token = sessionStorage.getItem("token");
      console.log("manoj", token);
      return $.ajax({
        url: "http://206.189.138.133:8082/updatetransaction", //web service for credit score
        type: "POST",
        contentType: "application/json",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "x-access-token": token
        },
        data: JSON.stringify(transactionstring),
        success: function(response) {
          console.log("service");
          mycontroller.set("showCredit", true);
          var creditscore = response;
          console.log("credit", creditscore);
        }
      });
    },
    closeDialog: function() {
      this.set("showDialog", false);
    },
    okay: function() {
      this.set("isLegalverified", true);
      this.set("showDialog", false);
    },
    approved: function(lastdetails, records, creditscore) {
      var modalvalue = this.get("showDialog");

      if (modalvalue != true) {
        this.set("showDialog", true);
      } else {
        this.set("showDialog", false);
      }
      var mycontroller = this;
      var userid = this.get("userid");
      this.set("userid", userid);
      console.log("userid", userid);
      console.log("requestid>>>>>>>>", records);
      var date = new Date().toLocaleDateString();
      console.log("approve time>>", date);
      var time = new Date().toTimeString();
      console.log("approve time>>", time);
      mycontroller.set("date", date);
      mycontroller.set("time", time);
      var transactionstring = {
        id: userid,
        transactionstring: {
          loan: lastdetails.loan,
          amount: lastdetails.amount,
          propertyType: lastdetails.propertyType,
          income: lastdetails.income,
          requestid: lastdetails.requestid,
          location: lastdetails.location,
          year: lastdetails.year,
          size: lastdetails.size,
          income: lastdetails.income,
          fname: lastdetails.fname,
          lname: lastdetails.lname,
          estimated: lastdetails.estimated,
          age: lastdetails.age,
          phone: lastdetails.phone,
          email: lastdetails.email,
          address: lastdetails.address,
          country: lastdetails.country,
          occupation: lastdetails.occupation,
          genderType: lastdetails.genderType,
          nationalityType: lastdetails.nationalityType,
          Company: lastdetails.Company,
          joiningdate: lastdetails.joiningdate,
          salary: lastdetails.salary,
          address: lastdetails.address,
          creditscore: lastdetails.creditscore,
          legal: "approved",
          statusForCreditRequest: "Legalverifier approved",
          date: date,
          time: time
        }
      };
      console.log("creditscore------>", transactionstring);
      var token = sessionStorage.getItem("token");
      console.log("manoj", token);
      return $.ajax({
        url: "http://206.189.138.133:8082/updatetransaction", //web service for credit score
        type: "POST",
        contentType: "application/json",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "x-access-token": token
        },
        data: JSON.stringify(transactionstring),
        success: function(response) {
          console.log("service");
          mycontroller.set("showCredit", true);
          var creditscore = response;
          console.log("credit", creditscore);
        }
      });
    },
    logout: function() {
      console.log("in logout");
      window.location.reload(true);
    }
  }
});
