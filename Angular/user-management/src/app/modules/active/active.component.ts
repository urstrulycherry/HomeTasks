import { Component, OnInit, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/models/user';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent implements OnInit {
  constructor(private userService: UsersService) {
  }

  ngOnInit(): void {
    this.loadActiveUsers();
  }

  activeUsers!: Observable<User[]>

  loadActiveUsers() {
    this.activeUsers = this.userService.getActiveUsers()
  }

  deactivateUser(id: string) {
    this.userService.setActivation(id, true);
    this.loadActiveUsers();
  }
}
