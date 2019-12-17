import { Component, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  blogRoutes$: Observable<ScullyRoute[]>;

  constructor(private readonly scullyRoutesService: ScullyRoutesService) {
  }

  ngOnInit() {
    this.blogRoutes$ = this.scullyRoutesService.available$.pipe(
      map(sr => sr.filter(scr => scr.route.startsWith('/blog/'))));
  }

}
