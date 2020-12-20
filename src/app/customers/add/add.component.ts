import { CustomerService } from './../customer.service';
import { Customer } from '../customer.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent implements OnInit {

  @ViewChild('formCustomer') formCustomer: NgForm;
  customer: Customer;

  constructor(
    private customerService: CustomerService,
    private router: Router) { }

  ngOnInit(): void {
    this.customer = new Customer();
  }

  add(): void {
  if (this.formCustomer.form.valid) {
    //this.formCustomer(this.customer);
    this.router.navigate(['/customers']);
    }
  }

}
