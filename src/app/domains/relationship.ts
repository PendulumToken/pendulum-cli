export class Relationship {

  public graphDistance: string;
  public sharedConnectionSize: number;  
  public sharedCompany: string;
  public sharedSchool: string;
  
  isConnected(): boolean {
    return this.graphDistance == "1st"; 
  }
  
}