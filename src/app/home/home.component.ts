import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute} from "@angular/router";
import { createClient } from '@supabase/supabase-js';
import {environment} from "../../environments/environment";

const supabaseUrl = environment.apiUrl;
const supabaseKey = environment.apiKey;

// @ts-ignore
const supabase = createClient(supabaseUrl, supabaseKey);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  email = '';
  password = '';
  confirmed = false;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  confirmEmail() {
    this.confirmed = true;
  //  this.router.navigate(['/confirm']);
    console.log("your password is: " + this.password);


    supabase.auth.updateUser({
      password: this.password
    }).then(({data, error}) => {
      if (error) {
        console.log(error);
      } else {
        console.log('User updated!');
        console.log(data);
        this.router.navigate(['/confirm']);
      }
    });

  }

  ngOnInit(): void {
    const fragment = this.route.snapshot.fragment;
    let accessToken: string | null = null
    // @ts-ignore
    accessToken = new URLSearchParams(fragment).get('access_token');

    if (accessToken) {
      // @ts-ignore
      supabase.auth.getUser(accessToken).then(({data: {user}}, error) => {
        if (error) {
          console.log(error);
        } else {
          this.email = user?.email;
          console.log(this.email);
        }
      });



    }
  }
}
