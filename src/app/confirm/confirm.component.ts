import {Component, OnInit} from '@angular/core';
import { ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
  constructor(private route:ActivatedRoute) {}
  token: string | undefined;
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      console.log("here wer are!!")
      this.token = params['token'];
    });
  }
}
