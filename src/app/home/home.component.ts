import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  email = '';
  confirmed = false;

  constructor(private router: Router, private route:ActivatedRoute) {}

  confirmEmail() {
    this.confirmed = true;
    this.router.navigate(['/confirm']);
  }

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => {
      console.log(fragment);
    });
    this.route.queryParams.subscribe(params => {
      console.log(params);
    });
  }
}
