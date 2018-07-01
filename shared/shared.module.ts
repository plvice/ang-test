import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NavComponent } from './components/nav.component';
import { MultiselectComponent } from '@components/multiselect/multiselect.component';
import { MultiselectItemComponent } from '@components/multiselect/multiselect-item.component';

const components = [
    NavComponent,
    MultiselectComponent,
    MultiselectItemComponent
]

const modules = [
    FormsModule,
    CommonModule
]

@NgModule({
    imports: [modules],
    exports: [components, modules],
    declarations: [components],
    providers: [],
})
export class SharedModule { }

