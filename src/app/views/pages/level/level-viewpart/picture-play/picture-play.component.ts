import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-picture-play',
  templateUrl: './picture-play.component.html',
  styleUrls: ['./picture-play.component.scss']
})
export class PicturePlayComponent implements OnInit {
  @Input() data;
  constructor(private sanitizer: DomSanitizer) { 
  }

  ngOnInit(): void {
    
  }

  getIframeUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.data.iframe.src);
  }
}
