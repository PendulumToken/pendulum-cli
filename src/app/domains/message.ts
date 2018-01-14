import { User } from "./user";

export class Message {
  
  public urn: string;
  public sender: User;
  public recipient: User;
  public body: string;
  public createdAt: string;
  
}