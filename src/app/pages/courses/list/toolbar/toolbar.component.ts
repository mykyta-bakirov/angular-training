import { Component, ViewEncapsulation, EventEmitter, Input, Output, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'courses-toolbar',
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [],
	styles: [require('./toolbar.component.scss')],
	template: require('./toolbar.component.html')
})
export class CoursesToolbarComponent {
	private searchText: string;

	@Output() public onSearch = new EventEmitter<string>();

	constructor() {
	};

	search() {
		this.onSearch.emit(this.searchText);
	};

	public ngOnChanges() {
		console.log('ngOnChanges');
	}

	public ngOnInit() {
		console.log('ngOnInit');
	}

	public DoCheck() {
		console.log('DoCheck');
	}

	public AfterContentInit() {
		console.log('AfterContentInit');
	}

	public AfterContentChecked() {
		console.log('AfterContentChecked');
	}

	public AfterViewInit() {
		console.log('AfterViewInit');
	}

	public AfterViewChecked() {
		console.log('AfterViewChecked');
	}

	public OnDestroy() {
		console.log('OnDestroy');
	}
}
