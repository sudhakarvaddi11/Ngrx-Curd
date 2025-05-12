import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../store/user/user.model';
import { addUser, addUserSuccess, deleteUser, selectUser, updateUser, updateUserSuccess } from '../../store/user/user.actions';
import { selectAllUsers, selectSelectedUser } from '../../store/user/user.selectors';


@Component({
  selector: 'app-user-form',
  standalone: false,
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent {
  name = '';
  email = '';
  mobile = '';
  id: number | null = null;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.select(selectSelectedUser).subscribe(user => {
      if (user) {
        this.id = user.id;
        this.name = user.firstName;
        this.email = user.email;
        this.mobile = user.phone;
      }
    });
  }

  onSubmit() {
    const user: User = {
      id: this.id ?? Date.now(),
      firstName: this.name,
      email: this.email,
      phone: this.mobile
    };

    if (this.id) {
      this.store.dispatch(updateUserSuccess({ user }));
    } else {
      this.store.dispatch(addUserSuccess({ user }));
    }

    this.resetForm();
  }

  resetForm() {
    this.name = '';
    this.email = '';
    this.mobile = '';
    this.id = null;
  }

}
