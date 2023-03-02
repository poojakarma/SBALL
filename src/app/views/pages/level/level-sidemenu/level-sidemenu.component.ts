import { Component, OnInit, Output } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { LevelService } from '../level.service';
import * as collection from '../../../../../assets/jsons/level-sidemenu.json'


@Component({
  selector: 'app-level-sidemenu',
  templateUrl: './level-sidemenu.component.html',
  styleUrls: ['./level-sidemenu.component.scss']
})
export class LevelSidemenuComponent implements OnInit {
    Items:  any;
    collection = (collection as any);
//   Item: ({ label: string; icon: string; items: ({ label: string; icon: string; items: { label: string; icon: string; }[]; separator?: undefined; } | { label: string; icon: string; items?: undefined; separator?: undefined; } | { separator: boolean; label?: undefined; icon?: undefined; items?: undefined; })[]; } | { label: string; icon: string; items: ({ label: string; icon: string; items?: undefined; } | { label: string; icon: string; items: ({ label: string; items: { label: string; }[]; icon?: undefined; } | { label: string; icon: string; items?: undefined; })[]; })[]; })[];
  constructor(public levelService: LevelService) { }

  ngOnInit(): void {
    //this.Items = [collection];
    // let lessonArray = [];
    // let collection = this.levelService.getCollection().subscribe(res => {
    //   res['children'].forEach(lesson => {
    //     lessonArray.push({
    //         label: lesson.name,
    //         command: () => this.levelService.getLesson("lesson1", lesson.id)
    //       })
    //   })
    //   this.Items = lessonArray;
    // });


    this.Items = [
        {
            label: 'Lesson 3: Whats going on?',
            items: [
                { label: 'Introduction', command: () => this.levelService.getLesson("lesson1", "introduction")},
                { label: 'Warm Up', command: () => this.levelService.getLesson("lesson1", "warmup")},
                { label: 'Picture Play', command: () => this.levelService.getLesson("lesson1", "pictureplay")},
                { label: 'Open Story', command: () => this.levelService.getLesson("lesson1", "openstory")},
                { label: 'Think and Write', command: () => this.levelService.getLesson("lesson1", "thinkandwrite")},
                { label: 'Word Help', command: () => this.levelService.getLesson("lesson1", "wordhelp")}
            ]
        },
        {
            label: 'Lesson 5: Seasons and Weather',
            items: [
                { label: 'Introduction', command: () =>this.levelService.getLesson("lesson5","introduction")},
                { label: 'Warm Up', command: () => this.levelService.getLesson("lesson5","warmUp")},
                { label: 'Word Play', command: () => this.levelService.getLesson("lesson5","wordplay")},
                { label: 'Picture Play', command: () => this.levelService.getLesson("lesson5","pictureplay")},
                { label: 'Lets Talk', command: () => this.levelService.getLesson("lesson5","letstalk")},
                { label: 'Think and Write', command: () => this.levelService.getLesson("lesson5","thinkandwrite")},
                { label: 'Word Help', command: () => this.levelService.getLesson("lesson5","wordhelp")}
            ]
        },
        {
            label: 'Lesson 6: Find the Things',
            items: [
                { label: 'Introduction', command: () => this.levelService.getLesson("lesson6","introduction")},
                { label: 'Warm Up', command: () => this.levelService.getLesson("lesson6","warmup")},
                { label: 'Word Play', command: () => this.levelService.getLesson("lesson6","wordplay")},
                { label: 'Picture Play', command: () => this.levelService.getLesson("lesson6","pictureplay")},
                { label: 'Lets Talk', command: () => this.levelService.getLesson("lesson6","letstalk")},
                { label: 'Think and Write', command: () => this.levelService.getLesson("lesson6","thinkandwrite")},
                { label: 'Word Help', command: () => this.levelService.getLesson("lesson6","wordhelp")}
            ]
        },
        {
            label: 'Lesson 8: How do you feel today?',
            items: [
                { label: 'Introduction', command: () => this.levelService.getLesson("lesson8","introduction")},
                { label: 'Warm Up', command: () => this.levelService.getLesson("lesson8","warmUp")},
                { label: 'Picture Play', command: () => this.levelService.getLesson("lesson8","pictureplay")},
                { label: 'Lets Talk', command: () => this.levelService.getLesson("lesson8","letstalk")},
                { label: 'Think and Write', command: () => this.levelService.getLesson("lesson8","thinkandwrite")},
                { label: 'Word Help', command: () => this.levelService.getLesson("lesson8","wordhelp")}
            ]
        },
        {
            label: 'Lesson 10: Review Time',
            items: [
                { label: 'Introduction', command: () => this.levelService.getLesson("lesson10","introduction")},
                { label: 'Picture Play', command: () => this.levelService.getLesson("lesson10","pictureplay")},
                { label: 'Open Story', command: () => this.levelService.getLesson("lesson10","openstory")},
                { label: 'Lets Talk', command: () => this.levelService.getLesson("lesson10","letstalk")},
                { label: 'Think and Write', command: () => this.levelService.getLesson("lesson10","thinkandwrite")},
                { label: 'Word Help', command: () => this.levelService.getLesson("lesson10","wordhelp")}
            ]
        },
        {
          label: 'Lesson 10: Review Time',
          items: [
              { label: 'Introduction', command: () => this.levelService.getLesson("lesson10","introduction")},
              { label: 'Picture Play', command: () => this.levelService.getLesson("lesson10","pictureplay")},
              { label: 'Open Story', command: () => this.levelService.getLesson("lesson10","openstory")},
              { label: 'Lets Talk', command: () => this.levelService.getLesson("lesson10","letstalk")},
              { label: 'Think and Write', command: () => this.levelService.getLesson("lesson10","thinkandwrite")},
              { label: 'Word Help', command: () => this.levelService.getLesson("lesson10","wordhelp")}
          ]
        },
        {
          label: 'Lesson 10: Review Time',
          items: [
              { label: 'Introduction', command: () => this.levelService.getLesson("lesson10","introduction")},
              { label: 'Picture Play', command: () => this.levelService.getLesson("lesson10","pictureplay")},
              { label: 'Open Story', command: () => this.levelService.getLesson("lesson10","openstory")},
              { label: 'Lets Talk', command: () => this.levelService.getLesson("lesson10","letstalk")},
              { label: 'Think and Write', command: () => this.levelService.getLesson("lesson10","thinkandwrite")},
              { label: 'Word Help', command: () => this.levelService.getLesson("lesson10","wordhelp")}
          ]
        }
    ]
    //     // {
    //     //     label: 'Eng Level 1',
    //     //     expanded: true,
    //     //     items: [
    //     //         {
    //     //             label: 'Unit 1',
    //     //             expanded: true,
    //     //             items: [
    //     //                 {
    //     //                     label: 'Lesson 3',
    //     //                     expanded: true,
    //     //                     items: [
    //     //                         {
    //     //                             label: 'Whats going on?',
    //     //                             expanded: true,
    //     //                             items: [
    //     //                                 { label: 'Introduction', command: () => this.levelService.viewPage=1},
    //     //                                 { label: 'Warm Up', command: () => this.levelService.viewPage=2},
    //     //                                 { label: 'Picture Play', command: () => this.levelService.viewPage=3},
    //     //                                 { label: 'Open Story', command: () => this.levelService.viewPage=4},
    //     //                                 { label: 'Think and Write', command: () => this.levelService.viewPage=5},
    //     //                                 { label: 'Word Help', command: () => this.levelService.viewPage=6}
    //     //                             ]
    //     //                         }
    //     //                     ]
    //     //                 },
    //     //                 {
    //     //                     label: 'Lesson 5',
    //     //                     items: [
    //     //                         {
    //     //                             label: 'Seasons and Weather',
    //     //                             items: [
    //     //                                 { label: 'Introduction', command: () => this.levelService.viewPage=7},
    //     //                                 { label: 'Warm Up', command: () => this.levelService.viewPage=8},
    //     //                                 { label: 'Word Play', command: () => this.levelService.viewPage=9},
    //     //                                 { label: 'Picture Play', command: () => this.levelService.viewPage=10},
    //     //                                 { label: 'Lets Talk', command: () => this.levelService.viewPage=11},
    //     //                                 { label: 'Think and Write', command: () => this.levelService.viewPage=12},
    //     //                                 { label: 'Word Help', command: () => this.levelService.viewPage=13}
    //     //                             ]
    //     //                         }
    //     //                     ]
    //     //                 },
    //     //                 {
    //     //                     label: 'Lesson 6',
    //     //                     items: [
    //     //                         {
    //     //                             label: 'Find the Things',
    //     //                             items: [
    //     //                                 { label: 'Introduction', command: () => this.levelService.viewPage=14},
    //     //                                 { label: 'Warm Up', command: () => this.levelService.viewPage=15},
    //     //                                 { label: 'Word Play', command: () => this.levelService.viewPage=16},
    //     //                                 { label: 'Picture Play', command: () => this.levelService.viewPage=17},
    //     //                                 { label: 'Lets Talk', command: () => this.levelService.viewPage=18},
    //     //                                 { label: 'Think and Write', command: () => this.levelService.viewPage=19},
    //     //                                 { label: 'Word Help', command: () => this.levelService.viewPage=20}
    //     //                             ]
    //     //                         }
    //     //                     ]
    //     //                 },
    //     //                 {
    //     //                     label: 'Lesson 8',
    //     //                     items: [
    //     //                         {
    //     //                             label: 'How do you feel today?',
    //     //                             items: [
    //     //                                 { label: 'Introduction', command: () => this.levelService.viewPage=21},
    //     //                                 { label: 'Warm Up', command: () => this.levelService.viewPage=22},
    //     //                                 { label: 'Picture Play', command: () => this.levelService.viewPage=23},
    //     //                                 { label: 'Lets Talk', command: () => this.levelService.viewPage=24},
    //     //                                 { label: 'Think and Write', command: () => this.levelService.viewPage=25},
    //     //                                 { label: 'Word Help', command: () => this.levelService.viewPage=26}
    //     //                             ]
    //     //                         }
    //     //                     ]
    //     //                 }
    //     //             ]
    //     //         }
    //     //     ]
    //     // },
    //     // {
    //     //     label: 'Lesson 3: Whats going on?',
    //     //     items: [
    //     //         { label: 'Introduction', command: () => this.levelService.viewPage=1},
    //     //         { label: 'Warm Up', command: () => this.levelService.viewPage=2},
    //     //         { label: 'Picture Play', command: () => this.levelService.viewPage=3},
    //     //         { label: 'Open Story', command: () => this.levelService.viewPage=4},
    //     //         { label: 'Think and Write', command: () => this.levelService.viewPage=5},
    //     //         { label: 'Word Help', command: () => this.levelService.viewPage=6}
    //     //     ]
    //     // },
    // ];
  }


}
