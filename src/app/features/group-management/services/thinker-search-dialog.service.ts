import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Account } from 'src/app/shared/models/account';
import { SearchDialogService } from 'src/app/shared/services/search-dialog.service';
import { ThinkerSearchDialogComponent } from '../components/thinker-search-dialog/thinker-search-dialog.component';
import { ThinkerService } from '../../thinker-management/services/thinker.service';

@Injectable({
  providedIn: 'root'
})
export class ThinkerSearchDialogService extends SearchDialogService<Account>{

  /**
   *
   */
  constructor(protected override _ModalService: NgbModal,
    private _ThinkerService : ThinkerService) {
    super(_ModalService);
    
  }

  override searching(searchValue: string, withRefresh: boolean): Observable<Account[]> {
    return this._ThinkerService.searchThinker(searchValue);
  }
  override startComponent(dialogSize: 'sm'|'lg') : NgbModalRef{
    return this._ModalService.open(ThinkerSearchDialogComponent, { size: dialogSize });
  }
  
}
