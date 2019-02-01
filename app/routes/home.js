import Route from "@ember/routing/route";

export default Route.extend({
  showLogin: false,
  showUser: false,
  isBankPreclose: false,
  isUserstatus: false,
  DisablePrecoleButton: false,
  model() {
    var userid = this.controllerFor("login1").get("userid");
    console.log("route userid", userid);
    this.controllerFor("home").set("userid", userid);
    this.controllerFor("home").set("showLogin", true);
    this.controllerFor("home").set("showUser", true);
    var firstname = this.controllerFor("login1").get("firstname");
    console.log(">>>user", firstname);
    this.controllerFor("home").set("firstname", firstname);
    var myroute = this;
    var token = sessionStorage.getItem("token");
    console.log("manoj", token);
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
        myroute.controllerFor("home").set("showrecords", showrecords);
        console.log("Allrequest", showrecords);
      }
    });
  }
});
