import { Time } from '@angular/common'

export interface trainerInterface{
    
     Mentorname:String,
     Email:String,
     Phoneno:Number,
     StartDate:Date,
     EndDate:Date,
     Starttime_hour:Number,
     Starttime_min:Number,
     Endtime_hour:Number,
     Endtime_min:Number,
     technologies:Array<string>,
     Linked:String,
     Password:String,
     experience:Number,
     profile:String,
     rating:Number,
     fees:Number,
     userWhoProposed:Array<string>,
     userWhoFinalised:Array<string>

        
}