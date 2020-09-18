import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { API_URL } from '../../constants/base-url'

import * as $ from 'jquery';
window['$'] = window['jQuery'] = $;
import '@progress/kendo-ui';
import { AuthService } from 'src/app/services/auth-service';

@Component({
  selector: 'app-buses',
  templateUrl: './buses.component.html',
  styleUrls: ['./buses.component.css']
})
export class BusesComponent implements OnInit {

  @ViewChild('grid') gridEl;
  agencyId: string;
  record = 0
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.agencyId = this.authService.decodeJWT().agencyId;
    // console.log(this.agencyId)
  }

  public ngAfterViewInit() {

    // instantiate a Grid from the actual DOM element, wrapped in a jQuery object
    let dataSources = new kendo.data.DataSource({
      transport: {
        read: {
          url: API_URL+"/api/v1/buses?agencyId="+this.agencyId,
          dataType: "json",
          type: "GET",
          contentType: "application/json"
        },
        update: {
          url: API_URL+"/api/updateBus",
          dataType: "json",
          type: "POST",
          contentType: "application/json"
        },
        destroy: {
          url: API_URL+"/api/deleteBus",
          dataType: "json",
          type: "POST",
          contentType: "application/json"
        },
        create: {
          url: API_URL+"/api/v1/buses?agencyId="+this.agencyId,
          dataType: "json",
          type: "POST",
          contentType: "application/json"
        },
        parameterMap: function (options, operation) {
          if (operation !== "read" && options.models) {
            return kendo.stringify(options.models);
          }
        }
      },
      batch: true,
      pageSize: 10,
      schema: {
        model: {
          id: "id",
          fields: {
            id: { editable: false, nullable: true },
            code: { validation: { required: true } },
            capacity: { type: "number", validation: { required: true, min: 0 } },
            make: { type: "string", validation: { required: true } },
          }
        }
      },
      sort: {
        field: "code",
        dir: "asc"
      }
    });

    $(this.gridEl.nativeElement).kendoGrid({
      dataSource: dataSources,
      navigatable: true,
      height: 400,
      filterable: true,
      sortable: true,
      pageable: {
        alwaysVisible: true,
        pageSizes: [5, 10, 20, 100]
      },
      toolbar: ["create", "save", "cancel"],
      columns: [
        // {
        //   title: "#",
        //   template: "#=++record #",
        //   attributes: {
        //     style: "text-align: center;"
        //   },
        //   headerAttributes: {
        //     style: "text-align: center;"
        //   },
        //   width: 50
        // },
        {
          field: "code",
          width: 200,
          title: "Bus Code"
        },
        {
          field: "capacity",
          title: "Capacity",
          // format: "{0:c}",
          width: 150,
          attributes: {
            style: "text-align: center;"
          },
          headerAttributes: {
            style: "text-align: center;"
          }
        },
        {
          field: "make",
          title: "Model",
          width: 150,
          attributes: {
            style: "text-align: center;"
          },
          headerAttributes: {
            style: "text-align: center;"
          }
        },
        {
          command: "destroy",
          title: "Action",
          width: 150,
          filterable: false,
          attributes: {
            style: "text-align: center;"
          },
          headerAttributes: {
            style: "text-align: center;"
          }
        }
      ],
      editable: true
    });
  }

}
