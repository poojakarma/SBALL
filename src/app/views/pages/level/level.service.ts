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

  getJson(basePath,id) {
    return this.httpService.get('../../../../assets/lessons/'+ basePath +'/'+id+'/'+id+'.json');
    // this.httpService.get('../../../../assets/lessons/lesson1/openstory/openstory.json');
    // this.httpService.get('../../../../assets/lessons/lesson1/pictureplay/pictureplay.json');
    // this.httpService.get('../../../../assets/lessons/lesson1/thinkandwrite/thinkandwrite.json');
    // this.httpService.get('../../../../assets/lessons/lesson1/warmup/warmup.json');
    // this.httpService.get('../../../../assets/lessons/lesson1/wordhelp/wordhelp.json');
  }

  getCollection(){
    return this.httpService.get('../../../../assets/jsons/collection.json');
  }

  getData(id){

  }

  getLesson(basePath,lessonId){
    console.log(lessonId);
    localStorage.setItem("basePath", JSON.stringify(basePath));
    localStorage.setItem("lessonId", JSON.stringify(lessonId));
    this.getJson(basePath, lessonId).subscribe(res =>
      this.lessonData = res
    );
    console.log(this.lessonData);
    return this.lessonData;
  }

  
}
