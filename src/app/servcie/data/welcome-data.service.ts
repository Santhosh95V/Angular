import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class HelloWorldBean{
  constructor(public message:string){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {
  executeHelloWorldBeanService(){
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
    
  }

  executeHelloWorldServicewithpath(){
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
    
  }


  constructor(
    private http:HttpClient
  ) { }
}
