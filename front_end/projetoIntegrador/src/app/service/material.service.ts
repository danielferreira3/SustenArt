import { Material } from './../model/Material';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  constructor(private http: HttpClient) { }


  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllMaterial(): Observable<Material[]>{
    return this.http.get<Material[]>('https://www.sustenart.com.br/material',this.token)
  }

  getByIdMaterial(id: number):Observable<Material>{
    return this.http.get<Material>(`https://www.sustenart.com.br/material/id/${id}`,this.token)
  }

  getByMaterial(material: string):Observable<Material>{
    return this.http.get<Material>(`https://www.sustenart.com.br/material/material/${material}`,this.token)
  }
}
