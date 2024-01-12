import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { SearchDialogService } from '../../services/search-dialog.service';


@Component({
  selector: 'app-search-dialog',
  templateUrl: './search-dialog.component.html',
  styleUrls: ['./search-dialog.component.scss']
})
export class SearchDialogComponent<T> implements OnInit{
  itemDisplayed : T[];
  items$!: Observable<T[]>;
  protected searchText$ = new Subject<string>();  

  withRefresh = false;
  
  @Input() title!: string;

  @Output() closeMeEvent = new EventEmitter();
  @Output() chooseMeEvent = new EventEmitter();


constructor(protected activeModal: NgbActiveModal,
  protected searchDialogService : SearchDialogService<T>) {
    this.itemDisplayed = [];
  
}
  ngOnInit(): void {
    this.items$ = this.searchText$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(searchValue =>
        this.searchDialogService.searching(searchValue, this.withRefresh))
    );
    this.items$.subscribe({
      next : (value) => {
        this.itemDisplayed = value;
      }
    })
  }

  getValues():void{

  }

  accept(value : T) {
    this.chooseMeEvent.emit(value);
    this.activeModal.close(value);
  }

  dismiss() {
    this.closeMeEvent.emit();
    this.activeModal.dismiss();
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
  search(searchValue: string) {
    this.searchText$.next(searchValue);
  }
}
