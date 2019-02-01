import Controller from "@ember/controller";
import { validator, buildValidations } from "ember-cp-validations";

var Validations = buildValidations({
  email: [
    validator("presence", true),
    validator("format", {
      regex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      message: "This field must be a valid email address"
    })
  ],
  password: {
    description: "password",
    validators: [
      validator("presence", true),
      validator("format", {
        regex: /^[a-zA-Z0-9]{6,8}$/,
        message:
          "This field must be a Valid Password (minimum 6 digits required)"
      })
    ]
  }
});
export default Controller.extend(Validations, {
  isShowingModal: false,
  showLogin: true,
  ShowRequest: false, //this is to show request id

  actions: {
    login: function() {
      console.log("115");
      var email = this.get("email");
      console.log(email);
      var password = this.get("password");
      console.log(password);
      var mycontroller = this;

      // end

      if (
        email === null ||
        email === undefined ||
        email === "" ||
        password === null ||
        password === undefined ||
        password === ""
      ) {
        // swal("please fill details for login");
        swal("Something Went Wrong", "please fill details for login!", "error");
      } else {
        let { email, password } = this.getProperties("email", "password");
        console.log(email);
        console.log(password);
        var dataString = {
          email: email,
          password: password

          //    "usertype": usertype,
        };
        console.log(JSON.stringify(dataString));
        console.log(email);
        console.log(password);
        return $.ajax({
          url: "http://206.189.138.133:8082/login",
          type: "POST",
          contentType: "application/json",
          data: JSON.stringify(dataString),
          success: function(response) {
            console.log(response);
            var message = response.message;
            console.log("message", message);
            if (message === "Login Successful") {
              mycontroller.set("message", message);
              var token = response.token;
              console.log("token", token);
              var usertype = response.usertype;
              console.log("usertype", usertype);
              var status = response.status;
              mycontroller.set("usertype", usertype);
              console.log(usertype);
              var userid = response.userId;
              console.log(userid);
              mycontroller.set("userid", userid);
              sessionStorage.setItem("usertype", usertype);
              var firstname = response.firstname;
              mycontroller.set("firstname", firstname);
              console.log(firstname);
              sessionStorage.setItem("token", token);
              mycontroller.set("showDialog", true);
              var userid = mycontroller.get("userid");
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
                  console.log("Allrequest", showrecords);
                  var usertype = mycontroller.get("usertype");
                  console.log("get", usertype);
                  var ShowRequest = mycontroller.get("ShowRequest");
                  mycontroller.set("ShowRequest", ShowRequest);
                  console.log("ShowRequest>>>>>>", ShowRequest);
                  mycontroller.set("usertype", usertype);
                  console.log("usertype in ui", usertype);
                  console.log("changes for updated demo", showrecords);
                  mycontroller.set("showDialog", true);
                  if (usertype == "user") {
                    console.log("newrequest");
                    if (showrecords[0] == null) {
                      mycontroller.transitionToRoute("newrequest");
                    } else if (showrecords[0].Records.statusForUser != null) {
                      console.log("kheteshin loop2");
                      mycontroller.set("ShowRequest", true);
                      mycontroller.set("showUser", true);
                      mycontroller.transitionToRoute("home");
                    }
                  } else if (usertype == "tufts") {
                    mycontroller.set("showDialog", true);
                    mycontroller.set("showUser", true);
                    mycontroller.transitionToRoute("bankdashboard");
                  } else if (usertype == "APP1") {
                    mycontroller.set("showDialog", true);
                    mycontroller.transitionToRoute("creditscore2");
                    mycontroller.set("showUser", true);
                  } else if (usertype == "APP2") {
                    mycontroller.set("showDialog", true);
                    mycontroller.transitionToRoute("legalverification2");
                    mycontroller.set("showUser", true);
                  }
                  mycontroller.set("showDialog", false);
                }
              });
            } else {
              console.log("else");
            }
          }
        });
      }
    }
  }
});
