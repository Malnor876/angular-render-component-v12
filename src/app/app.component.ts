import { Component } from '@angular/core';
import { CreateDialogService } from './create-dialog.service';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private createDialogService: CreateDialogService
  ){
    this.createDialogService.open(TestComponent, document.getElementById('modal'));
  }
  title = 'component-overview';
}

