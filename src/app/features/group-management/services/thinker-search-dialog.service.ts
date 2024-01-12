import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Account } from 'src/app/shared/models/account';
import { SearchDialogService } from 'src/app/shared/services/search-dialog.service';
import { GroupService } from './group.service';
import { SearchDialogComponent } from 'src/app/shared/components/search-dialog/search-dialog.component';
import { ThinkerSearchDialogComponent } from '../components/thinker-search-dialog/thinker-search-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ThinkerSearchDialogService extends SearchDialogService<Account>{

  /**
   *
   */
  constructor(protected override _ModalService: NgbModal,
    private _GroupService : GroupService) {
    super(_ModalService);
    
  }

  override searching(searchValue: string, withRefresh: boolean): Observable<Account[]> {
    return this._GroupService.searchThinker(searchValue);
  }
  override startComponent(dialogSize: 'sm'|'lg') : NgbModalRef{
    return this._ModalService.open(ThinkerSearchDialogComponent, { size: dialogSize });
  }
  
}
