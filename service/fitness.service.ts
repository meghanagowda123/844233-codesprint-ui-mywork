import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fitness } from '../model/fitness';

@Injectable({
  providedIn: 'root'
})
export class FitnessService {
  baseUrl:string;
  
  constructor(private httpClient:HttpClient) { 
    this.baseUrl="http://localhost:4444/allfitness";
  }

  getAll():Observable<Fitness[]>{
    return this.httpClient.get<Fitness[]>(this.baseUrl);
}
  getAllById(fitnessId:number):Observable<Fitness>{
    return this.httpClient.get<Fitness>(`${this.baseUrl}/${fitnessId}`);
  }
  add(fitness:Fitness):Observable<Fitness>{
    return this.httpClient.post<Fitness>(this.baseUrl,fitness);
  }
  save(fitness:Fitness) :Observable<Fitness>{
    return this.httpClient.put<Fitness>(this.baseUrl,fitness);
  }
  delete(fitnessId:number):Observable<void>{
    return this.httpClient.delete<void>(`${this.baseUrl}/${fitnessId}`);
  }
}
