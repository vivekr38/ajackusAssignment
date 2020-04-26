import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  
  constructor() { }
  
  post(userData){
    return of(new HttpResponse({ status: 200, body:  {
      message : "sign-up successfully",
      data : userData
    }}))
  }
}

