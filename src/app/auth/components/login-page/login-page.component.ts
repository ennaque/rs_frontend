import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginFormService } from "../../forms/login-form.service";

export enum LoginFormFields {
  password = 'password',
  email = 'email'
}

export interface Credentials {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent implements OnInit {

  @Output() private credentials: EventEmitter<Credentials> = new EventEmitter<Credentials>();
  public formFields = LoginFormFields;

  constructor(public formService: LoginFormService) {
  }

  public ngOnInit(): void {
    this.formService.initForm();
  }

  public submitLogin(): void {
    this.credentials.emit(this.formService.form.value);
  }
}
