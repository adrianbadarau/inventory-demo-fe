import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {InventoryItem} from '../shared/models';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class InventoryService {
    static endpoint = `${environment.apiBaseUrl}/inventory-item`

    constructor(
        private http: HttpClient
    ) {
    }

    getAll(): Observable<InventoryItem[]> {
        return this.http.get<InventoryItem[]>(InventoryService.endpoint)
    }

    save(item: InventoryItem): Observable<string> {
        return this.http.post<string>(InventoryService.endpoint, item)
    }

    find(id: string) {
        return this.http.get<InventoryItem>(`${InventoryService.endpoint}/${id}`)
    }

}
