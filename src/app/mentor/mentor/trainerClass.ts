import { Time } from '@angular/common'

export class trainerClass{
    constructor(){
        this.mentorBlock=false;
    }
    public mentorID:number;
    public mentorName:String;
    public email:String;
    public mentorPhoneNo:Number;
    public startTime:number;
    public endTime:number;
    public experience:Number;
    public mentorProfile:String;
    public primaryTechnology;
    public linkedIn:String;
    public password:String;
    public mentorBlock:boolean;
}