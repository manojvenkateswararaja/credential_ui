import Controller from "@ember/controller";

export default Controller.extend({
  IsSuccess: false,
  showRequest: true,
  emailValidation: [
    {
      message: "Please provide email in a valid format",
      validate: inputValue => {
        let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(inputValue);
      }
    }
  ],
  selectedOption: null,
  mylist: ["yes", "no"],
  mortgaugeTypeList: ["Home", "Car"],
  downPaymentList: ["Not Applicable", "0% - 5%", "6% - 10%", "11%-15%"],
  jobOption: ["First choice", "Second choice", "Third choice"],
  CompanytList: ["Company One", "Company Two"],
  genderlist: ["Male", "Female"],
  nationalitylist: ["Indian", "Other"],
  occupationlist: ["Salaried", "Non-Salaried"],
  companylist: ["Partnership", "Prioprietorship", "Pvt Ltd Company"],
  Occupationlist: ["Doctor", "Nutritionist"],

  actions: {
    targetButton: function() {
      var modalvalue = this.get("showDialog");

      if (modalvalue != true) {
        this.set("showDialog", true);
      } else {
        this.set("showDialog", false);
      }

      var loan = this.get("loan");
      this.set("loan", loan);
      console.log(loan);
      var amount = this.get("amount");
      this.set("amount", amount);
      console.log(amount);
      var propertyType = this.get("propertyType");
      this.set("propertyType", propertyType);
      console.log(propertyType);
      var location = this.get("location");
      this.set("location", location);
      console.log("location", location);
      var year = this.get("year");
      this.set("year", year);
      console.log("year", year);
      var size = this.get("size");
      this.set("size", size);
      console.log("size", size);
      var fname = this.get("fname");
      this.set("fname", fname);
      console.log("firstname", fname);
      var lname = this.get("lname");
      this.set("lname", lname);
      console.log("lastname", lname);
      var email = this.get("email");
      this.set("email", email);
      console.log("email", email);
      var age = this.get("age");
      this.set("age", age);
      console.log("age", age);
      var phone = this.get("phone");
      this.set("phone", phone);
      console.log("phone number", phone);
      var address = this.get("address");
      this.set("address", address);
      console.log("address", address);
      var country = this.get("country");
      this.set("country", country);
      console.log("country", country);
      var estimated = this.get("price");
      this.set("estimated", estimated);
      var genderType = this.get("genderType");
      this.set("genderType", genderType);
      console.log(genderType);
      var nationalityType = this.get("nationalityType");
      this.set("nationalityType", nationalityType);
      console.log(nationalityType);
      var Company = this.get("company");
      this.set("Company", Company);
      console.log(Company);
      var joiningdate = this.get("startdate");
      this.set("joiningdate", joiningdate);
      console.log("joiningdate");
      var income = this.get("issuedate");
      this.set("salary", income);
      console.log(income);
      var pat = this.get("pat");
      this.set("pat", pat);
      console.log(pat);
      var depreciation = this.get("depreciation");
      this.set("depreciation", depreciation);
      console.log(depreciation);
      var empname = this.get("Employename");
      this.set("empname", empname);
      console.log(empname);
      var occupation = this.get("OccupationType");
      this.set("occupation", occupation);
      console.log("occupation", occupation);
      var experience = this.get("experience");
      this.set("experience", experience);
      console.log("experience", experience);
      // var salaried=this.get('salaried')
      // console.log("salaried",salaried)
      var userId = this.get("userid");
      this.set("userId", userId);
      console.log("userid", userId);
      var date = new Date().toLocaleDateString();
      var time = new Date().toTimeString();

      var requestid = Math.floor(100 + Math.random() * 900);
      console.log("requestid" + requestid);

      var transactionstring = {
        userId: userId,
        transactionstring: {
          loan: loan,
          amount: amount,
          propertyType: propertyType,
          location: location,
          requestid: requestid,
          year: year,
          size: size,
          fname: fname,
          lname: lname,
          income: income,
          pat: pat,
          depreciation: depreciation,
          empname: empname,
          estimated: estimated,
          experience: experience,
          age: age,
          phone: phone,
          email: email,
          address: address,
          country: country,
          occupation: occupation,
          genderType: genderType,
          nationalityType: nationalityType,
          Company: Company,
          joiningdate: joiningdate,
          // "salary":salary,
          date: date,
          time: time,
          status: "processing",
          statusForUser: "Request sent successfully"
        }
      };
      console.log("datastring" + JSON.stringify(transactionstring));
      var mycontroller = this;

      var token = sessionStorage.getItem("token");
      console.log("manoj", token);
      return $.ajax({
        url: "http://206.189.138.133:8082/loandetails",
        type: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "x-access-token": token
        },
        contentType: "application/json",
        data: JSON.stringify(transactionstring),
        success: function(response) {
          console.log(JSON.stringify(response));
          var message = response.message;
          mycontroller.set("requestid", requestid);
          mycontroller.set("message", message);
          sessionStorage.setItem("message", message);
          console.log("message>>>>>>>>>>" + message);
        }
      });
      this.transitionToRoute("home");
    },
    closeDialog: function() {
      this.set("showDialog", false);
    },
    okay: function() {
      this.set("IsSuccess", true);
      // swal("Good job!", "your details has been uploaded successfully! Move Forward to upload documents", "success");
      this.transitionToRoute("uploaddoc");
    },
    openNav: function() {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
    },

    closeNav: function() {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
    },
    goTonewrequest: function() {
      this.transitionToRoute("newrequest");
    },
    goToloan: function() {
      this.transitionToRoute("page2");
    },
    goToproperty: function() {
      this.transitionToRoute("page3");
    },
    goToemployment: function() {
      this.transitionToRoute("page4");
    },
    signout: function() {
      this.transitionToRoute("login1");
    },
    saveModel: function() {},
    logout: function() {
      console.log("in logout");
      window.location.reload(true);
    }
  }
});
