export class Training{
    constructor(){
        //this.technologyID=1;
        this.status="Yet to Commensed";
        this.Progress=0;
        this.rating="0";
    }

    public trainingID:number;
    public uID:number;
    public mentorID:number;
    public technologyName:string;
    public startDate:Date;
    public endDate:Date;
    public startTime:number;
    public endTime:number;
    public status:string;
    public Progress:number;
    public rating:string;
}