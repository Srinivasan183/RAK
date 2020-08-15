import {Injectable} from "@angular/core";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UserService {

  private apiUrl = '/rak/api/v1/user';
  constructor(private http: HttpClient) {}

  getUsers(): Observable<Array<UserModel>> {
    return this.http.get(this.apiUrl).pipe(response => 
      response['userApi']
    );
    }
}