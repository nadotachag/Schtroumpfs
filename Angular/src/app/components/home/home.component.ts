import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Schtroumpf } from 'src/app/shared/Schtroumpf.model';
import { SchtroumpfService } from 'src/app/shared/Schtroumpf.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private SchtroumpfService: SchtroumpfService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshSchtroumpfList();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.SchtroumpfService.selectedSchtroumpf = {
      _id: "",
      age: 0,
      famille: "",
      race: "",
      nourriture: ""
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.SchtroumpfService.postSchtroumpf(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshSchtroumpfList();
        alert('Saved successfully');
      });
    }
    else {
      this.SchtroumpfService.putSchtroumpf(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshSchtroumpfList();
        alert('Updated successfully');
      });
    }
  }

  refreshSchtroumpfList() {
    this.SchtroumpfService.getSchtroumpfList().subscribe((res) => {
      this.SchtroumpfService.schtroumpf = res as Schtroumpf[];
    });
  }

  onEdit(emp: Schtroumpf) {
    this.SchtroumpfService.selectedSchtroumpf = emp;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.SchtroumpfService.deleteSchtroumpf(_id).subscribe((res) => {
        this.refreshSchtroumpfList();
        this.resetForm(form);
        alert('Deleted successfully');
      });
    }
  }

}
