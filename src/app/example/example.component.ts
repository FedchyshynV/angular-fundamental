import { Overlay, ScrollStrategy } from "@angular/cdk/overlay";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-example",
  templateUrl: "./example.component.html",
  styleUrls: ["./example.component.scss"]
})
export class ExampleComponent implements OnInit {
  options: string[] = ["Apple", "Pineapple", "Tomato", "Strawberry"];
  selectedValue1: string;
  selectedValue2: string;
  selectedValue3: string;
  selectedValue4: string;
  selectedValue5: string = this.options[0];
  isOpen = false;
  closeScrollStrategy: ScrollStrategy;
  repositionScrollStrategy: ScrollStrategy;
  autoClose = false;

  /** Whether to close the overlay once the user has scrolled away completely. */
  list1 = [
    { text: "Option 11111111111111111", url: "#" },
    { text: "Option 22222222222222222", url: "#" },
    { text: "Option 33333333333333333", url: "#" }
  ];

  tableRows = [
    {
      column1: "user.name@email.com",
      column2: "Row 1",
      column3: "Row 1",
      date: "09-07-18",
      type: "search"
    },
    {
      column1: "user.name@email.com",
      column2: "Row 2",
      column3: "Row 2",
      date: "09-08-18",
      type: "cart"
    },
    {
      column1: "user.name@email.com",
      column2: "Row 3",
      column3: "Row 3",
      date: "02-14-18",
      type: "calendar"
    },
    {
      column1: "user.name@email.com",
      column2: "Row 4",
      column3: "Row 4",
      date: "12-30-17",
      type: "search"
    },
    {
      column1: "user.name@email.com",
      column2: "Row 5",
      column3: "Row 5",
      date: "11-12-18",
      type: "search"
    }
  ];

  selectedValue: string = this.options[0];

  popperOptions = {
    placement: "bottom-start",
    modifiers: {
      preventOverflow: {
        enabled: true,
        escapeWithReference: true,
        boundariesElement: "scrollParent"
      }
    }
  };

  constructor(private overlay: Overlay) {}

  ngOnInit(): void {
    this.closeScrollStrategy = this.overlay.scrollStrategies.close();
    this.repositionScrollStrategy = this.overlay.scrollStrategies.reposition({
      autoClose: this.autoClose
    });
  }
}
