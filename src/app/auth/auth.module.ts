import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthPageRoutingModule } from './auth-routing.module';

import { AuthPage } from './auth.page';
import { LoginFormService } from "./forms/login-form.service";
import { LoginPageComponent } from "./components/login-page/login-page.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AuthPageRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ],
    declarations: [
        AuthPage,
        LoginPageComponent
    ],
    providers: [LoginFormService]
})
export class AuthPageModule {
}
