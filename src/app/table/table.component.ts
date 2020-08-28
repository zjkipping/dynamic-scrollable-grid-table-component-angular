import { Component, OnInit } from '@angular/core';
import { orderBy } from 'lodash';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  selectedRow;
  selectedColumn;
  sortDirection;

  columns = [
    { label: 'ID', property: 'id' },
    { label: 'Name', property: 'name' },
    { label: 'Gender', property: 'gender' },
    { label: 'Age', property: 'age' },
  ]

  rows = [];

  _data = [{
  "id": 1,
  "name": "Chad Snow",
  "gender": "Male",
  "age": 59
}, {
  "id": 2,
  "name": "Eddy Danton",
  "gender": "Male",
  "age": 76
}, {
  "id": 3,
  "name": "Wilhelmine Howerd",
  "gender": "Female",
  "age": 54
}, {
  "id": 4,
  "name": "Samara Breslau",
  "gender": "Female",
  "age": 36
}, {
  "id": 5,
  "name": "Jessy Crosham",
  "gender": "Female",
  "age": 61
}, {
  "id": 6,
  "name": "Jeromy Blazi",
  "gender": "Male",
  "age": 56
}, {
  "id": 7,
  "name": "Ax Carlens",
  "gender": "Male",
  "age": 84
}, {
  "id": 8,
  "name": "Sylas Banes",
  "gender": "Male",
  "age": 35
}, {
  "id": 9,
  "name": "Dominica Halston",
  "gender": "Female",
  "age": 72
}, {
  "id": 10,
  "name": "Vladamir Tinkham",
  "gender": "Male",
  "age": 26
}, {
  "id": 11,
  "name": "Byram Kench",
  "gender": "Male",
  "age": 44
}, {
  "id": 12,
  "name": "Jessalin Gallaway",
  "gender": "Female",
  "age": 68
}, {
  "id": 13,
  "name": "Cornelius Moule",
  "gender": "Male",
  "age": 94
}, {
  "id": 14,
  "name": "Rodney Fitzsymonds",
  "gender": "Male",
  "age": 30
}, {
  "id": 15,
  "name": "Lorry Moine",
  "gender": "Female",
  "age": 52
}, {
  "id": 16,
  "name": "Verney Gravey",
  "gender": "Male",
  "age": 92
}, {
  "id": 17,
  "name": "Claudelle MacVay",
  "gender": "Female",
  "age": 43
}, {
  "id": 18,
  "name": "Andonis Cussins",
  "gender": "Male",
  "age": 49
}, {
  "id": 19,
  "name": "Fidelio Pogson",
  "gender": "Male",
  "age": 84
}, {
  "id": 20,
  "name": "Ole Regorz",
  "gender": "Male",
  "age": 89
}];

  constructor() {
    this.sortData();
  }

  selectRow(row) {
    console.log(row);
    if (row === this.selectedRow) {
      this.selectedRow = null;
    } else {
      this.selectedRow = row;
    }
  }

  headerClicked(column) {
    console.log(column);
    if (column === this.selectedColumn) {
      if (this.sortDirection === 'desc') {
        this.sortDirection = '';
        this.selectedColumn = null;
      } else {
        this.sortDirection = 'desc';
      }
    } else {
      this.selectedColumn = column;
      this.sortDirection = 'asc';
    }
    this.sortData();
  }

  sortData() {
    if (this.selectedColumn && this.sortDirection) {
      this.rows = orderBy(this._data, [this.selectedColumn.property], [this.sortDirection])
    } else {
      this.rows = [...this._data];
    }
  }
}