import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-component',
  template: `
    <!-- Menu Area -->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mosh-navbar" aria-controls="mosh-navbar" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>

    <div class="collapse navbar-collapse justify-content-end" id="mosh-navbar">
        <ul class="navbar-nav animated" id="nav">
            <li class="nav-item active"><a class="nav-link" href="index.html">Home</a></li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="moshDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                <div class="dropdown-menu" aria-labelledby="moshDropdown">
                    <a class="dropdown-item" href="index.html">Home</a>
                    <a class="dropdown-item" href="about.html">About Us</a>
                    <a class="dropdown-item" href="services.html">Services</a>
                    <a class="dropdown-item" href="portfolio.html">Portfolio</a>
                    <a class="dropdown-item" href="blog.html">Blog</a>
                    <a class="dropdown-item" href="contact.html">Contact</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="elements.html">Elements</a>
                </div>
            </li>
            <li class="nav-item"><a class="nav-link" href="about.html">About Us</a></li>
            <li class="nav-item"><a class="nav-link" href="services.html">Services</a></li>
            <li class="nav-item"><a class="nav-link" href="portfolio.html">Portfolio</a></li>
            <li class="nav-item"><a class="nav-link" href="blog.html">Blog</a></li>
            <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
        </ul>
        <!-- Search Form Area Start -->
        <div class="search-form-area animated">
            <form action="#" method="post">
                <input type="search" name="search" id="search" placeholder="Type keywords &amp; hit enter">
                <button type="submit" class="d-none"><img src="assets/img/core-img/search-icon.png" alt="Search"></button>
            </form>
        </div>
        <!-- Search btn -->
        <div class="search-button">
            <a href="#" id="search-btn"><img src="assets/img/core-img/search-icon.png" alt="Search"></a>
        </div>
        <!-- Login/Register btn -->
        <div class="login-register-btn">
            <a href="#">Login</a>
            <a href="#">/ Register</a>
        </div>
    </div>
  `
})
export class MenuComponent {
  constructor() { }
}
