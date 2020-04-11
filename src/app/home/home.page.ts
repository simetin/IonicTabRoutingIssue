import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  posts = [1, 2, 3, 4, 5];

  constructor(public router: Router) {}

  viewPostOp1(post){
    this.router.navigate(["tabs", "home", "post", post]);
  }

  viewPostOp2(post){
    this.router.navigate(["tabs", "post", post]);
  }

}
