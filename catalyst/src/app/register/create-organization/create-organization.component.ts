import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterAuthService} from '../../services/register-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-organization',
  templateUrl: './create-organization.component.html',
  styleUrls: ['./create-organization.component.css'],
  providers: []
})
export class CreateOrganizationComponent implements OnInit {

  form: FormGroup;
  message;
  messageClass;
  processing = false;


  constructor(
    private formBuilder: FormBuilder,
    private authService: RegisterAuthService,
    private router: Router
  ) {
    this.createForm(); // Create Angular 2 Form when component loads
  }

  // Function to create registration form
  createForm() {
    this.form = this.formBuilder.group({
      // First Name Input
      organizationname: ['', Validators.compose([
        Validators.required, // Field is required
        this.validateUsername // Custom validation
      ])],
      location: ['', Validators.compose([
        Validators.required, // Field is required
        this.validateUsername // Custom validation
      ])]
    }, { validator: null}); // Add custom validator to form for matching passwords

  }

  // Function to disable the registration form
  disableForm() {
    this.form.controls['organizationname'].disable();
    this.form.controls['location'].disable();
  }

  // Function to enable the registration form
  enableForm() {
    this.form.controls['organizationname'].enable();
    this.form.controls['location'].enable();
  }


  // Function to validate username is proper format
  validateUsername(controls) {
    // Create a regular expression
    const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
    // Test username against regular expression
    if (regExp.test(controls.value)) {
      return null; // Return as valid username
    } else {
      return { 'validateUsername': true } // Return as invalid username
    }
  }


  ngOnInit() {
  }

}
