import { CustomerService } from './../customer.service';
import { Customer } from './../customer.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {

  @ViewChild('formCustomer') formCustomer: NgForm;
  customer: Customer;

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params.id;
    this.customer = this.customerService.findById(id);
  }

  update(): void {
  if (this.formCustomer.form.valid) {
    this.customerService.update(this.customer);
    this.router.navigate(['/']);
    }
  }
}
