import Controller from '@ember/controller';

export default Controller.extend({
    // showDashboard:true,
    actions: {
        userdetails: function(showrecords) {
            this.set('record',showrecords)
            console.log("get credit score",showrecords)
             var score=showrecords.Records.creditscore
             this.set('score',score)
             var userId=showrecords.Key
             this.set('userId',userId)
             console.log("i got creditscore in bank",score)
             var bankpreclose=showrecords.Records.bankpreclose
             var statuspreclose=showrecords.Records.statuspreclose
             var statusForCreditRequest=showrecords.Records.statusForCreditRequest
             var bankpreclose=showrecords.Records.bankpreclose
             if(showrecords.Records.statusForUser==="Request sent successfully"){
                // swal("User Applied for loan sucessfully!!", "status", "info");
            }else if(showrecords.Records.statusForCreditRequest=="Requested For Creditscore"){
                // swal("Bank have Requested For Creditscore!! ", "status", "info");
                
            }else if(showrecords.Records.statusForCreditRequest=="Creditscore Generated"){
                // swal(" Creditscore Generated!! ", "status", "info");
            }else if(showrecords.Records.statusForCreditRequest=="Requested for Legalverifier"){
                // swal(" Requested for Legalverifier!! Navigating to LoanQuotation>>", "status", "info");
            }else if(showrecords.Records.statusForCreditRequest=="Legalverifier approved"){
                // swal("Legalverification approved!!", "status", "info");
            }else if(showrecords.Records.statusForCreditRequest=="Legalverifier rejected"){
                // swal("Legalverification Rejected!!", "status", "info");
            }else if(showrecords.Records.statusForCreditRequest==="Loan Quotation"){
            // swal("Loan Successfully scheduled!!", "status", "success");
            // this.transitionToRoute('userloanschedule')
            }
            
            
             if(bankpreclose=="Loan Closed"){
                swal("Sorry!", "Loan Alredy schedule!", "info");
              }
             console.log("bankpreclose",bankpreclose)
              if(score == null){
                  this.transitionToRoute('userdetails')
              }else if(score!=null){
                    this.transitionToRoute('userdetailsdec')
                  }
                },
            

            postPrecoseRequest:function(record){
                   //console.log("hi manoj",showrecords);
                    swal("Way to Preclosure Request!", "", "success");
                    console.log("recordrecord",record)
                    this.set('record',record)
                    this.transitionToRoute('requestpreclose')
                 },
                 logout:function(){
                    console.log("in logout");
                    window.location.reload(true);
                },
                }
   
});
