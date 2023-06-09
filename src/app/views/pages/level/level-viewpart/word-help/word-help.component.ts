import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-word-help',
  templateUrl: './word-help.component.html',
  styleUrls: ['./word-help.component.scss']
})
export class WordHelpComponent implements OnInit {


  @Input() data;
  constructor() { }

//   dictionary = [
//     {
//       "word": "appropriate", 
//       "audio": "assets/collection/lesson-1/word-help/audio/word-1.mp3", 
//       "telugu" : "பொருத்தமானது"
      
//     },
//     {
//         "word": "busy", 
//         "audio": "assets/collection/lesson-1/word-help/audio/word-2.mp3", 
//         "telugu" : "பரபரப்பு"
// ​
//       },
//       {
//         "word": "carpet", 
//         "audio": "assets/collection/lesson-1/word-help/audio/word-3.mp3", 
//         "telugu" : "கம்பளம்"
        
//       },
//       {
//           "word": "clock", 
//           "audio": "assets/collection/lesson-1/word-help/audio/word-4.mp3", 
//           "telugu" : "கடிகாரம்"
  
//         },
//         {
//             "word": "cloudy", 
//             "audio": "assets/collection/lesson-1/word-help/audio/word-5.mp3", 
//             "telugu" : "மேகமூட்டம்"
            
//           },
//           {
//               "word": "cricketer", 
//               "audio": "assets/collection/lesson-1/word-help/audio/word-6.mp3", 
//               "telugu" : "கிரிக்கெட் வீரர்"
      
//             },
//             {
//                 "word": "dustbin", 
//                 "audio": "assets/collection/lesson-1/word-help/audio/word-7.mp3", 
//                 "telugu" : "குப்பை தொட்டி"
                
//               },
//               {
//                   "word": "expressions", 
//                   "audio": "assets/collection/lesson-1/word-help/audio/word-8.mp3", 
//                   "telugu" : "வெளிப்பாடுகள்"
          
//                 },
//                 {
//                   "word": "familiar", 
//                   "audio": "assets/collection/lesson-1/word-help/audio/word-9.mp3", 
//                   "telugu" : "பரிச்சயமான"
                  
//                 },
//                 {
//                     "word": "guests", 
//                     "audio": "assets/collection/lesson-1/word-help/audio/word-10.mp3", 
//                     "telugu" : "விருந்தினர்கள்"
            
//                   },
//                   {
//                       "word": "huge", 
//                       "audio": "assets/collection/lesson-1/word-help/audio/word-11.mp3", 
//                       "telugu" : "மிகப்பெரிய"
                      
//                     },
//                     {
//                         "word": "kite", 
//                         "audio": "assets/collection/lesson-1/word-help/audio/word-12.mp3", 
//                         "telugu" : "காத்தாடி"
                
//                       },
//                       {
//                         "word": "locations", 
//                         "audio": "assets/collection/lesson-1/word-help/audio/word-13.mp3", 
//                         "telugu" : "இடங்கள்"
                        
//                       },
//                       {
//                           "word": "map", 
//                           "audio": "assets/collection/lesson-1/word-help/audio/word-14.mp3", 
//                           "telugu" : "வரைபடம்"
                  
//                         },
//                         {
//                           "word": "marbles", 
//                           "audio": "assets/collection/lesson-1/word-help/audio/word-15.mp3", 
//                           "telugu" : "பளிங்கு கற்கள்"
                          
//                         },
//                         {
//                             "word": "miss", 
//                             "audio": "assets/collection/lesson-1/word-help/audio/word-16.mp3", 
//                             "telugu" : "செல்வி"
                    
//                           },
//                           {
//                               "word": "moods", 
//                               "audio": "assets/collection/lesson-1/word-help/audio/word-17.mp3", 
//                               "telugu" : "மனநிலைகள்"
                              
//                             },
//                             {
//                                 "word": "mufflers", 
//                                 "audio": "assets/collection/lesson-1/word-help/audio/word-18.mp3", 
//                                 "telugu" : "மஃப்லர்கள்"
                        
//                               },
//                               {
//                                   "word": "nephews", 
//                                   "audio": "assets/collection/lesson-1/word-help/audio/word-19.mp3", 
//                                   "telugu" : "மருமகன்கள்"
                                  
//                                 },
//                                 {
//                                     "word": "nieces", 
//                                     "audio": "assets/collection/lesson-1/word-help/audio/word-20.mp3", 
//                                     "telugu" : "மருமகள்"
                            
//                                   },
//                                   {
//                                     "word": "noisy", 
//                                     "audio": "assets/collection/lesson-1/word-help/audio/word-21.mp3", 
//                                     "telugu" : "சத்தம்"
                                    
//                                   },
//                                   {
//                                       "word": "painting", 
//                                       "audio": "assets/collection/lesson-1/word-help/audio/word-22.mp3", 
//                                       "telugu" : "ஓவியம்"
                              
//                                     },
//                                     {
//                                         "word": "phrases", 
//                                         "audio": "assets/collection/lesson-1/word-help/audio/word-23.mp3", 
//                                         "telugu" : "சொற்றொடர்கள்"
                                        
//                                       },
//                                       {
//                                           "word": "raincoats", 
//                                           "audio": "assets/collection/lesson-1/word-help/audio/word-24.mp3", 
//                                           "telugu" : "ரெயின்கோட்டுகள்"
                                  
//                                         },
//                                         {
//                                             "word": "relatives", 
//                                             "audio": "assets/collection/lesson-1/word-help/audio/word-25.mp3", 
//                                             "telugu" : "உறவினர்கள்"
                                            
//                                           },
//                                           {
//                                               "word": "repeat", 
//                                               "audio": "assets/collection/lesson-1/word-help/audio/word-26.mp3", 
//                                               "telugu" : "மீண்டும்"
                                      
//                                             },
//                                             {
//                                                 "word": "scarves", 
//                                                 "audio": "assets/collection/lesson-1/word-help/audio/word-27.mp3", 
//                                                 "telugu" : "தாவணி"
                                                
//                                               },
//                                               {
//                                                   "word": "slipper", 
//                                                   "audio": "assets/collection/lesson-1/word-help/audio/word-28.mp3", 
//                                                   "telugu" : "செருப்பு"
                                          
//                                                 },
//                                                 {
//                                                     "word": "sunny", 
//                                                     "audio": "assets/collection/lesson-1/word-help/audio/word-29.mp3", 
//                                                     "telugu" : "சூரியன் தீண்டும்"
                                                    
//                                                   },
//                                                   {
//                                                       "word": "take turns", 
//                                                       "audio": "assets/collection/lesson-1/word-help/audio/word-30.mp3", 
//                                                       "telugu" : "மாறி மாறி எடுக்கவும்"
                                              
//                                                     },
//                                                     {
//                                                       "word": "tired", 
//                                                       "audio": "assets/collection/lesson-1/word-help/audio/word-31.mp3", 
//                                                       "telugu" : "சோர்வாக"
                                                      
//                                                     },
//                                                     {
//                                                         "word": "too", 
//                                                         "audio": "assets/collection/lesson-1/word-help/audio/word-32.mp3", 
//                                                         "telugu" : "கூட"
                                                
//                                                       },
//                                                       {
//                                                           "word": "various", 
//                                                           "audio": "assets/collection/lesson-1/word-help/audio/word-33.mp3", 
//                                                           "telugu" : "பல்வேறு"
                                                          
//                                                         }
                      
            
    
// ]

  ngOnInit(): void {
  }

}
