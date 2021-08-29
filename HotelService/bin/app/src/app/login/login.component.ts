import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   loginErrorMessage: string | null = ""

  loginForm: FormGroup = this.fb.group({
    email: ['abc@example.com', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  })


  handleSubmit(event: Event) {
    event.preventDefault()
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;
      this.userService.doAuth(credentials)
        .subscribe({
          next: (response: any) => {
            this.loginErrorMessage=null;
            localStorage.setItem("Auth-Token", response.jwt)
            this.router.navigate(['hotel'])
          },
          error: (err: any) => {
            this.loginErrorMessage=err.error.messsage
          }
        })
    }
  }

  constructor(
    private fb: FormBuilder, 
    private userService: UserService,
    private router:Router) { }

  ngOnInit(): void {
  }

}
