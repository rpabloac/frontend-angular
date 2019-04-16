import { Component, OnInit, AfterViewInit, ViewChild  } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { BookService } from '../../services/book.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home-component',
  template: `
    <!-- ***** Welcome Area Start ***** -->
    <section class="welcome_area clearfix" id="home" style="background-image: url(assets/img/bg-img/welcome-bg.png)">
        <!-- Single Hero Slides -->
        <div class="single-hero-slide d-flex align-items-end justify-content-center">
            <div class="hero-slide-content text-center">
                <h2>A Clean and Modern Template</h2>
                <h4>Get your freebie template now!</h4>
                <img class="slide-img" src="assets/img/bg-img/device.png" alt="">
            </div>
        </div>

        <table datatable (dtOptions)="dtOptions" class="row-border hover"></table>
    </section>
    <!-- ***** Welcome Area End ***** -->
  `,
  providers:[
    BookService
  ]
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild(DataTableDirective) dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.dtOptions = {
      columns: [
        { title: 'Title', data: 'title' },
        { title: 'Is Bn ?', data: 'isbn'},
        { title: 'Publisher Name', data: 'publisher_name' },
        { title: 'Author Name', data: 'author_name' },
        { title: 'Created At', data: 'created_at' },
        { title: 'Updated At', data: 'updated_at' }
      ]
    };
  }

  ngAfterViewInit(): void {
    this.loadData();
  }

  loadData() {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      this.bookService.getBooks().subscribe(data => {
        data.forEach(item => {
          dtInstance.row.add(item);
          this.dtTrigger.next();
        });
      });
    });
  }
}
