import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { RootUsers } from '../interface/user.interface';
import { Observable } from 'rxjs';

@Injectable()
export class LayoutUserService  {
  constructor(private http: HttpClient) {}

  isCollapsed: boolean = false;
  users: RootUsers = [];

  fetchUsers(): Observable<RootUsers> {
    return this.http.get<RootUsers>('https://jsonplaceholder.typicode.com/users');
  }

}
