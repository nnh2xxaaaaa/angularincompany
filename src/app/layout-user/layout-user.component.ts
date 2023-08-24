import { Component, Input, OnInit } from '@angular/core';
import { LayoutUserService } from './layout-service.service';
import { RootUsers } from '../interface/user.interface';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-layout-user',
  templateUrl: './layout-user.component.html',
  styleUrls: ['./layout-user.component.scss'],
})
export class LayoutUserComponent {
  constructor(
    private readonly layoutUserService: LayoutUserService,
    private modal: NzModalService,
    private message: NzMessageService
  ) {}

  users = this.layoutUserService.users;
  isCollapsed = this.layoutUserService.isCollapsed;
  innerName: string = '';
  innerEmail: string = '';
  innerAddress: string = '';

  ngOnInit() {
    this.layoutUserService.fetchUsers().subscribe(
      (users: RootUsers) => {
        this.users = users;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  isDataUsers() {
    console.log(this.users);
  }

  isInfo(usersInfo: string) {
    const findName = this.users.find((user) => user.name === usersInfo);

    if (findName) {
      this.innerName = findName.name;
      this.innerEmail = findName.email;
      this.innerAddress = findName.address.city;
    }
  }

  delete(userDelete: string) {
    const findIndex = this.users.findIndex((user) => user.name === userDelete);
    console.log(findIndex);
    if (findIndex != -1) {

      this.users.splice(findIndex, 1);

      const createMessage = (type: string): void => {
        this.message.create('success', `Delete successful ${userDelete}`);
      };

      createMessage('success');
    }else {
      const createMessage = (type: string): void => {
        this.message.create('error', `Delete Failed ${userDelete}`);
      };

      createMessage('error');
    }
  }

  showConfirm(info: string): void {
    this.modal.confirm({
      nzTitle: '<i>Do you Want to delete these items?</i>',
      nzContent: '<b>Some descriptions</b>',
      nzOnOk: () => this.delete(info),
    });
  }
}
