import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tuna',
  templateUrl: './tuna.component.html',
  styles: [
    `
      .special {
        background-color: blue;
        color: white;
      }
    `,
  ],
})
export class TunaComponent implements OnInit {
  public password: string;
  private readonly passwords: string[] = [
    'tuna',
    'salmon',
    'catfish',
    'bluegill',
    'cisco',
    'silver redhorse',
    'river shiner',
    'spottail shiner',
    'mooneye',
    'goldeye',
    'burbot',
    'walleye',
    'rock bass',
    'spotted gar',
    'flathead catfish',
  ];

  public logs: string[] = [];

  constructor() {
    this.password = this.passwords[0];
  }

  ngOnInit(): void {}

  public onToggle = () => {
    this.password =
      this.passwords[Math.floor(Math.random() * this.passwords.length)];
    this.logs.push(`${Date.now()}`);
  };
}
