import {Component, OnInit} from '@angular/core';
import {IPost} from "../../../interfaces";
import {PostService} from "../../../services/post.service";
// import {PostComponent} from "../post/post.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    // PostComponent,
    NgForOf
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit{
  posts: IPost[]

  constructor(private postService:PostService) {
  }

  ngOnInit() {
    this.postService.getAllPosts().subscribe(value => this.posts = value)
  }
}
