import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
// import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  @Output() onSelect = new EventEmitter<void>()
  isNavOn: boolean = false
  isLoggedIn: boolean = false
  subscription: Subscription
  constructor(private router: Router) { }

  async ngOnInit() {
  }
  toggleMenu() {
    this.isNavOn = !this.isNavOn;
  }
  onClickLink(path: string) {
    if (this.isNavOn) this.isNavOn = !this.isNavOn;
    this.router.navigateByUrl(`${path}`);
  }

  onClickHeader() {
    this.router.navigateByUrl('');
  }
}
