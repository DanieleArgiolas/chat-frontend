import { FocusMonitor } from '@angular/cdk/a11y';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  form: FormGroup

  constructor(private userService: UserService) {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required])
    })
  }

  onSuccess(res: any) {
    console.log(res);

  }

  onError(err: any) {
    console.log(err);

  }

  onSubmit() {
    if (!this.form.valid) {
      console.log('Form Not Valid');
      return;
    }
    this.userService.login(this.form.value.username).subscribe({
      next: (result: any) => this.onSuccess(result),
      error: (err: any) => this.onError(err)
    })

  }

}
