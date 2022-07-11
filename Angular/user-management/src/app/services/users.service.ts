import { map, Observable, of } from 'rxjs';
import allUsers from 'src/Data/users';
import { User } from 'src/models/user';

export class UsersService {
  constructor() {
    console.log("in UsersService constructor");
  }
  users = of(allUsers);

  getAllUsers(): Observable<User[]> {
    return this.users;
  }

  getUserById(id: string): Observable<User> {
    return this.users.pipe(map((users: User[]) => users.filter((user: { id: string; }) => user.id === id)[0]));
  }

  getActiveUsers(): Observable<User[]> {
    return this.users.pipe(map((users: User[]) => users.filter((user: { isDeleted: boolean; }) => !user.isDeleted)));
  }

  getDeletedUsers(): Observable<User[]> {
    return this.users.pipe(map((users: User[]) => users.filter((user: { isDeleted: boolean; }) => user.isDeleted)));
  }

  setActivation(id: string, isDeleted: boolean) {
    this.users.subscribe(users => {
      const user = users.find(user => user.id === id);
      user!.isDeleted = isDeleted;
    })
  }
}