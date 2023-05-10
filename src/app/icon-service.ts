import { Injectable } from "@angular/core";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { faFan } from "@fortawesome/free-solid-svg-icons";
import { faHSquare } from "@fortawesome/free-solid-svg-icons";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faWalking } from "@fortawesome/free-solid-svg-icons";
import { faSadCry } from "@fortawesome/free-solid-svg-icons";
import { faCamera, faCoffee, faCalculator, faCocktail, faCircle, faCode, faFilm, faFish,  } from "@fortawesome/free-solid-svg-icons";

@Injectable({
  providedIn: 'root'
})
export class IconService {
  iconArray = [faCoffee, faFilm, faFish, faCamera, faCircle, faCalculator, faCode, faCocktail, faSadCry, faWalking, faWallet, faDatabase, faFan, faGamepad, faHSquare, faHamburger ]
}
