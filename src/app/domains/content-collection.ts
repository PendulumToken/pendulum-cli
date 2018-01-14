export class ContentCollection {
  
  public contents: Array<any> = [];
  
  push(content: any) {
    this.contents.push(content);  
  }
  
  append(contents: Array<any>) {
    this.contents = this.contents.concat(contents);
  }
  
  clear() {
    this.contents = [];
  }
  
}