import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRegesterService } from 'src/app/shared/Login_regester.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private login_regester:LoginRegesterService, private router: Router) { }

  ngOnInit(): void {
    
  }
  onLogin(form: any) {
    this.login_regester.postauth(form.value).subscribe(res => {
      if (res){
        this.router.navigate(['/home']);
      }else{
        this.router.navigate(['/']);
      }
    }, err => {
      console.log(err);
    });
  }
  onRegester(form: any) {
    this.login_regester.postregester(form.value).subscribe(res => {
      if (res){
        alert("Schtroumpf est bien enregestrer");
      }else{
        alert("Schtroumpf est ne pas enregestrer");
        
      }
    }, err => {
      console.log(err);
    });
  }

}
