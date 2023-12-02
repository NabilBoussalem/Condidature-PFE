import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  form!: FormGroup;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      pwd: new FormControl(null, Validators.required),
      confirmPWD: new FormControl(null, Validators.required),
    }, { validators: this.confirmPWDValidator });
  }

  confirmPWDValidator(form: AbstractControl) {

    return form.get('pwd')?.value === form.get('confirmPWD')?.value
      ? null : { 'invalid': true };
  }

  errorMsg!: String;
  submit() {
    this.authService.signUp(this.form.get('email')?.value, this.form.get('pwd')?.value)
      .pipe(take(1)).subscribe({
        next: () => {
          this.router.navigateByUrl("/dashboard");
          this.authService.getStorage().setItem('auth', this.form.get('email')?.value)
        },
        error: () => {
          this.errorMsg = "User already exists";
        }
      })
  }


}
