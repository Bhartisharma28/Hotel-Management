import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conform',
  templateUrl: './conform.component.html',
  styleUrls: ['./conform.component.css']
})
export class ConformComponent implements OnInit {

  constructor(private router:Router) { }

  handleEvent(){
    this.router.navigateByUrl('')
  }

  ngOnInit(): void {
  }

}
