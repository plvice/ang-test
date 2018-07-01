import { Component, OnInit } from '@angular/core';

interface Item {
  name: string;
  id: string;
  value: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'testowa1';
  public data: Item[] = [];

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this.data.push(
        {
          name: `Biedronka sklep ${i}`,
          id: `${i}`,
          value: `Wartość biedronki ${i}`
        }
      )
    }
  }
}
