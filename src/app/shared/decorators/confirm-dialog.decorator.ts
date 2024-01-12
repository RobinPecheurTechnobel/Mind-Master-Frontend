import { ConfirmDialogComponent } from "../components/confirm-dialog/confirm-dialog.component";
import { ConfirmDialogData } from "../models/dialog-data";
import { DialogService } from "../services/dialog.service";

const defaultConfirmData = {
    title: "Confirmation",
    message: "Voulez-vous vraiment effectuer cette action ?",
    btnCancelText: "Non",
    btnOkText: "oui"
}


export function needConfirmation ( confirmData : ConfirmDialogData = defaultConfirmData) {

    return function (target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = async function (...args: any) {
            DialogService.getInstance()?.confirm(
                confirmData
                ).subscribe((validation) => {
                if (validation){
                    originalMethod.apply(this, args);
                }
              });
        };

        return descriptor;
    };


}