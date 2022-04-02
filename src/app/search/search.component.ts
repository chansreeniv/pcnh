import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  search: boolean = true;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    console.log(form.value);
    this.router.navigate(['search/results']);
  }
}
