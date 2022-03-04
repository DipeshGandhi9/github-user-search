import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

import { Users } from '../../shared/models/users.model';
import { SearchResultService } from '../../shared/services/search-result.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;
  usersList: Users[] = [];

  constructor(
    private fb: FormBuilder,
    private searchService: SearchResultService,
    private toaster: ToastrService,
    private spinner: NgxSpinnerService
  ) {
    // Initialize Search from
    this.searchForm = this.fb.group({
      login:['']
    })
   }

  ngOnInit(): void {
  }

  //getter for search form
  public get f(){
    return this.searchForm.controls;
   }

  // Submit method for searching user
  submit() {
    this.spinner.show();
    let login = this.searchForm.value?.login;
    const data = { q: login, in: login };
    this.searchService.searchUser(data).subscribe((res: any) => {
      this.usersList = res['items'] || [];
      this.usersList.sort((a, b) => (a.login < b.login ? -1 : 1));
      this.spinner.hide();
    }, err => {
      this.spinner.hide();
      if(err.error) {
        this.toaster.error(err.error.message);
      }
    })
  }

  flat(arrays: any[]) {
    return [].concat.apply([], arrays);
  }

}
