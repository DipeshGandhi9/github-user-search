import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchResultRoutingModule } from './search-result-routing.module';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SearchComponent,
    ResultsComponent
  ],
  imports: [
    CommonModule,
    SearchResultRoutingModule,
    SharedModule
  ]
})
export class SearchResultModule { }
