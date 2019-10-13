import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-delete-restaurant',
  templateUrl: './delete-restaurant.page.html',
  styleUrls: ['./delete-restaurant.page.scss'],
})
export class DeleteRestaurantPage implements OnInit {

  constructor(private router:Router, private api:ApiService) { }

  ngOnInit() {
  }


}
