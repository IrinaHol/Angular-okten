import {Component, Input, Output} from '@angular/core';
import {IUser} from "../../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input()
  user: IUser

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  getUser(): void {
    // this.router.navigate(['users', this.user.id])
    this.router.navigate([this.user.id], {
      relativeTo: this.activatedRoute,         //щоб йти від поточної урли
      state: this.user
    })
  }
}
