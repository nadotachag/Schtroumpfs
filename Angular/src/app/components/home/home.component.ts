import { HttpClient } from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Schtroumpf } from 'src/app/models/Schtroumpf.model';

@Component({
  selector: 'mg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  selectedSchtroumpf: Schtroumpf;
  schtroumpf: Schtroumpf[];

  constructor(private http: HttpClient, private router: Router) {
     this.selectedSchtroumpf = {
      _id: "",
      age: 0,
      famille: "",
      race: "",
      nourriture: ""
    }
   }
  ngOnInit() {
    this.resetForm();
    this.refreshSchtroumpfList();
  }
  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.selectedSchtroumpf = {
      _id: "",
      age: 0,
      famille: "",
      race: "",
      nourriture: ""
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.postSchtroumpf(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshSchtroumpfList();
        window.location.reload();
        alert('Saved successfully');
      });
    }
    else {
      this.putSchtroumpf(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshSchtroumpfList();
        window.location.reload();
        alert('Updated successfully');
      });
    }
  }

  refreshSchtroumpfList() {
    this.getSchtroumpfList().subscribe((res) => {
      this.schtroumpf = res as Schtroumpf[];
    });
  }

  onEdit(emp: Schtroumpf) {
    this.selectedSchtroumpf = emp;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.deleteSchtroumpf(_id).subscribe((res) => {
        this.refreshSchtroumpfList();
        this.resetForm(form);
        alert('Deleted successfully');
      });
    }
  }


  postSchtroumpf(emp: Schtroumpf) {
    return this.http.post('http://localhost:3001/Schtroumpf/add', emp);
  }

  getSchtroumpfList() {
    return this.http.get('http://localhost:3001/Schtroumpf');
  }

  putSchtroumpf(emp: Schtroumpf) { 
    return this.http.put(`http://localhost:3001/Schtroumpf/${emp._id}`, emp);
  }

  deleteSchtroumpf(_id: string) {
    return this.http.delete(`http://localhost:3001/Schtroumpf/${_id}`);
  }
  getonSchtroumpf(_id: string) {
    return this.http.get(`http://localhost:3001/Schtroumpf/${_id}`);

  }
  logout() {
    this.router.navigate(['/']);

  }
}
