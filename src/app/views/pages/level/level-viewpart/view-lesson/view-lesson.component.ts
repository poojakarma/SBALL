import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Location, LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-view-lesson',
  templateUrl: './view-lesson.component.html',
  styleUrls: ['./view-lesson.component.scss']
})
export class ViewLessonComponent implements OnInit {
  @Input() lessonData

  constructor(private sanitizer: DomSanitizer, private location: Location, private locationStrategy: LocationStrategy) { }

  ngOnInit(): void {
  }

  getOpenStoryUrl(url) {
    console.log("openstoryurl++++++++++++++++++++++")
    //return this.sanitizer"open-story/Open Story.html?file="+ this.locationStrategy.getBaseHref() + url);
  }

   getIframeUrl(url) {
    console.log("getifr++++++++++++++++++++++")
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }


}
