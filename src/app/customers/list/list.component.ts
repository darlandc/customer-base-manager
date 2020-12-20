import { CustomerService } from './../customer.service';
import { Customer } from '../';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

  customers: Customer[];

  constructor(private customerService: CustomerService)  { }

  ngOnInit(): void {
    this.customers = this.listarTodos();
  }

  listarTodos(): Customer[] {
    return this.customerService.listAll();
  }

  remover($event: any, customer: Customer): void {
    $event.preventDefault();
    if (confirm('Deseja remover a cliente "' + customer.nome + '"?')) {
      this.customerService.remove(customer.id);
      this.customers = this.customerService.listAll();
    }
  }

  alterarStatus(customer: Customer): void {
    if (confirm('Deseja alterar o status da cliente "' + customer.nome + '"?')) {
      this.customerService.changeStatus(customer.id);
      this.customers = this.customerService.listAll();
    }
  }
}
