import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthPage } from './auth.page';
import { LoginPageComponent } from "./components/login-page/login-page.component";

const routes: Routes = [
    {
        path: '',
        component: AuthPage
    },
    {
        path: 'login',
        component: LoginPageComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthPageRoutingModule {
}
