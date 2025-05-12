import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAllUsers } from './store/user/user.selectors';
import { deleteUser, deleteUserSuccess, loadUsers, selectUser } from './store/user/user.actions';
import { User } from './store/user/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngrx3';
  
  users$:any

  constructor(private store: Store) {
    this.users$ = this.store.select(selectAllUsers);
  }

  ngOnInit(): void {
    this.store.dispatch(loadUsers());
  }

  onEdit(user: User) {
    this.store.dispatch(selectUser({ user }));
  }

  onDelete(id: number) {
    this.store.dispatch(deleteUserSuccess({ id }));
  }

}
