import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-find-page',
  templateUrl: './find-page.component.html',
  styleUrls: ['./find-page.component.scss']
})
export class FindPageComponent implements OnInit {

  @Input() icon = "error";
  @Input() titulo = "Titulo";
  constructor() { }

  ngOnInit() {
  }

}
