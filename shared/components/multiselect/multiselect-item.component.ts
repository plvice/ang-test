import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-multiselect-item',
    templateUrl: 'multiselect-item.component.html',
    styleUrls: ['./multiselect-item.component.scss']
})

export class MultiselectItemComponent implements OnInit {
    @Input() data: any;
    @Input() label: string;
    @Input() selected: boolean;

    constructor() { }

    ngOnInit() { }
}
