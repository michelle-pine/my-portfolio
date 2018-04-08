import { Injectable } from '@angular/core';
import { Video } from '../models/video';

@Injectable()
export class PjvideoService {
  direct:string = "../../../../assets/images/pjvideos/";
  videos:Video[] = 
  [
    new Video("Book Trailer for Bear Feels Sick by Karma Wilson and Jane Chapman:",
    "https://adobeprod-a.akamaihd.net/5YNNUuwdnid/rend/5YNNUuwdnid_576.mp4?hdnea=st%3D1523221262%7Eexp%3D1523232062%7Eacl%3D%2Fshared_assets%2Fimage%2F*%21%2Fz%2F5YNNUuwdnid%2Frend%2F*%21%2Fi%2F5YNNUuwdnid%2Frend%2F*%21%2F5YNNUuwdnid%2Frend%2F*%21%2F5YNNUuwdnid%2Fimage%2F*%7Ehmac%3D3028489aff66d70bc5079c8011ee39ba8c7293e5e202e96ec6e921d67ed6b160", "BearFeelsSickPoster.png"),
    new Video("Book Trailer for Flying High by Julian Edelman:",
    "https://adobeprod-a.akamaihd.net/BKDuCjfaGaj/rend/BKDuCjfaGaj_576.mp4?hdnea=st%3D1523221262%7Eexp%3D1523232062%7Eacl%3D%2Fshared_assets%2Fimage%2F*%21%2Fz%2FBKDuCjfaGaj%2Frend%2F*%21%2Fi%2FBKDuCjfaGaj%2Frend%2F*%21%2FBKDuCjfaGaj%2Frend%2F*%21%2FBKDuCjfaGaj%2Fimage%2F*%7Ehmac%3D60e261d442181f8efed7917ac5fc9d717c0786b99d0cb65a33dba89385362351", "flyingHighPoster.jpg"),
    new Video("Book Trailer for the Knish War on Rivington Street by Joanne Oppenheim and Jon Davis:",
    "https://adobeprod-a.akamaihd.net/LJ7puUvqZXo/rend/LJ7puUvqZXo_576.mp4?hdnea=st%3D1523221262%7Eexp%3D1523232062%7Eacl%3D%2Fshared_assets%2Fimage%2F*%21%2Fz%2FLJ7puUvqZXo%2Frend%2F*%21%2Fi%2FLJ7puUvqZXo%2Frend%2F*%21%2FLJ7puUvqZXo%2Frend%2F*%21%2FLJ7puUvqZXo%2Fimage%2F*%7Ehmac%3D63a06d410f2f61f388b70ee25d0a89ee01268d9d42df2ce2fde856e93e41025a", "knishWarPoster.jpg"),
    new Video("Educational video on how to celebrate Rosh Hashanah:",
"https://adobeprod-a.akamaihd.net/-o5qvw_KRry/rend/-o5qvw_KRry_576.mp4?hdnea=st%3D1523221262%7Eexp%3D1523232062%7Eacl%3D%2Fshared_assets%2Fimage%2F*%21%2Fz%2F-o5qvw_KRry%2Frend%2F*%21%2Fi%2F-o5qvw_KRry%2Frend%2F*%21%2F-o5qvw_KRry%2Frend%2F*%21%2F-o5qvw_KRry%2Fimage%2F*%7Ehmac%3Dfa2f21f20a17f5bb0b7ef3006906078f35a30b68bc90272d2758458a6bba6663", "roshHashanahPoster.jpg"),
    new Video("Book Trailer for Sign Language Shabbat! by Alisa Greenbacher, Jenifer Rosner, Shelley Rotner, and David Hyde Costello:",
    "https://adobeprod-a.akamaihd.net/BXDKbiFZGe7/rend/BXDKbiFZGe7_576.mp4?hdnea=st%3D1523221262%7Eexp%3D1523232062%7Eacl%3D%2Fshared_assets%2Fimage%2F*%21%2Fz%2FBXDKbiFZGe7%2Frend%2F*%21%2Fi%2FBXDKbiFZGe7%2Frend%2F*%21%2FBXDKbiFZGe7%2Frend%2F*%21%2FBXDKbiFZGe7%2Fimage%2F*%7Ehmac%3D7d8a2ab67ebb3313c26f08c15ae7fdc22d81803c872f956dfe5809581aef8b47", "SignLanguageShabbatPoster.jpg")
  


  ];

  constructor() { }

}
