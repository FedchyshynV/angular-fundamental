import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-wrapper",
  templateUrl: "./wrapper.component.html",
  styleUrls: ["./wrapper.component.scss"],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class WrapperComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
