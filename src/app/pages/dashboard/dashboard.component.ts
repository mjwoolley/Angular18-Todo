import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgxEchartsDirective } from 'ngx-echarts';
import type { EChartsOption } from 'echarts';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NgxEchartsDirective],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  taskStatusDonutOptions!: EChartsOption;
  taskPriorityPieOptions!: EChartsOption;
  taskStatusBarOptions!: EChartsOption;
  TimeSpentOnProjectsPieOptions!: EChartsOption;
  constructor() {}

  ngOnInit(): void {
    this.taskStatusDonutOptions = {
      title: {
        text: 'Task Status',
      },
      tooltip: {
        trigger: 'item',
      },
      legend: {
        top: '5%',
        left: 'center',
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2,
          },
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 1048, name: 'Ready' },
            { value: 735, name: 'InProgress' },
            { value: 580, name: 'ToDo' },
            { value: 50, name: 'Due' },
          ],
        },
      ],
    };

    this.taskStatusBarOptions = {
      title: {
        text: 'Task Count by Status',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          data: ['Todo', 'InProgress', 'Ready', 'Due'],
          axisTick: {
            alignWithLabel: true,
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
        },
      ],
      series: [
        {
          name: 'Direct',
          type: 'bar',
          barWidth: '60%',
          data: [580, 735, 1048, 50],
        },
      ],
    };

    this.taskPriorityPieOptions = {
      title: {
        text: 'Task Priority',
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '75%',
          data: [
            { value: 1048, name: 'Medium' },
            { value: 735, name: 'High' },
            { value: 580, name: 'Low' },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    };

    this.TimeSpentOnProjectsPieOptions = {
      title: {
        text: 'Time Spent on Projects (hours)',
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '75%',
          data: [
            { value: 500, name: 'Project 1' },
            { value: 140, name: 'Project 2' },
            { value: 160, name: 'Project 3' },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    };
  }
}
