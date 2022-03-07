import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { SearchResultService } from '@shared/services/search-result.service';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,MatToolbarModule,MatIconModule,MatButtonModule,RouterModule,MatInputModule,FormsModule,ReactiveFormsModule,
    MatTableModule,MatPaginatorModule, MatSortModule
  ],
  exports:[
    HeaderComponent,RouterModule,MatInputModule,FormsModule,ReactiveFormsModule,MatTableModule,MatPaginatorModule,MatButtonModule, MatSortModule
  ],
  providers:[
    SearchResultService
  ]
})
export class SharedModule { }
