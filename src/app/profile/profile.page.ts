import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage {

  posts = [1, 4, 5];

  constructor(public router: Router) {}

  viewPostOp1(post){
    this.router.navigate(["tabs", "home", "post", post]);
  }

  viewPostOp2(post){
    this.router.navigate(["tabs", "post", post]);
  }

}
