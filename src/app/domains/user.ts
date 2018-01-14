import { Education } from "./education";
import { Experience } from "./experience";
import { Image } from "./image";
import { Interest } from "./interest";
import { Organization } from "./organization";
import { Relationship } from "./relationship";

import { NumberUtils } from "../utils/number-utils";

export class User {
  
  public urn: string;
  public firstName: string;
  public lastName: string;
  public headline: string;
  public description: string;
  public profileImage: Image;
  public connectionSize: number;
  public karmaSize: number;
  public relationship: Relationship;
  public experiences: Array<Experience> = [];
  public educations: Array<Education> = [];
  public interests: Array<Interest> = [];
  
  getFullName() {
    return this.firstName + " " + this.lastName; 
  }
  
  formatConnectionSize(): string {
    return NumberUtils.format(this.connectionSize); 
  }
  
  formatKarmaSize(): string {
    return NumberUtils.format(this.karmaSize); 
  }
  
  getCurrentCompany(): Organization {
    if (this.experiences.length > 0) {
      let currentExperience = this.experiences[0];
      return currentExperience.company;
    }
    
    return null;
  }
  
}