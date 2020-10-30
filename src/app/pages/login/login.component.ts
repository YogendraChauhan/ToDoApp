import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginUser } from '../../shared/interfaces/user';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../shared/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthenticationService]
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading: boolean;
  returnUrl: string;
  constructor(
    private service: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router
  ) {

    this.form = new FormGroup({
      email: new FormControl('eve.holt@reqres.in', [Validators.required, Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')]),
      password: new FormControl('cityslicka', [Validators.required])

      /* Minimum 8, at least one uppercase letter, one lowercase letter, one digit and one special character
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')]
      */
    });
  }

  ngOnInit() {
    // reset login status
    this.service.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  onSubmit() {
    if (this.form.valid) {
      const user: LoginUser = this.form.value;
      this.loading = true;
      this.service.signIn(user).subscribe((response: any) => {
        this.loading = false;
        this.router.navigate([this.returnUrl]);
      }, (error) => {
        this.loading = false;
        /* show alert with error message here */
      });
    }
  }
}
