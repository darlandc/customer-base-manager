import { CustomerService } from './../customer.service';
import { Customer } from '../';
import { Component, OnInit } from '@angular/core';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  customers: Customer[];
  showModal: boolean;
  confirmDelete: boolean;
  customer: Customer;

  constructor(private customerService: CustomerService)  { }

  ngOnInit(): void {
    this.customers = this.listAll();
  }

  listAll(): Customer[] {
    return this.customerService.listAll();
  }

  deleteConfirmation(customer: Customer): void {
    this.customer = customer;
    this.showModal = true;
  }

  getResponseModal(event): any {
    this.showModal = event.showModal;
    if (event.shouldDelete){
      this.customerService.delete(this.customer.id);
      this.customers = this.customerService.listAll();
    }
  }

}
