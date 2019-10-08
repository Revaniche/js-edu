/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {var c;
    if(focus == 'family') {c=config.family} else { if(focus=='friends') {c=config.friends} 
    else {if (focus=='normal_life') {c=config.normal_life} else {if (focus =='profession') {c=config.profession}
          else {if (focus == 'carrier') {c=config.carrier} else { if(focus=='top_peformance') {c=config.top_peformance};

            };
          }; 
        };
      };
    };
     
          var a;
      if (knowsProgramming==true) {a= 800/c} else {a=1300/c};
      return Math.ceil (a);
          
  };

  