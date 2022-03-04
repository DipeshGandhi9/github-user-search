import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Sort } from '@angular/material/sort';

import { Users } from 'src/app/shared/models/users.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  @Input('usersList') usersList: Users[]=[];

  displayedColumns: string[] = ['avatar_url', 'login', 'type' ];
  dataSource = new MatTableDataSource<Users>();

  //material paginator intilization
  @ViewChild(MatPaginator) paginator: MatPaginator | null | undefined;

  constructor(){ }

  ngOnInit(): void {
  }

  ngOnChanges(){
    this.dataSource.data = this.usersList;
  }

  // Initlization pagination on view init
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator as MatPaginator;
  }

  sortData(sort: Sort) {
    const data = this.dataSource.data.slice();
    if (!sort.active || sort.direction === '') {
      this.dataSource.data = data;
      return;
    }

    this.dataSource.data = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'login':
          return this.compare(a.login, b.login, isAsc);
        default:
          return 0;
      }
    });
  }

  compare = (a: number | string, b: number | string, isAsc: boolean) => {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

}

