import { Customer } from './customer.model';
import { Injectable } from '@angular/core';

Injectable({
  providedIn: 'root'
});
export class CustomerService {

  constructor() {}

  listAll(): Customer[] {
    const customers = localStorage.customers;
    return customers ? JSON.parse(customers) : [];
  }

   add(customer: Customer): void {
     const customers = this.listAll();
     customer.id = new Date().getTime();
     customers.push(customer);
     localStorage.customers = JSON.stringify(customers);
   }

  findById(id: number): Customer {
    const customers: Customer[] = this.listAll();
    return customers.find(customer => customer.id === id);
  }

  update(customer: Customer): void {
    const customers: Customer[] = this.listAll();
    customers.forEach((obj, index, objs) => {
      if (customer.id === obj.id ) {
          objs[index] = customer;
      }
      localStorage.customers = JSON.stringify(customers);
    });
  }

  delete(id: number): void {
    let customers: Customer[] = this.listAll();
    customers = customers.filter(customer => customer.id !== id);
    localStorage.customers = JSON.stringify(customers);
  }

  changeStatus(id){}


}
