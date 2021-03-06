import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DatePickerModule, RtlService } from "@fundamental-ngx/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FundamentalNgxCoreModule } from "@fundamental-ngx/core";
import { FundamentalNgxPlatformModule } from "@fundamental-ngx/platform";
import { HttpClientModule } from "@angular/common/http";
import { CdkTableModule } from "@angular/cdk/table";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { SelectModeExampleComponent } from "./select-mode-example.component";
import { WrapperComponent } from "./wrapper/wrapper.component";
import { ExampleComponent } from "./example/example.component";
import { OverlayModule } from "@angular/cdk/overlay";

@NgModule({
  declarations: [
    SelectModeExampleComponent,
    WrapperComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    // OverlayModule,
    // BrowserAnimationsModule,
    FundamentalNgxCoreModule,
    // FundamentalNgxPlatformModule,
    HttpClientModule,
    // CdkTableModule,
    // DragDropModule,
    // DatePickerModule,
    RouterModule.forRoot(
      [{ path: "#", component: SelectModeExampleComponent }],
      { useHash: true }
    )
  ],
  providers: [RtlService],
  entryComponents: [],
  bootstrap: [SelectModeExampleComponent]
})
export class AppModule {}
