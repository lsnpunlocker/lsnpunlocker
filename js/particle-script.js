particlesJS( 'particles-js' , {
  "particles" : {
     "number" : {
       "value" : 40 , 
      "density" : {
         "enable" : true , 
        "value_area" : 1500  //600
      } 
    } , 
    "color" : { 
      "value" :[ "#ffff00" , "#00ffff" , "#ff00ff" ]
     } , 
    "shape" : { 
      "type" : [ "circle" ,  "triangle" ,  "edge"] , 
      "stroke" : {
         "width": 0 , 
        "color" : "#000000" 
      } , 
      "polygon" : { 
        "nb_sides" : 2 //5 
      } , 
      "image" : { 
        "src" : "img/github.svg" , 
        "width" : 100 , 
        "height " : 100 
      } 
    } , 
    "opacity" : { 
      "value" : 1.5 ,  //0.5
      "random" : true , 
      "anim" : {
         "enable": false , 
        "speed" :1 , 
        "opacity_min" : .5 , 
        "sync" : false
       } 
    } , 
    "size" : { 
      "value" : 20 , 
      "random" : true , 
      "anim" : {
         "enable" : false , 
        "speed" : 40 , 
        "size_min" : 1 , 
        "sync" : false
       } 
    } , 
    "line_linked" : { 
      "enable" : true , 
      "distance" : 250 ,
      "color" : "#ffffff" , 
      "opacity" : 1 , 
      "width" : 3.2
    } , 
    "move" : { 
      "enable" : true , 
      "speed" : 15 , 
      "direction" : "none" , 
      "random" : false , 
      "straight" : false , 
      "out_mode" : "out" , 
      "bounce" : false , 
      "attract" : {
         "enable" : false , 
        "rotateX" : 600 ,
        "rotateY" : 1200 
      } 
    } 
  } ,
  "interactivity" : { 
    "detect_on" : "canvas" , 
    "events" : {
       "onhover" : {
         "enable" : true , 
        "mode" : "repulse" 
      } , 
      "onclick" : { 
        "enable" : true , 
        " mode" : "push" 
      } , 
      "resize" : true
     } , 
    "modes" : { 
      "grab" : {
         "distance" :800 , 
        "line_linked" : {
           "opacity": 1 
        } 
      } , 
      "bubble" : { 
        "distance" : 800 , 
        "size" : 80 , 
        "duration" : 2 , 
        "opacity" : 1 , 
        "speed" : 3 
      } , 
      "repulse" : { 
        "distance" : 100 , 
        "duration" : 0.4 
      } , 
      "push" : { 
        "particles_nb" : 4 
      } , 
      "remove" : {
        "particles_nb" : 2 
      } 
    } 
  } , 
  "retina_detect" : true
 }
);
