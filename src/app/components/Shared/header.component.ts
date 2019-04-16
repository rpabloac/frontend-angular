import { Component } from '@angular/core';

@Component({
  selector: 'app-header-component',
  template: `
    <!-- ***** Header Area Start ***** -->
    <header class="header_area clearfix">
        <div class="container-fluid h-100">
            <div class="row h-100">
                <!-- Menu Area Start -->
                <div class="col-12 h-100">
                    <div class="menu_area h-100">
                        <nav class="navbar h-100 navbar-expand-lg align-items-center">
                            <!-- Logo -->
                            <a class="navbar-brand" href="index.html"><img src="assets/img/core-img/logo.png" alt="logo"></a>

                            <app-menu-component></app-menu-component>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- ***** Header Area End ***** -->

  `
})
export class HeaderComponent {
  constructor() { }
}
