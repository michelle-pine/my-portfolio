export class Skillset {
    title:String;
    abilities:String[];
    icon:String;
    
    constructor(title:String, abilities:String[], icon:String) {
        this.title = title;
        this.abilities = abilities;
        this.icon = icon;
    }
}
