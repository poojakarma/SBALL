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

  geth5pUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  getOpenStoryUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl("open-story/Open Story.html?file="+ this.locationStrategy.getBaseHref() + url);
  }

  getRecordingUrl(){
    return this.sanitizer.bypassSecurityTrustResourceUrl("lets-talk/Open Story.html")
  }

  getIframeUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }


}
