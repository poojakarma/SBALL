import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LevelService {
  viewPage = 1;
  lessonData = {};
  data = '';
  path;
  mechanic :any;
  constructor(private httpService: HttpClient) { }

  getCollection(id){

    //return collection;

  }

  getJson(id) {
    return this.httpService.get('../../../../assets/'+ id +'/topic1/'+id+'.json');
  }

  getData(id){

  }

  getLesson(lessonId){

    this.getJson(lessonId).subscribe(res =>
      this.lessonData = res
    );
    return this.lessonData;
  }
}
