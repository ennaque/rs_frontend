import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from "./components/main-menu/main-menu.component";
import { RouterModule } from '@angular/router';
import { IonicModule } from "@ionic/angular";
// import { IonicModule } from '@ionic/angular/ionic-module';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        IonicModule,
        // IonicModule,
    ],
    declarations: [
        MainMenuComponent
    ],
    exports: [
        MainMenuComponent
    ]
})
export class SharedModule {
}
