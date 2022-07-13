import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/models/user';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  userPreview!: Observable<User>;
  allUsers!: Observable<User[]>

  constructor(private userService: UsersService) {
    console.log('ManageComponent loaded.');
  }

  ngOnInit(): void {
    this.allUsers = this.userService.getAllUsers();
  }

  showUser(id: string) {
    this.userPreview = this.userService.getUserById(id);
  }
}
