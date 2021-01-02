import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login_regester } from 'src/app/models/Login_regester';

@Component({
  selector: 'mg-regester',
  templateUrl: './regester.component.html',
  styleUrls: ['./regester.component.scss']
})
export class RegesterComponent implements OnInit {

  constructor(private http:HttpClient,private router: Router){}
  ngOnInit(): void {
    
  }
  onRegester(form: any) {
    this.postregester(form.value).subscribe(res => {
      if (res){
        this.router.navigate(['/']);
        alert("Schtroumpf est bien enregestrer");
      }else{
        this.router.navigate(['/']);
        alert("Schtroumpf est ne pas enregestrer");
        
      }
    }, err => {
      console.log(err);
    });
  }
  postregester(emp: Login_regester) {
    return this.http.post('http://localhost:3001/Admin/inscription', emp);
  }

}
