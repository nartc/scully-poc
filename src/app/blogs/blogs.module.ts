import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsComponent } from './blogs/blogs.component';


@NgModule({
  declarations: [BlogsComponent],
  imports: [
    CommonModule,
    BlogsRoutingModule,
    CardModule
  ]
})
export class BlogsModule {
}
