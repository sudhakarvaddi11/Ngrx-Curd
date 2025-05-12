import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../store/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
private apiUrl = 'https://dummyjson.com/users';
  constructor(private http: HttpClient) {}

  getUsers():Observable<User[]>{
return this.http.get<User[]>(this.apiUrl);
}
addUser(user: User): Observable<User> {
return this.http.post<User>(this.apiUrl, user);
}
updateUser(user: User): Observable<User> {
return this.http.put<User>(`${this.apiUrl}/${user.id}`, user);
}
deleteUser(id: number): Observable<void> {
return this.http.delete<void>(`${this.apiUrl}/${id}`);
}
}

