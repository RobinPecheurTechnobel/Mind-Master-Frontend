import { Component, ComponentDecorator, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDialogData } from '../models/dialog-data';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  modalRef!: NgbModalRef
  private componentSubscriber!: Subject<boolean>;

  static instance : DialogService | null= null;
  constructor(private _modalService: NgbModal) {
    DialogService.instance = this;
  }
  static getInstance(){
    return DialogService.instance;
  }

  confirm(data : ConfirmDialogData,
    dialogSize: 'sm'|'lg' = 'sm'): Observable<boolean> {
    this.modalRef = this._modalService.open(ConfirmDialogComponent, { size: dialogSize });
    this.modalRef.componentInstance.title = data.title;
    this.modalRef.componentInstance.message = data.message;
    this.modalRef.componentInstance.btnOkText = data.btnOkText;
    this.modalRef.componentInstance.btnCancelText = data.btnCancelText;
    
    this.modalRef.componentInstance.closeMeEvent.subscribe(() => this.closeModal());
    this.modalRef.componentInstance.confirmEvent.subscribe(() => this.ok());
   
    this.componentSubscriber = new Subject<boolean>();
    return this.componentSubscriber.asObservable();
  }

  closeModal() {
    this.modalRef.close();
    this.componentSubscriber.complete();
  }

  ok() {
    this.componentSubscriber.next(true);
    this.closeModal();
  }
}
