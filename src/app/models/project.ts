export class Project {

  name:string;
  description:string;
  cover:string;
  nickname:string;
  type: string;
  medal:boolean;

  constructor(name:string, description:string, cover:string, nickname:string, type:string, medal:boolean) { 
    this.name = name;
    this.description = description;
    this.cover = cover;
    this.nickname = nickname;
    this.type = type;
    this.medal = medal;
  }
  
  ngOnInit() {

  }
}
