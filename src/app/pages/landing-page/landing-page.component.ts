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
    },
    {
      name: 'Nike Air Force One 07 LV8',
      color: 'Chicago',
      price: 1500,
      imagePath: 'assets/images/card-images/A1Chicago.png'
    },
    {
      name: 'Nike Air Jordan One Retro',
      color: 'University Blue',
      price: 1500,
      imagePath: 'assets/images/card-images/AJ1Uni.jpg'
    },
    {
      name: 'Nike Air Jordan One Retro',
      color: 'Black & White',
      price: 1500,
      imagePath: 'assets/images/card-images/AJ1BW.jpeg'
    },
    {
      name: 'Nike Air Jordan One Retro',
      color: 'Orange',
      price: 1500,
      imagePath: 'assets/images/card-images/AJ1Orange.jpg'
    },
    {
      name: 'Nike Air Jordan One Retro',
      color: 'Red',
      price: 1500,
      imagePath: 'assets/images/card-images/AJ1Red.png'
    },
    {
      name: 'Nike Air Jordan One Retro',
      color: 'Smoke Grey',
      price: 1600,
      imagePath: 'assets/images/card-images/AJ1SmokeGrey.jpg'
    },
    {
      name: 'Nike Air Jordan One High',
      color: 'Pink Quartz (GS)',
      price: 1600,
      imagePath: 'assets/images/card-images/AJ1MidPink.png'
    },
    {
      name: 'Nike Air Jordan One High',
      color: 'Digital Pink',
      price: 1600,
      imagePath: 'assets/images/card-images/AJ1DigitalPink.png'
    },
    {
      name: 'Nike Air Jordan One',
      color: 'Tie Dye',
      price: 1600,
      imagePath: 'assets/images/card-images/AJ1TyeDye.jpg'
    },
    {
      name: 'Nike Air Dior Jordan One',
      color: 'Grey',
      price: 1600,
      imagePath: 'assets/images/card-images/AirDior.jpg'
    },
    {
      name: 'Nike 270 React',
      color: 'Multi Colored',
      price: 1400,
      imagePath: 'assets/images/card-images/270React.jpeg'
    },
    {
      name: 'Nike Zoom 2K',
      color: 'B & W',
      price: 1400,
      imagePath: 'assets/images/card-images/zoom-2K.jpg'
    },
    {
      name: 'Nike Zoom 2K',
      color: 'Purple',
      price: 1400,
      imagePath: 'assets/images/card-images/zoom-2K-purp.jpeg'
    },
    {
      name: 'Puma Cali',
      color: 'White',
      price: 1300,
      imagePath: 'assets/images/card-images/puma-cali-white.jpg'
    },
    {
      name: 'Puma Cali',
      color: 'B & W',
      price: 1300,
      imagePath: 'assets/images/card-images/puma-cali-bw.jpeg'
    },
    {
      name: 'Puma RS-X',
      color: 'Toys Jacklemkus',
      price: 1300,
      imagePath: 'assets/images/card-images/RSX.jpg'
    },
    {
      name: 'Adidas YEEZY Slides',
      color: 'Assorted',
      price: 1300,
      imagePath: 'assets/images/card-images/yeezy.jpeg'
    },
    {
      name: 'Air Jordan 4 Retro ',
      color: 'Black Cat',
      price: 1600,
      imagePath: 'assets/images/card-images/retro-black-cat.jpeg'
    },
    {
      name: 'Air Jordan 4',
      color: 'Bred',
      price: 1600,
      imagePath: 'assets/images/card-images/retro-bred.jpg'
    },
    {
      name: 'Air Jordan OFF White',
      color: 'Brown',
      price: 1600,
      imagePath: 'assets/images/card-images/AJOFFBrown.jpg'
    },
    {
      name: 'Nike VapourMax Plus',
      color: 'Black',
      price: 1400,
      imagePath: 'assets/images/card-images/vmplus.jpg'
    },
    {
      name: 'Nike Air Max 97',
      color: 'White',
      price: 1400,
      imagePath: 'assets/images/card-images/97white.jpg'
    },
    {
      name: 'Nike Air Max 97',
      color: 'Yellow',
      price: 1400,
      imagePath: 'assets/images/card-images/97yellow.jpg'
    },
    {
      name: 'Nike Air Max 97',
      color: 'Black',
      price: 1400,
      imagePath: 'assets/images/card-images/97Black.jpg'
    },
    {
      name: 'Nike Air Max 97',
      color: 'Yellow',
      price: 1400,
      imagePath: 'assets/images/card-images/ISPA.jpg'
    },
    {
      name: 'Nike Just Do It',
      color: 'White',
      price: 900,
      imagePath: 'assets/images/card-images/JDIWhite.jpeg'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
