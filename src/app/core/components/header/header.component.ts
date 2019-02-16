import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(-100%)',  width: '100%'}),
        animate(500,  keyframes(
          [
           style({ transform: 'translateX(-100%)' , width: '110%'}),
           style({ transform: 'translateX(0%)'    , width: '110%'}),
           style({ transform: 'translateX(0%)'    , width: '95%'}),
           style({ transform: 'translateX(0%)'    , width: '105%'}),
           style({ transform: 'translateX(0%)'    , width: '100%'}),
          ])
        )
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({transform: 'translateX(-100%)'}))
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}