import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppService } from './app.server';
import { Component, Injectable } from '@angular/core';
import { RootUsers, User } from './interface/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
@Injectable()
export class AppComponent {
  constructor(
    private readonly appService: AppService,
    private http: HttpClient
  ) {}

  users:RootUsers = []

  testService() {
    this.appService.getHello();
  }
  incrementCounter() {
    throw new Error('fix');
  }

  ngOnInit() {
    this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe((res: RootUsers) => {
        this.users = res;
      });
  }

  title = 'angular-zero-up-level';

}
