import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() showModal: boolean;
  @Output() responseModal = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  confirm(): any {
    this.responseModal.emit({
      showModal: false,
      shouldDelete: true
    });
  }
  cancel(): any {
    this.responseModal.emit({
      showModal: false,
      shouldDelete: false
    });
  }

}
