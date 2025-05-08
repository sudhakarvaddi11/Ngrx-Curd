import { createAction, props } from '@ngrx/store';
import { User } from './user.model';

export const addUser = createAction('[User] Add', props<{ user: User }>());
export const deleteUser = createAction('[User] Delete', props<{ id: number }>());
export const selectUser = createAction('[User] Select', props<{ id: number }>());
export const updateUser = createAction('[User] Update', props<{ user: User }>());
