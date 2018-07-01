import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-multiselect',
    templateUrl: 'multiselect.component.html',
    styleUrls: ['./multiselect.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => MultiselectComponent),
            multi: true
        }
    ]
})

export class MultiselectComponent implements OnInit, ControlValueAccessor {
    @Input() data: any[];
    @Input() searchMinLength = 3;
    @Input() labelKey: string;

    public searchPhrase: string;

    private filteredData: any[];
    private propagateChange = (_: any) => { };

    constructor() { }

    ngOnInit() { }

    writeValue(obj: any): void {

    }

    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    registerOnTouched(fn: any): void { }

    setDisabledState(isDisabled: boolean): void {

    }

    onKeyup() {
        const phrase = this.searchPhrase.toLowerCase();

        if (this.isSearchPhraseValid) {
            this.filteredData = this.data.filter(item => {
                const param = item.name.toLowerCase();
                return param && param.indexOf(phrase) !== -1;
            })
            console.log(this.filteredData);
        } else {
            this.filteredData = [];
        }
    }

    onInputFocusin() {
        if (!this.searchMinLength) {
            this.filteredData = this.data;
        }
    }

    onInputFocusout() { }

    getLabelForItem(item: any): string {
        let result = item;

        if (this.labelKey) {
            result = item[this.labelKey];
        }

        return result;
    }

    get isSearchPhraseValid() {
        return !this.searchMinLength || this.searchPhrase && this.searchPhrase.length >= this.searchMinLength;
    }
}
