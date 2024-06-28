import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface ICreateIndexProps {
  webpartHeader: string;
  context: WebPartContext;
  siteUrl: string;
  
}
export interface ICreateIndexState {
  documentCount: string;
  currentUserId: any;
  currentUserName: string;
  
}