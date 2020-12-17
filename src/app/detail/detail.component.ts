import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { GlobalService } from "../global.service";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss"]
})
export class DetailComponent {

  Photo: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private globalService: GlobalService
  ) {
    this.activatedRoute.params.subscribe(param => {
       globalService.getPhoto(+param.id).then(photo => this.Photo = photo);
    });
  }
}
