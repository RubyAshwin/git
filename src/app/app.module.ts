import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTableModule, Column} from 'primeng/primeng';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,FormsModule, ReactiveFormsModule, DataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
