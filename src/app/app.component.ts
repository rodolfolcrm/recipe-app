import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage: String = 'recipies';

  onNavegateEvent(page:String){
    this.currentPage = page;
  }
}
