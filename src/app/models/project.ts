export class Project {

  name:string;
  date:Date;
  dateString:string;
  description:string;
  link:string;
  cover:string;
  nickname:string;
  id:number;
  component:string; 

  constructor(name:string, date:Date, description:string, link:string, cover:string, nickname:string, id:number) { 
    this.name = name;
    this.date = date;
    this.dateString = "" + date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear(); 
    this.description = description;
    this.link = link;
    this.cover = cover;
    this.nickname = nickname;
    this.id = id;
  }
  
  ngOnInit() {

  }
}
