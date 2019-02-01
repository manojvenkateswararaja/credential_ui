import Controller from "@ember/controller";
import _math from "lodash/math";

export default Controller.extend({
  loanamount: "loanamount",
  loanTerm: "0",
  interestRate: "0",
  extraPrinciple: "0",
  principalAmt: "0",
  date: new Date() /* in the route I am looping this */,
  computedDate: moment("date", "MM/DD/YY"),

  compoundingRate: Ember.computed("interestRate", function() {
    return this.get("interestRate") / 100 / 12; // compounding monthly
  }),

  payment: Ember.computed(
    "loanamount",
    "loanTerm",
    "compoundingRate",
    function() {
      console.log("loanAmount", loanamount);
      let loanamount = +this.get("loanamount"),
        loanTerm = +this.get("loanTerm"),
        compoundingRate = this.get("compoundingRate");
      console.log(loanamount, loanTerm, compoundingRate);
      if (+compoundingRate === 0) {
        return _math.round(loanamount / loanTerm, 2);
      }

      let payment =
        (compoundingRate * loanamount) /
        (1 - Math.pow(1 + compoundingRate, -loanTerm));
      return _math.round(payment, 2);
    }
  ),

  payments: Ember.computed(
    "payment",
    "extraPrinciple",
    "computedDate",
    function() {
      let principle = +this.get("loanamount"),
        compoundingRate = this.get("compoundingRate"),
        payment = this.get("payment"),
        extra = +this.get("extraPrinciple"),
        interest,
        principalAmt = this.get("principalAmt"),
        startingPrinciple,
        i = 1,
        payments = [];
      while (principle > 0) {
        interest = _math.round(principle * compoundingRate, 2);

        if (principle + interest < payment) {
          payment = principle + interest;
          extra = 0;
        }
        if (principle + interest - payment < extra) {
          extra = principle + interest - payment;
        }
        startingPrinciple = principle;
        principle = _math.round(principle + interest - payment - extra, 2);
        principalAmt = payment - interest;
        this.set("principalAmt", principalAmt);
        console.log(principalAmt);
        var computedDate = this.get("computedDate");
        console.log("new date", computedDate);

        // moment(, "MM-DD-YYYY");
        // var now=moment().year(year).month(month).date(day)
        // console.log("2nd date",now)
        payments.push({
          id: i++,
          principle,
          interest,
          payment,
          extra,
          startingPrinciple,
          principalAmt
        });
      }
      return payments;
    }
  ),

  totalPaid: Ember.computed("payments.[]", function() {
    let payments = this.get("payments");
    return _math.sum(payments, "payment") + _math.sum(payments, "extra");
  }),

  totalPayment: Ember.computed("payment", "extraPrinciple", function() {
    let payment = this.get("payment"),
      extra = +this.get("extraPrinciple");

    return _math.round(payment + extra, 2);
  }),

  totalInterest: Ember.computed(
    "loanamount",
    "loanTerm",
    "compoundingRate",
    function() {
      let principle = +this.get("loanamount"),
        compoundingRate = this.get("compoundingRate"),
        payment = this.get("payment"),
        total = 0,
        interest;
      console.log(principle, compoundingRate, payment);
      while (principle > 0) {
        interest = _math.round(principle * compoundingRate, 2);

        if (principle + interest < payment) {
          payment = principle + interest;
        }

        principle = _math.round(principle + interest - payment, 2);
        total = total + interest;
      }
      return _math.round(total, 2);
    }
  ),

  totalInterestPaid: Ember.computed("payments.[]", function() {
    let payments = this.get("payments");
    return _math.round(_math.sum(payments, "interest"), 2);
  }),

  savedInterest: Ember.computed(
    "totalInterest",
    "totalInterestPaid",
    function() {
      let totalInterest = this.get("totalInterest"),
        totalInterestPaid = this.get("totalInterestPaid");
      return totalInterest - totalInterestPaid;
    }
  ),

  actions: {
    ok: function(details, record) {
      var mycontroller = this;

      var payments = mycontroller.get("payments");
      this.set("payments", payments);
      console.log("amortization process done by component", payments);
      console.log("please find records", record);
      var modalvalue = this.get("showDialog");
      if (modalvalue != true) {
        this.set("showDialog", true);
      } else {
        this.set("showDialog", false);
      }

      var loanamount = record.Record.amount;
      this.set("loanamount", loanamount);
      console.log("loanamount is>>>>>>", loanamount);
      var loanterms = this.get("loanterms");
      this.set("loanterms", loanterms);
      console.log("loanterms>>", loanterms);
      var amountinterestrate = this.get("interestrate");
      this.set("amountinterestrate", amountinterestrate);
      console.log("amountinterestrate>>", amountinterestrate);
      var emi = this.get("emi");
      console.log(emi);
      var total = this.get("total");
      console.log(total);
      var tot = this.get("tot");
      console.log(tot);
      var date = new Date().toLocaleDateString();
      var details = record.Record;
      var time = new Date().toTimeString();
      this.set("date", date);
      this.set("time", time);
      var userid = this.get("userid");
      this.set("userid", userid);
      console.log("userid", userid);
      var transactionstring = {
        id: record.Key,
        transactionstring: {
          loan: details.loan,
          amount: details.amount,
          propertyType: details.propertyType,
          income: details.income,
          location: details.location,
          year: details.year,
          size: details.size,
          income: details.income,
          requestid: details.requestid,
          fname: details.fname,
          lname: details.lname,
          estimated: details.estimated,
          age: details.age,
          phone: details.phone,
          email: details.email,
          address: details.address,
          country: details.country,
          occupation: details.occupation,
          genderType: details.genderType,
          nationalityType: details.nationalityType,
          Company: details.Company,
          joiningdate: details.joiningdate,
          salary: details.salary,
          address: details.address,
          legal: details.legal,
          bank: "applied",
          creditscore: details.creditscore,
          loanamount: loanamount,
          loanterms: loanterms,
          amountinterestrate: amountinterestrate,
          emi: emi,
          total: total,
          tot: tot,
          payments: payments,
          statusForCreditRequest: "Loan Quotation",
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
    closeDialog: function() {
      this.set("showDialog", false);
    },
    okay: function() {
      this.set("showDialog", false);
      this.set("isBnkLoanSchedule", true);
    },
    logout: function() {
      console.log("in logout");
      window.location.reload(true);
    }
  }
});
