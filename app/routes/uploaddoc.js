import Route from "@ember/routing/route";

export default Route.extend({
  showRequest: true,
  actions: {
    uploadDoc: function(file, queue) {
      // var mycontroller = this;
      console.log("entering upload FIR 3");
      var mycontroller = this;
      var requestid = this.controllerFor("newrequest").get("reqid");
      this.controllerFor("uploaddoc").set("requestid", requestid);
      console.log(requestid);
      file
        .upload("http://206.189.138.133:8082/UploadDocs?requestid=" + requestid)
        .then(
          function(response) {
            console.log(JSON.stringify(response));
            var url = response.body.url;
            console.log("url ::", JSON.stringify(url));
            mycontroller.controllerFor("uploaddoc").set("url", url);
            mycontroller
              .controllerFor("uploaddoc")
              .set("isShow_fileupload", true);
            mycontroller
              .controllerFor("uploaddoc")
              .set("Notshow_fileupload", false);
            console.log("file upload sucessfully. 1..");
            var index = queue.length;
            console.log("queue index", index);
          },

          function() {
            console.log("file upload sucessfully...");
          }
        );
    }
    // }
  },
  model() {
    this.controllerFor("uploaddoc").set("showLogin", true);
    this.controllerFor("uploaddoc").set("showUser", true);
    var firstname = this.controllerFor("login1").get("firstname");
    console.log(">>>user", firstname);
    this.controllerFor("uploaddoc").set("firstname", firstname);
    this.controllerFor("uploaddoc").set("Notshow_fileupload", true);
    if (this.controllerFor("uploaddoc").set("Notshow_fileupload", true)) {
      this.controllerFor("uploaddoc").set(" isShow_fileupload", false);
    }
    var requestid = this.controllerFor("newrequest").get("reqid");
    this.controllerFor("uploaddoc").set("requestid", requestid);
    console.log("reqid--", requestid);
  }
});
