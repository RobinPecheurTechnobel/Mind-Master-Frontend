import { Component, EventEmitter, Inject, Input, OnInit, Output, inject } from '@angular/core';
import { ConfirmDialogData } from '../../models/dialog-data';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

  @Input() title!: string;
  @Input() message!: string;
  @Input() btnOkText!: string;
  @Input() btnCancelText!: string;

  @Output() closeMeEvent = new EventEmitter();
  @Output() confirmEvent = new EventEmitter();

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  public decline() {
    this.closeMeEvent.emit();
    this.activeModal.close(false);
  }

  public accept() {
    this.confirmEvent.emit();
    this.activeModal.close(true);
  }

  public dismiss() {
    this.closeMeEvent.emit();
    this.activeModal.dismiss();
  }
}

