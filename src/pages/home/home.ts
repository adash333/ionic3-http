import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditData } from '../../providers/reddit-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  newsData: any;

  constructor(public navCtrl: NavController, public redditService: RedditData) {

  }

  ionViewDidLoad(){
    this.redditService.getJsonData().subscribe(
      result => {
        this.newsData=result.data.children;
        console.log("Success : "+this.newsData);
      },
      err =>{
        console.error("Error : "+err);
      } ,
      () => {
        console.log('getData completed');
      }
    );
  }

}
