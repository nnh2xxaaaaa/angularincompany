import { AppService } from './app.server';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzTableModule } from 'ng-zorro-antd/table';
import { LayoutUserComponent } from './layout-user/layout-user.component';


registerLocaleData(en);

@NgModule({
  declarations: [AppComponent, LayoutUserComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    NzMenuModule,
    NzInputModule,
    NzLayoutModule,
    NzDividerModule,
    NzBreadCrumbModule,
    NzCardModule,
    NzIconModule,
    NzModalModule,
    NzFormModule,
    NzTableModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
