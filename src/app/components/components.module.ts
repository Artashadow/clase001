import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { MyComponent } from './my-component/my-component.components';
import { SegundoComponent } from './segundo/segundo.component';
import { InLineComponent } from './in-line/in-line.component';
import { EjercicioComponent } from './ejercicio/ejercicio.component'

@NgModule({
    imports: [
        //Librerías adicionales 
        FormsModule
    ],
    declarations: [
        MyComponent,
        SegundoComponent,
        InLineComponent,
        EjercicioComponent
    ],
    exports: [
        MyComponent,
        SegundoComponent,
        InLineComponent,
        EjercicioComponent
    ]
})

export class ComponentsModule {

}