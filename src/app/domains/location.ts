export class Location {
  
  public urn: string;
  public value: string;
  public latitude: number;
  public longitude: number;
  public street1: string;
  public street2: string;
  public neighborhood: string;
  public locality: string;
  public region: string;
  public country: string;
  
  constructor(data?: any) {
    if (data) {
      this.urn = data.urn;
      this.value = data.value;
      this.latitude = data.latitude;
      this.longitude = data.longitude;
      this.street1 = data.street1;
      this.street2 = data.street2;
      this.neighborhood = data.neighborhood;
      this.locality = data.locality;
      this.region = data.region;
      this.country = data.country;
    }
  }
  
  formatNeighborhood() {
    return (this.neighborhood) ? this.neighborhood : this.locality; 
  }
  
  formatAddress() {
    return (this.value) ? this.value : "Near You"; 
  }
  
  getAddress1() {
    if (this.street1) {
      return this.street1; 
    }
    
    if (this.neighborhood) {
      return this.neighborhood;
    }
    
    if (this.locality) {
      return this.locality; 
    }
    
    if (this.region) {
      return this.region; 
    }
    
    if (this.country) {
      return this.country; 
    }
    
    return null;
  }
  
  getAddress2() {
    if (this.street1) {
      return this.locality + ", " + this.region + ", " + this.country;
    }
    
    if (this.neighborhood) {
      return this.locality + ", " + this.region + ", " + this.country;
    }
    
    if (this.locality) {
      return this.region + ", " + this.country;
    }
    
    if (this.region) {
      return this.country;
    }

    return null;
  }
  
  clear() {
    this.value = null; 
  }
  
  toString() {
    return (this.value) ? this.value : this.latitude + "," + this.longitude;
  }
  
}