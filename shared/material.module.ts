import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

const modules = [MatButtonModule, MatCheckboxModule];

@NgModule({
    imports: [modules],
    exports: [modules],
    declarations: [],
    providers: [],
})
export class MaterialModule { }
