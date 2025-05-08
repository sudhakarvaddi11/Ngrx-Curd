import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../store/user/user.model';
import { addUser, deleteUser, selectUser, updateUser } from '../../store/user/user.actions';
import { selectAllUsers, selectSelectedUser } from '../../store/user/user.selectors';


@Component({
  selector: 'app-user-form',
  standalone: false,
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent {
  users$: Observable<User[]>;
  selectedUser$: Observable<User | null>;

  name = '';
  email = '';
  mobile = '';
  editMode = false;
  editingId: number | null = null;

  constructor(private store: Store) {
    this.users$ = this.store.select(selectAllUsers);
    this.selectedUser$ = this.store.select(selectSelectedUser);

    this.selectedUser$.subscribe(user => {
      if (user) {
        this.editMode = true;
        this.editingId = user.id;
        this.name = user.name;
        this.email = user.email;
        this.mobile = user.mobile;
      }
    });
  }

  submitForm() {
    if (this.editMode && this.editingId !== null) {
      this.store.dispatch(updateUser({
        user: {
          id: this.editingId,
          name: this.name,
          email: this.email,
          mobile: this.mobile
        }
      }));
    } else {
      const newUser: User = {
        id: Date.now(),
        name: this.name,
        email: this.email,
        mobile: this.mobile
      };
      this.store.dispatch(addUser({ user: newUser }));
    }

    this.resetForm();
  }

  resetForm() {
    this.name = '';
    this.email = '';
    this.mobile = '';
    this.editMode = false;
    this.editingId = null;
  }

  onEdit(id: number) {
    this.store.dispatch(selectUser({ id }));
  }

  onDelete(id: number) {
    this.store.dispatch(deleteUser({ id }));
  }
}
