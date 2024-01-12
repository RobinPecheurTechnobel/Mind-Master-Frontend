import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Account } from 'src/app/shared/models/account';
import { ThinkerSearchDialogService } from '../../services/thinker-search-dialog.service';
import { SearchDialogComponent } from 'src/app/shared/components/search-dialog/search-dialog.component';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { GroupService } from '../../services/group.service';
import { ThinkerService } from 'src/app/features/thinker-management/services/thinker.service';

@Component({
  selector: 'app-thinker-search-dialog',
  templateUrl: './thinker-search-dialog.component.html',
  styleUrls: ['./thinker-search-dialog.component.scss']
})
export class ThinkerSearchDialogComponent extends SearchDialogComponent<Account>{

  /**
   *
   */
  constructor(protected override activeModal: NgbActiveModal,
    protected override searchDialogService : ThinkerSearchDialogService,
    private _ThinkerService : ThinkerService) {
    super(activeModal, searchDialogService );
  }
  
  override ngOnInit(): void {
    this.items$ = this.searchText$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(searchValue =>
        this._ThinkerService.searchThinker(searchValue))
    );
    this.items$.subscribe({
      next : (value) => {
        this.itemDisplayed = value;
      }
    })
  }
}
