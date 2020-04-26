import { Component, OnInit } from '@angular/core';
import { Signup } from './signup';
import { SignupService } from '../services/user/signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less']
})
export class SignupComponent implements OnInit {
  defaultSignUpModel = new Signup('Vivek R', 'vivek.r@gmail.com', '')
  submitted = false
  constructor(private _signupService: SignupService, private router: Router) { }

  ngOnInit() {
  }
  onSubmit() { 
    this._signupService.post(this.defaultSignUpModel).subscribe(res=>{
      this.submitted = true;
      console.log("res", res);
      this.router.navigate(['/success']);
    })
   }
}
