import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { take } from 'rxjs';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  form!: FormGroup;
  constructor(private authService: AuthService,private router:Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      pwd: new FormControl(null, Validators.required),
    })
  }

  errorMsg!: String;
  submit() {
    this.authService.login(this.form.get("email")?.value, this.form.get("pwd")?.value)
      .pipe(take(1)).subscribe({
        next: (user) => {
          if (!!user) {
            this.router.navigateByUrl("/dashboard")
            this.authService.getStorage().setItem('auth', this.form.get("email")?.value)
          }
          else {
            this.errorMsg = "Email or password incorrect"
          }
        }
      })
  }
}
