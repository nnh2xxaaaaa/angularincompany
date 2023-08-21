import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { AppService } from '../app.server';
import { RootUsers } from '../interface/user.interface';

@Component({
  selector: 'app-layout-user',
  templateUrl: './layout-user.component.html',
  styleUrls: ['./layout-user.component.scss'],
})
export class LayoutUserComponent implements OnInit {
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
  @Input() name: any;

  constructor(
    private readonly appService: AppService,
    private http: HttpClient
  ) {}

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

  isVisible = false;

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  async updateName(string: string) {
    console.log('Updating name');
  }

  clickPage() {
    this.innerName = undefined;
    this.innerAddress = undefined;
    this.innerCompany = undefined;
  }
}
