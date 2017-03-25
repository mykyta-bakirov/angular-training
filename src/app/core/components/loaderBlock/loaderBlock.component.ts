import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { LoaderBlockService } from '../../services/loaderBlock/loaderBlock.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'loader-block',
	templateUrl: './loaderBlock.component.html',
	styles: [require('./loaderBlock.component.scss')],
	providers: [],
	encapsulation: ViewEncapsulation.None
})
export class LoaderBlockComponent {
	public showLoader: Boolean = false;
	private showLoaderSubscription: Subscription;

	constructor(private loaderBlockService: LoaderBlockService) {

	}

	public ngOnInit() {
		this.showLoaderSubscription = this.loaderBlockService.ShowLoader.subscribe(
			showLoader => {
				this.showLoader = showLoader;
			}
		);
	}

	public ngOnDestroy() {
		this.showLoaderSubscription.unsubscribe();
	}
}
