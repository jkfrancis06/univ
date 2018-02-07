import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";


@Injectable()

export class SchoolService{

  constructor (private http: HttpClient){}


  getSchools(){

    return new Promise(resolve => {
      this.http.get('assets/data/university_togo.json')
        .subscribe(data => {
          resolve (data)
        },err =>{
          console.log(err)
        });
    });

  }

}

