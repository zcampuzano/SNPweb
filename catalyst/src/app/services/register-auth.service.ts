import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class RegisterAuthService {

  domain = "http://localhost:8080"; // Development Domain - Not Needed in Production
  loginAuthToken;
  user;
  options;


  constructor(
    private http: Http
  ) {}

  // Function to create headers, add token, to be used in HTTP requests
  createAuthenticationHeaders() {
    this.loadToken(); // Get token so it can be attached to headers
    // Headers configuration options
    this.options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json', // Format set to JSON
        'authorization': this.loginAuthToken // Attach token
      })
    });
  }

  createRegisterToken() {
    return this.http.get(this.domain + '/authentication/createRegisterToken').map(res => res.json());
  }

  // Function to get token from client local storage
  loadToken() {
    this.loginAuthToken = localStorage.getItem('token'); // Get token and asssign to variable to be used elsewhere
  }

  createOrganization(organization) {
    return this.http.post(this.domain + '/authentication/createOrganization', organization).map(res => res.json());
  }

  createSport(sport) {
    return this.http.post(this.domain + '/authentication/createSport', sport).map(res => res.json());
  }

  getOrganizations() {
    this.createAuthenticationHeaders(); // Create headers before sending to API
    return this.http.get(this.domain + '/authentication/getOrganizations', this.options).map(res => res.json());
  }

  // Function to register user accounts
  registerUser(user) {
    return this.http.post(this.domain + '/authentication/register', user).map(res => res.json());
  }

  // Function to check if username is taken
  checkUsername(username) {
    return this.http.get(this.domain + '/authentication/checkUsername/' + username).map(res => res.json());
  }

  // Function to check if e-mail is taken
  checkEmail(email) {
    return this.http.get(this.domain + '/authentication/checkEmail/' + email).map(res => res.json());
  }

  // Function to check if e-mail is taken
  checkOrganization(organizationname) {
    return this.http.get(this.domain + '/authentication/checkOrganization/' + organizationname).map(res => res.json());
  }

  // Function to login user
  login(user) {
    return this.http.post(this.domain + '/authentication/login', user).map(res => res.json());
  }

  // Function to logout
  logout() {
    this.loginAuthToken = null; // Set token to null
    localStorage.clear(); // Clear local storage
  }

  // Function to store user's data in client local storage
  storeUserData(token, role) {
    localStorage.setItem('token', token); // Set token in local storage
    this.loginAuthToken = token; // Assign token to be used elsewhere
    this.user = role;
  }

  // Function to get user's profile data
  getProfile() {
    this.createAuthenticationHeaders(); // Create headers before sending to API
    return this.http.get(this.domain + '/authentication/profile', this.options).map(res => res.json());
  }

  // change username
  changeUsername(newUsername) {
    this.createAuthenticationHeaders(); // Create headers before sending to API
    return this.http.post(this.domain + '/authentication/changeUsername', newUsername).map(res => res.json());
  }

  // Function to check if user is logged in
  loggedIn() {
      if (this.user != null) {
        return tokenNotExpired();
      }
  }

  isAdmin() {
    return this.user.role;
  }



}
