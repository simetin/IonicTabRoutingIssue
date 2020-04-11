import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {
  post: number;

  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.post = this.activatedRoute.snapshot.params['postid'];
  }

}
