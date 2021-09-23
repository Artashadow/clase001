import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { MyComponent } from './my-component/my-component.components';
import { SegundoComponent } from './segundo/segundo.component';
import { InLineComponent } from './in-line/in-line.component';
import { EjercicioComponent } from './ejercicio/ejercicio.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { NotifyItemsComponent } from './notify-items/notify-items.component';
import { UserActionsComponent } from './user-actions/user-actions.component';
import { MenuOptionsComponent } from './menu-options/menu-options.component';
import { DropdownItemComponent } from './dropdown-item/dropdown-item.component';
import { ContentViewComponent } from './content-view/content-view.component';
import { AddsComponent } from './adds/adds.component';
import { TopButtonComponent } from './top-button/top-button.component'

@NgModule({
    imports: [
        //Librerías adicionales 
        FormsModule
    ],
    declarations: [
        MyComponent,
        SegundoComponent,
        InLineComponent,
        EjercicioComponent,
        SidebarComponent,
        TopbarComponent,
        NotifyItemsComponent,
        UserActionsComponent,
        MenuOptionsComponent,
        DropdownItemComponent,
        ContentViewComponent,
        AddsComponent,
        TopButtonComponent
    ],
    exports: [
        MyComponent,
        SegundoComponent,
        InLineComponent,
        EjercicioComponent,
        SidebarComponent,
        TopbarComponent,
        NotifyItemsComponent,
        UserActionsComponent,
        MenuOptionsComponent,
        DropdownItemComponent,
        ContentViewComponent,
        AddsComponent,
        TopButtonComponent
    ]
})

export class ComponentsModule {

}