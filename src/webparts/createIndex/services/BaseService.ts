import { WebPartContext } from '@microsoft/sp-webpart-base';
//import { Constant } from "../shared/Constants";
// import { getSP } from "../shared/PnP/pnpjsConfig";
import { SPFI, SPFx } from "@pnp/sp/presets/all";

export class BaseService {
    // private _spfi: SPFI;
     private _sp: SPFI;
      constructor(context: WebPartContext,siteUrl: string) {
          // this._sp = getSP(context);
          this._sp = new SPFI(siteUrl).using(SPFx(context));
  
      }
    public getListItems(url: string, listname: string): Promise<any> {
        return this._sp.web.getList(url + "/Lists/" + listname).items();
    }
    public getCurrentUser() {
        return this._sp.web.currentUser();
    }
    public getItemById(url: string, listname: string, id: number): Promise<any> {
        return this._sp.web.getList(url + "/Lists/" + listname).items.getById(id)();
    }
    public createNewItem(url: string, listname: string, data: any): Promise<any> {
        return this._sp.web.getList(url + "/Lists/" + listname).items.add(data);
    }
    public updateItem(url: string, listname: string, data: any, id: number): Promise<any> {
        return this._sp.web.getList(url + "/Lists/" + listname).items.getById(id).update(data);
    }
    public DeleteItem(url: string, listname: string, id: number): Promise<any> {
        return this._sp.web.getList(url + "/Lists/" + listname).items.getById(id).delete();
    }
    public getItemByTitle(url: string, listname: string, id: number): any {
        return this._sp.web.lists.getByTitle(url + "/Lists/" + listname).items.getById(id)();
    }
    public updateLibraryItem(url: string, libraryname: string, data: any, id: number): Promise<any> {
        return this._sp.web.getList(url + "/" + libraryname).items.getById(id).update(data);
    }
} 