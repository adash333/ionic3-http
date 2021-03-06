import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RedditData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RedditData {

  constructor(public http: Http) {
    console.log('Hello RedditData Provider');
  }

  getJsonData(){
    return this.http.get('https://www.reddit.com/r/worldnews/.json').map(res => res.json());
}

}
