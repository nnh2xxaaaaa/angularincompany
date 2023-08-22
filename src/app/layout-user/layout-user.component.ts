import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { AppService } from '../app.server';
import { RootUsers } from '../interface/user.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-layout-user',
  templateUrl: './layout-user.component.html',
  styleUrls: ['./layout-user.component.scss'],
})
export class LayoutUserComponent implements OnInit {
  form: FormGroup | undefined;
  users: RootUsers = [];
  validateForm!: UntypedFormGroup;
  captchaTooltipIcon: NzFormTooltipIcon = {
    type: 'info-circle',
    theme: 'twotone',
  };

  innerName: string | undefined = '';
  innerAddress: string | undefined = '';
  innerCompany: string | undefined = '';
  innerReset: string = '';
  changeEmail: string = '';
  review: string = '';
  login: string = '';
  addNewUser : string = '';
  @Input() name: any;

  constructor(
    private readonly appService: AppService,
    private http: HttpClient,
    private fb: FormBuilder
  ) {
    setInterval(() => {
        if(this.users.length  >  10) {
            this.review = 'disabled'
            this.login = 'Khong the dang ki'
        }else {
          this.review = ''
          this.login = 'co the dang ki'
        }
    }, 1000);
  }

  ngOnInit() {
    this.http
      .get<RootUsers>('https://jsonplaceholder.typicode.com/users')
      .subscribe((res: RootUsers) => {
        this.users = res;
      });
  }

  onclickName(name: string, address: string, company: string) {
    this.innerName = name;
    this.innerAddress = address;
    this.innerCompany = company;
  }

  async onclickDelete(name: string | undefined) {
    const index = this.users.findIndex((user) => user.name === name);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
    this.innerName = undefined;
    this.innerAddress = undefined;
    this.innerCompany = undefined;
  }

  ss() {
    alert('Quickly clicked'); 
  }

  isVisible = false;

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    const userToUpdate = this.users.find(
      (user) => user.name === this.innerName
    );
    if (userToUpdate) {
      this.innerName = this.changeEmail;
      userToUpdate.name = this.changeEmail;
    }

    console.log(userToUpdate);
    console.log(this.users);
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  clickPage() {
    this.innerName = undefined;
    this.innerAddress = undefined;
    this.innerCompany = undefined;
  }

  addUser(){
      if(this.addNewUser.length!=0){
        this.users.push({
          "id": 1,
          "name": `${this.addNewUser}`,
          "username": "Bret",
          "email": "Sincere@april.biz",
          "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
              "lat": "-37.3159",
              "lng": "81.1496"
            }
          },
          "phone": "1-770-736-8031 x56442",
          "website": "hildegard.org",
          "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
          }
        })
      }
  }
}
