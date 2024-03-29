import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IComment, IPost} from "../interfaces";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient:HttpClient) { }

  getAllPosts(): Observable<IPost[]>{
    return this.httpClient.get<IPost[]>(urls.posts.base)
  }

  getCommentsByPostId(postId: number): Observable<IComment[]>{
    return this.httpClient.get<IComment[]>(urls.posts.commentsByPostId(postId))
  }
}
