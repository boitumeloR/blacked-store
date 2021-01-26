import { Component, OnInit } from '@angular/core';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  faWhatsapp = faWhatsapp;
  faInstagram = faInstagram;
  constructor() { }

  ngOnInit(): void {
  }

}
