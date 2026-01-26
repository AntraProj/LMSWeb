import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestService } from '../test.service';

@Component({
  selector: 'lmsweb-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private testService: TestService) {}

  ngOnInit() {
    this.testService.print();
  }
}
