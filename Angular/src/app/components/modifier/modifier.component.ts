import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Schtroumpf } from 'src/app/models/Schtroumpf.model';

@Component({
  selector: 'mg-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.scss']
})
export class ModifierComponent implements OnInit {
  emp_id: any;
  schtroumpf:Schtroumpf;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient) {
    this.schtroumpf = {
      _id: "",
      age: 0,
      famille: "",
      race: "",
      nourriture: ""
    }
   }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.emp_id = params['emp'];
    });
    this.getonSchtroumpf(this.emp_id);

  }
  getonSchtroumpf(emp_id:any) {
    this.GetonSchtroumpf(emp_id).subscribe((res) => {
      this.schtroumpf = res as Schtroumpf;
    });
  }
  GetonSchtroumpf(_id: string) {
    return this.http.get(`http://localhost:3001/Schtroumpf/${_id}`);
  }
  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.postSchtroumpf(form.value).subscribe((res) => {
      this.router.navigate(['/home']);

        alert('Saved successfully');
      });
    }
    else {
      this.putSchtroumpf(form.value).subscribe((res) => {
      this.router.navigate(['/home']);
        alert('Updated successfully');
      });
    }
  }
  
  
  postSchtroumpf(emp: Schtroumpf) {
    return this.http.post('http://localhost:3001/Schtroumpf/add', emp);
  }
  putSchtroumpf(emp: Schtroumpf) { 
    return this.http.put(`http://localhost:3001/Schtroumpf/${emp._id}`, emp);
  }
  logout() {
    this.router.navigate(['/']);

  }

}
