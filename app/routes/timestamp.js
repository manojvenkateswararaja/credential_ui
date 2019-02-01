import Route from "@ember/routing/route";

export default Route.extend({
  model() {
    var mycontrol = this;
    // var creditscorebank=mycontrol.controllerFor('creditscore')
    // var score=creditscorebank.get('creditscore')
    // this.controllerFor('bankdashboard').set('score',score)
    // console.log("creditscore in bank",score)
    //  var GetBankCredit = mycontrol.controllerFor('creditscore')
    //  var creditscore= GetBankCredit.get('creditscore');
    //  mycontrol.controllerFor('bankdashboard').set('creditscore',creditscore);

    var myroute = this;
    var token = sessionStorage.getItem("token");
    console.log("manoj", token);
    return $.ajax({
      url: "http://206.189.138.133:8082/getloandetails",
      type: "GET",
      contentType: "application/json",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": token
      },
      success: function(response) {
        var showrecords = response.message;
        console.log("Allrequest", showrecords);
        myroute.controllerFor("bankdashboard").set("showrecords", showrecords);
        var len = showrecords.length;
        console.log("length", length);
        for (let i = 0; i <= len; i++) {
          var record = showrecords[i];
          myroute.controllerFor("timestamp").set("record", record);
          var date = showrecords[i].Record.date;
          var time = showrecords[i].Record.time;
          myroute.controllerFor("timestamp").set("time", time);
          myroute.controllerFor("timestamp").set("date", date);
          var date1 = showrecords[i].Record.date;
          var time1 = showrecords[i].Record.time;
          myroute.controllerFor("timestamp").set("time1", time1);
          myroute.controllerFor("timestamp").set("date1", date1);
          var date2 = showrecords[i].Record.date;
          var time2 = showrecords[i].Record.time;
          myroute.controllerFor("timestamp").set("time2", time2);
          myroute.controllerFor("timestamp").set("date2", date2);
          var date3 = showrecords[i].Record.date;
          var time3 = showrecords[i].Record.time;
          myroute.controllerFor("timestamp").set("time3", time3);
          myroute.controllerFor("timestamp").set("date3", date3);
          var date4 = showrecords[i].Record.date;
          var time4 = showrecords[i].Record.time;
          myroute.controllerFor("timestamp").set("time4", time4);
          myroute.controllerFor("timestamp").set("date4", date4);
          var date5 = showrecords[i].Record.date;
          var time5 = showrecords[i].Record.time;
          myroute.controllerFor("timestamp").set("time5", time5);
          myroute.controllerFor("timestamp").set("date5", date5);
          var date6 = showrecords[i].Record.date;
          var time6 = showrecords[i].Record.time;
          myroute.controllerFor("timestamp").set("time6", time6);
          myroute.controllerFor("timestamp").set("date6", date6);
          var date7 = showrecords[i].Record.date;
          var time7 = showrecords[i].Record.time;
          myroute.controllerFor("timestamp").set("time7", time7);
          myroute.controllerFor("timestamp").set("date7", date7);
        }
      }
    });
  }
});
