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

   getJson(id) {
    return this.httpService.get('../../../../assets/'+ id + '/' +id + '.json');
  }

  getCollection(){
    return this.httpService.get('../../../../assets/jsons/collection.json');
  }

  getData(id){

  }

  getLesson(lessonId){
    console.log(lessonId);
    this.getJson(lessonId).subscribe(res =>
      this.lessonData = res
    );
    console.log(this.lessonData);
    return this.lessonData;
  }
}
