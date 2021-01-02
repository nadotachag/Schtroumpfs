import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login_regester } from 'src/app/models/Login_regester';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'mg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  baseURL = environment;
  constructor(private http:HttpClient,private router: Router){}
  ngOnInit(): void {
    
  }
  onLogin(form: any) {
    this.postauth(form.value).subscribe(res => {
      if (res){
        this.router.navigate(['/home']);
      }else{
        this.router.navigate(['/']);
      }
    }, err => {
      console.log(err);
    });
  }
  
  postauth(emp:any) {
    return this.http.post('http://localhost:3001/Admin/auth', emp);
  }
 

}
