import { Type } from "@angular/core";

export interface ConfirmDialogData{
    title: string;
    message: string;
    btnOkText : string;
    btnCancelText : string;
}
export interface SearchDialogData<T>{
    title:string;
}