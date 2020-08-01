﻿import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { stringify } from 'querystring';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,

  ) {
      // redirect to home if already logged in
    
  }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          dob: ['', Validators.required],
          occupation: [''],
          country:[''],
          email: [''],
          phoneNumber: ['', [Validators.required, Validators.minLength(10)]]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // reset alerts on submit

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      this.loading = true;
    
    }
}
