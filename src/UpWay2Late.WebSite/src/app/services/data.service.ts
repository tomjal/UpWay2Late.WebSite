import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'

import { Observable } from 'rxjs/Observable';

import { IContact } from '../models/contact';
import { INews } from '../models/news';

@Injectable()
export class DataService {

    headers = new Headers();

    constructor(private _http: Http) {
        this.headers.append('Content-Type', 'application/json');
    }

    getNews(): Observable<Array<INews>> {        
        return this._http.get('/api/data/getNews', { headers: this.headers })
            .map((responseData) => {
                return responseData.json();
            })
            .map((data: Array<INews>) => {
                return data;
            });
    }

    getContacts(): Observable<Array<IContact>> {
        return this._http.get('/api/data/getContacts', { headers: this.headers })
            .map((responseData) => {
                return responseData.json();
            })
            .map((data: Array<IContact>) => {
                return data;
            });
    }

    getGist(user: string, id: string): Observable<string> {
        const args = { user: user, id: id };
        return this._http.post('/api/data/getGist/', JSON.stringify(args), { headers: this.headers })
            .map((responseData) => {
                return responseData.json();
            })
            .map((data: any) => {
                return data.html;
            });
    }
}
