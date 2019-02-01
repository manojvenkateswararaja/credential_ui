import Route from "@ember/routing/route";

export default Route.extend({
  actions: {
    uploadDoc: function(file) {
      // var mycontroller = this;
      console.log("entering upload FIR 4");
      var mycontroller = this;
      console.log(file);
      var requestid = this.controllerFor("home").get("record.Key");
      this.controllerFor("preclosure").set("requestid", requestid);
      console.log(requestid);

      file
        .upload("http://206.189.138.133:8082/UploadDocs?requestid=" + requestid)
        .then(
          function(response) {
            console.log(JSON.stringify(response));
            var url = response.body.url;
            console.log("url ::", JSON.stringify(url));

            // mycontroller.controllerFor('preclosure').set('showDialogUpload',true);
            mycontroller.controllerFor("preclosure").set("url", url);
            mycontroller
              .controllerFor("preclosure")
              .set("isShow_fileupload", true);
            mycontroller
              .controllerFor("preclosure")
              .set("Notshow_fileupload", false);

            console.log("saviing file...");
            console.log("file upload sucessfully. 1..");
          },
          function() {
            console.log("file upload sucessfully...");
          }
        );
    }
  },

  model() {
    var userid = this.controllerFor("userloanschedule").get("userid");
    console.log("route userid", userid);
    this.controllerFor("preclosure").set("userid", userid);
    this.controllerFor("preclosure").set("showLogin", true);
    this.controllerFor("preclosure").set("showUser", true);
    var usertype = this.controllerFor("login1").get("usertype");
    console.log(">>>user", usertype);
    // var userid= this.controllerFor('userloanschedule').get('userid');
    // console.log("route userid",userid)
    // this.controllerFor('preclosure').set("userid",userid);
    this.controllerFor("preclosure").set("Notshow_fileupload", true);
    if (this.controllerFor("preclosure").set("Notshow_fileupload", true)) {
      this.controllerFor("preclosure").set(" isShow_fileupload", false);
    }
    var PreClosingController = this.controllerFor("home2").get("record");
    this.controllerFor("preclosure").set("record", PreClosingController);
    // var PreClosingDetails=this.controllerFor('home').get('details')
    // this.controllerFor('preclosure').set('details',PreClosingDetails)
    // console.log("PreClosingController>>>>",PreClosingController)
    // console.log("PreClosingDetails>>>>details",PreClosingDetails)
  }
});
