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

  shoes: any[] = [
    {
      name: 'Nike Air Force One',
      color: 'White',
      price: 900,
      imagePath: 'assets/images/card-images/A1White.jpg'
    },
    {
      name: 'Nike Air Force One',
      color: 'Black',
      price: 900,
      imagePath: 'assets/images/card-images/A1Black.jpg'
    },
    {
      name: 'Nike Air Force One Shadow',
      color: 'Pastel',
      price: 1300,
      imagePath: 'assets/images/card-images/A1ShadowPastel.jpeg'
    },
    {
      name: 'Nike Air Force One Shadow',
      color: 'Irish Green',
      price: 1300,
      imagePath: 'assets/images/card-images/A1IrishGreen.jpeg'
    },
    {
      name: 'Nike Air Force One Shadow',
      color: 'Daisy',
      price: 1300,
      imagePath: 'assets/images/card-images/A1Daisy.jpeg'
    },
    {
      name: 'Nike Air Force One Shell',
      color: 'Light Brown',
      price: 1600,
      imagePath: 'assets/images/card-images/A1ShellLightBrown.jpg'
    },
    {
      name: 'Nike Air Force One Shell',
      color: 'Light Green',
      price: 1600,
      imagePath: 'assets/images/card-images/A1ShellLightGreen.jpg'
    },
    {
      name: 'Nike Air Force One Shell',
      color: 'Black',
      price: 1600,
      imagePath: 'assets/images/card-images/A1ShellBlack.jpeg'
    },
    {
      name: 'Nike Air Force One 07',
      color: 'Khaki',
      price: 1600,
      imagePath: 'assets/images/card-images/A107Khaki.jpg'
    },
    {
      name: 'Nike Air Force One LV8 Utility',
      color: 'Black',
      price: 1200,
      imagePath: 'assets/images/card-images/A1LV8Utility.jpg'
    },
    {
      name: 'Nike Air Force One 07 LV8',
      color: 'Los Angeles',
      price: 1300,
      imagePath: 'assets/images/card-images/A1LA.jpeg'
    },
    {
      name: 'Nike Air Force One 07 LV8',
      color: 'New York',
      price: 1300,
      imagePath: 'assets/images/card-images/A1NY.jpeg'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
