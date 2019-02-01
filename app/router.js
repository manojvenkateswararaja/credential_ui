import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('signup');
  this.route('home');
  this.route('newrequest');
  this.route('EmployeeDetail');
  this.route('uploaddoc');
  this.route('header');
  this.route('bankdashboard');
  this.route('head');
  this.route('userdetails');
  this.route('loanschedule');
  this.route('preclosure');
  this.route('ember-paper-stepper');
  this.route('propertydetail');
  this.route('userdetailsdec');
  this.route('loanquotation');
  this.route('fundnegotiation');
  this.route('login1');
  this.route('page2');
  this.route('page3');
  this.route('page4');
  this.route('creditscore');
  this.route('FillCreditScore');
  this.route('legalverification');
  this.route('legalverification2');
  this.route('userloanschedule');
  this.route('credit1');
  this.route('creditscreen');
  this.route('requestpreclose');
  this.route('timestamp');
  this.route('creditscore2');
  this.route('bankdashboard2');
  this.route('home2');
  this.route('notify');
  this.route('paymentgateway');
});

export default Router;
