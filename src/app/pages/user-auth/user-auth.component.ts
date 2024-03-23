import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.scss']
})
export class UserAuthComponent implements OnInit {

  login: boolean = true;
  signup : boolean = false
  errorMessage: string = '';
  isDialogOpen = false;

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  signupForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    public translate: TranslateService,
    public dialog: MatDialog
  ) {
    translate.addLangs(['en', 'hi'])
    translate.setDefaultLang('en')
   
   }

  ngOnInit(): void {
  
  }

  submitLoginForm() {
    if (this.loginForm.valid) {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.username === this.loginForm.value.username && user.password === this.loginForm.value.password) {
          console.log('Login successful');
          this.router.navigate(['/movies']);
        } else {
          this.isDialogOpen = true;
          this.errorMessage = 'Invalid username or password';
        }
      } else {
        this.isDialogOpen = true;
        this.errorMessage = 'User not found';
      }
    }      
    }
  

  submitSignupForm() {
    if (this.signupForm.valid) {
      console.log(this.signupForm)
      const formData = {
        email: this.signupForm.value.email,
        phoneNumber: this.signupForm.value.phoneNumber,
        username: this.signupForm.value.username,
        password: this.signupForm.value.password
      };

      localStorage.setItem('user', JSON.stringify(formData));
      this.router.navigate(['/movies']);

    }
  }

  switchLang(lang: string){
    this.translate.use(lang);
    localStorage.setItem('language', lang);

  }

  changeAuth(mode: string) {
    if (mode === 'signup') {
      this.signup = true
      this.login = false
      this.signupForm.reset();
    } else {
      this.signup = false
      this.login = true
      this.loginForm.reset();
    }
  }

  closeDialog(): void {
    console.log('Page enabled.');
    this.isDialogOpen = false;
    this.errorMessage = ''; // Reset error message
  }

  resetPassword() {
    // Your logic for password reset
  }


}
