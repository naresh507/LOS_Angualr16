import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit, ViewChild } from "@angular/core";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexTooltip,
  ApexXAxis,
  ApexLegend,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexYAxis
} from "ng-apexcharts";
import { AuthenticationService } from "src/app/shared/services/authentication.service";
import { CrudService } from "src/app/shared/services/crud.service";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  markers: any; //ApexMarkers;
  stroke: any; //ApexStroke;
  yaxis: ApexYAxis | ApexYAxis[];
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
  legend: ApexLegend;
  fill: ApexFill;
  tooltip: ApexTooltip;
};

@Component({
  selector: 'app-statistics-graph',
  templateUrl: './statistics-graph.component.html',
  styleUrls: ['./statistics-graph.component.scss']
})
export class StatisticsGraphComponent  implements OnInit {
  @ViewChild("chart") chart: ChartComponent | undefined;
  public chartOptions: Partial<ChartOptions> | any;
  userId:any="";
  userRole:any="";
  ngOnInit(): void {
  const userObj = JSON.parse(localStorage.getItem('userObj') || '{}');
  this.userId = userObj.UserID;
  this.userRole=userObj.UserRole;
  this.getDashoardDetails();
  }
  constructor(private crudService:CrudService) {
    this.chartOptions = {
      series: [
        {
          name: "Disbursed Applicants",
          type: "column",
          data: [35, 65, 25, 95, 65, 25, 95, 35]
        },
        {
          name: "Rejected Applications",
          type: "column",
          data: [15, 35, 35, 35, 75, 45, 10, 35]
        },
        {
          name: "Total Applications",
          type: "line",
          data: [6000, 70000, 8000, 36000, 44000, 45000, 55000, 58000]
        }
      ],
      chart: {
        height: 350,
        type: "line",
        stacked: false
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: [1, 1, 4]
      },
      title: {
        text: "",
        align: "left",
        offsetX: 110
      },
      xaxis: {
        categories: ['JAN', "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP","OCT","NOV", "DEC"]
      },
      yaxis: [
        {
          axisTicks: {
            show: false
          },
          axisBorder: {
            show: false,
            color: "#008FFB"
          },
          labels: {
            style: {
             // color: "#008FFB"
            }
          },
          title: {
            text: "",
            style: {
              color: "#008FFB"
            }
          },
          tooltip: {
            enabled: false
          }
        },
        {
          seriesName: "Disbursed Applicants",
          opposite: false,
          axisTicks: {
            show: true
          },
          axisBorder: {
            show: true,
            color: "#00E396"
          },
          labels: {
            style: {
             // color: "#00E396"
            }
          },
          title: {
            text: "",
            style: {
              color: "#00E396"
            }
          }
        },
        {
          seriesName: "Revenue",
          opposite: false,
          axisTicks: {
            show: false
          },
          axisBorder: {
            show: false,
            color: "#FEB019"
          },
          labels: {
            style: {
             // color: "#FEB019"
            }
          },
          title: {
            text: "",
            style: {
              color: "#FEB019"
            }
          }
        }
      ],
      tooltip: {
        fixed: {
          enabled: false,
          position: "topLeft", // topRight, topLeft, bottomRight, bottomLeft
          offsetY: 30,
          offsetX: 60
        }
      },
      legend: {
        horizontalAlign: "left",
        offsetX: 40
      }
    };
  }




  getDashoardDetails() {
    const obj=   {
      "UserID":this.userId ,
      "UserRole": this.userRole,
      "FromDate": "01/01/2022",
      "TODate": "30/12/2022"

  }


 
      this.crudService.statitcsGraph(obj).subscribe({
             next: (value: any) => {
            console.log(value) 
          
          
             },
             error: (err: HttpErrorResponse) => {
             }
           })
         
     }
   




}
