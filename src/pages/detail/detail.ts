import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
