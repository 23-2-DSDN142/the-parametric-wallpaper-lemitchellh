//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  rect(40 ,40, rect_width, rect_height);

  fill(orange);
ellipse (104, 108, 182, 170);

  fill (255); ///eyeoutline
  stroke (eyescolor);
  strokeWeight (eyestroke);
  rect(righteyeposx, righteyeposy, 40, 40, 35, 35, 5, 5)
  rect(lefteyeposx, lefteyeposy, 40, 40, 35, 35, 5, 5)
  
  strokeWeight(0);  ///eyepupils
  fill (eyecolor)
  rect(lefteyeposx + 10, lefteyeposy + 7, 20, 30, 35, 35, 5, 5)
  rect(righteyeposx + 10, righteyeposy + 7, 20, 30, 35, 35, 5, 5)

  stroke(0)
  strokeWeight(whiskstroke);
line (lws, lwsy, lwe, lwey)
line (lws, lwsy + 3, lwe, lwey + 20)
line (lws, lwsy + 5, lwe, lwey + 35)
line (lws, lwsy + 7, lwe, lwey + 50)
line( rws, lwsy, rwe, lwey);
line( rws, lwsy + 3, rwe, lwey + 20)
line( rws, lwsy + 5, rwe, lwey + 35)
line( rws, lwsy + 7, rwe, lwey + 50)

fill(orange)
beginShape();
vertex (40, 43);
  vertex (30, 15);
  vertex (55, 35)
endShape();

beginShape();
vertex (159, 38);
  vertex (184, 13);
  vertex (174, 53)
endShape();

strokeWeight(nosestroke);
fill (nosecolor)
  arc(105, 105, 30, 25, 0, PI, PIE); 


  
 fill ("#8c0710")
  rect(60, 145, 90, 40, 9, 9, 30, 30)

  stroke (0);
  fill ("#eff0cc");
triangle (85, 145, 95, 165 , 105, 145); 
triangle (106, 145, 116, 165, 126, 145);  

fill ("#eb3b46");
arc(105, 185, 50, 20,  PI, TWO_PI, PIE); 

}