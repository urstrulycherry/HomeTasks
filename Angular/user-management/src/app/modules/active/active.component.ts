import { Component, OnInit, Optional } from '@angular/core';
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

  activeUsers: User[] = []

  loadActiveUsers() {
    this.userService.getActiveUsers().subscribe({
      next: (users: User[]) => {
        console.log(users);

        this.activeUsers = users;
      },
      error: err => console.log(err),
      complete: () => console.log('completed')
    });
  }

  deactivateUser(id: string) {
    this.userService.setActivation(id, true);
    this.loadActiveUsers();
  }
}
