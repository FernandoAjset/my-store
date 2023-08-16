import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {
  public showMenu = false;
  public counter = 0;
  private myCartSubscripcion?: Subscription;

  constructor(private _storeService: StoreService) {

  }


  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  ngOnInit(): void {
    this.myCartSubscripcion = this._storeService.myCart$.subscribe(data => {
      this.counter = data.length;
    });
  }

  ngOnDestroy(): void {
    this.myCartSubscripcion?.unsubscribe();
  }
}
