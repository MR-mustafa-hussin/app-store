"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MaterialModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var a11y_1 = require("@angular/cdk/a11y");
var drag_drop_1 = require("@angular/cdk/drag-drop");
var portal_1 = require("@angular/cdk/portal");
var scrolling_1 = require("@angular/cdk/scrolling");
var stepper_1 = require("@angular/cdk/stepper");
var table_1 = require("@angular/cdk/table");
var tree_1 = require("@angular/cdk/tree");
var badge_1 = require("@angular/material/badge");
var bottom_sheet_1 = require("@angular/material/bottom-sheet");
var chips_1 = require("@angular/material/chips");
var divider_1 = require("@angular/material/divider");
var core_2 = require("@angular/material/core");
var paginator_1 = require("@angular/material/paginator");
var progress_bar_1 = require("@angular/material/progress-bar");
var slider_1 = require("@angular/material/slider");
var slide_toggle_1 = require("@angular/material/slide-toggle");
var sort_1 = require("@angular/material/sort");
var table_2 = require("@angular/material/table");
var tree_2 = require("@angular/material/tree");
var button_1 = require("@angular/material/button");
var MaterialComponents = [
    button_1.MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    badge_1.MatBadgeModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatTabsModule,
    divider_1.MatDividerModule,
    MatGridListModule,
    MatExpansionModule,
    MatCardModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatDialogModule,
    table_2.MatTableModule,
    a11y_1.A11yModule,
    stepper_1.CdkStepperModule,
    table_1.CdkTableModule,
    tree_1.CdkTreeModule,
    drag_drop_1.DragDropModule,
    MatAutocompleteModule,
    badge_1.MatBadgeModule,
    bottom_sheet_1.MatBottomSheetModule,
    button_1.MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    chips_1.MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    divider_1.MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    paginator_1.MatPaginatorModule,
    progress_bar_1.MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    core_2.MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    slider_1.MatSliderModule,
    slide_toggle_1.MatSlideToggleModule,
    MatSnackBarModule,
    sort_1.MatSortModule,
    table_2.MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    tree_2.MatTreeModule,
    portal_1.PortalModule,
    scrolling_1.ScrollingModule,
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        core_1.NgModule({
            declarations: [],
            imports: [
                common_1.CommonModule,
                MaterialComponents
            ],
            exports: [
                MaterialComponents
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());
exports.MaterialModule = MaterialModule;
