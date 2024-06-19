import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SelectionModel } from '@angular/cdk/collections';
import { MatChipsModule } from '@angular/material/chips';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatChipsModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatCheckboxModule,
    CommonModule,
    FormsModule,
    NgClass,
    RouterModule,
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  selection = new SelectionModel<any>(true, []);
  taskList: Array<any> = [];
  displayedColumns: string[] = [
    'select',
    'task',
    'priority',
    'labels',
    'subTasks',
    'duedate',
  ];
  dataSource: any;
  showActions: boolean = false;

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.getTasks();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.cdRef.detectChanges();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getTasks() {
    this.taskList = [
      {
        id: 1,
        title: 'CRUD functionality',
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae nostrum distinctio officia? Sed nostrum explicabo nam, magnam omnis officiis velit? Soluta maiores perferendis ipsam quae voluptates error corporis facere modi.',
        dueDate: '12/06/2024',
        priority: 'High',
        completed: true,
        subtasks: [],
        labels: ['Personnel'],
        createdBy: 'Srikanth J',
        createdAt: '10/06/2024',
        status: 'Todo',
      },
      {
        id: 2,
        title: 'Update UI',
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae nostrum distinctio officia? Sed nostrum explicabo nam, magnam omnis officiis velit? Soluta maiores perferendis ipsam quae voluptates error corporis facere modi.',
        dueDate: '12/06/2024',
        priority: 'Low',
        completed: false,
        subtasks: [],
        labels: ['Work'],
        createdBy: 'Srikanth J',
        createdAt: '10/06/2024',
        status: 'Todo',
      },
      {
        id: 3,
        title: 'Style Adjustments',
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae nostrum distinctio officia? Sed nostrum explicabo nam, magnam omnis officiis velit? Soluta maiores perferendis ipsam quae voluptates error corporis facere modi.',
        dueDate: '12/06/2024',
        priority: 'Medium',
        completed: false,
        subtasks: [],
        labels: ['Personnel'],
        createdBy: 'Srikanth J',
        createdAt: '10/06/2024',
        status: 'Todo',
      },
    ];
    this.dataSource = new MatTableDataSource(this.taskList);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  /** Checking Whether All Rows Selected or not */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource?.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      this.showActions = false;
      return;
    }
    this.selection.select(...this.dataSource.data);
    this.showActions = true;
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.position + 1
    }`;
  }

  /** On Selecting Row show / Hide Top Action Buttons */
  onRowSelect(row: any) {
    this.selection.toggle(row);
    const selected = this.selection.selected.length;
    if (selected == 1) {
      this.showActions = true;
    } else if (selected > 1) {
      this.showActions = true;
    } else {
      this.showActions = false;
    }
  }
}
