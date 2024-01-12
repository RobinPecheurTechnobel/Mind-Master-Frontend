import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subject, identity } from 'rxjs';
import { SearchDialogData } from '../models/dialog-data';
import { SearchDialogComponent } from '../components/search-dialog/search-dialog.component';
import { Account } from '../models/account';

@Injectable({
  providedIn: 'root'
})
export abstract class SearchDialogService<T> {
  modalRef!: NgbModalRef
  private componentSubscriber!: Subject<T>;

  constructor(protected _ModalService: NgbModal) { }

  private defaultValue : SearchDialogData<T> = {
    title : "search"
  }

  search(data : SearchDialogData<T> = this.defaultValue,
    dialogSize: 'sm'|'lg' = 'sm'): Observable<T> {
    this.modalRef = this.startComponent(dialogSize);
    this.modalRef.componentInstance.title = data.title;
    
    this.modalRef.componentInstance.closeMeEvent.subscribe(() => this.closeModal());
    this.modalRef.componentInstance.chooseMeEvent.subscribe({
      next : (value:T) => {
        this.ok(value);
      }
      });
   
    this.componentSubscriber = new Subject<T>();
    return this.componentSubscriber.asObservable();
  }
  startComponent(dialogSize: 'sm'|'lg') : NgbModalRef{
    return this._ModalService.open(SearchDialogComponent<T>, { size: dialogSize });
  }
  closeModal() {
    this.modalRef.close();
    this.componentSubscriber.complete();
  }

  ok(value : T) {
    this.componentSubscriber.next(value);
    this.closeModal();
  }  
  abstract searching(searchValue: string, withRefresh: boolean): Observable<T[]>
}
