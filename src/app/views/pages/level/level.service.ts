import { Injectable } from '@angular/core';
import * as collection from '../../../../assets/jsons/collection.json'

@Injectable({
  providedIn: 'root'
})
export class LevelService {
  viewPage = 1;
  data = '';
  path;
  mechanic :any;
  collection = (collection as any);
  constructor() { }

  getCollection(id){

    return collection;

  }

  getData(id){

  }

  getLesson(unit, lesson, chapter){
    let chaterData = this.collection[unit][lesson][chapter];
    this.mechanic = chaterData;
  }
}
