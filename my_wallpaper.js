//your parameter variables go here!

rayx (120);
rayy (110);

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 100;
}

function wallpaper_background() {
  background(0); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  strokeWeight (4);

  stroke (255); 



  line (100,0,100, 200); //top down
  //line (130, 0, 30, 200); //top right to left
  //line (70, 0, 170, 200);
  line (0, 150, 200, 150);
  line (0, 50, 200, 50);
  line (100, 0, 0, 50);
  line (100, 0, 200, 50);
  line (100, 200, 0, 150);
  line (100, 200, 200, 150);
  
  line (1, 1, 100, 100);
  line (1, 34, 100, 100);
  line (1, 67, 100, 100);
  line (1, 100, 100, 100);
  line (1, 133, 100, 100);
  line (1, 166, 100, 100);
  line (1, 200, 100, 100);

  stroke (255, 0, 0)
line (100, 100, 200, 1);

stroke ( 250, 100, 50);
line (100, 100, 200, 34);

stroke (255, 255, 0);
line (100, 100, 200, 67);

stroke(0, 250, 0);
line (120, 100, 200, 100);
stroke (0, 0, 250);
line (100, 100, 200, 133);
stroke (250, 0, 250);
line (100, 100, 200, 166);
stroke (150, 0, 150);
line (100, 100, 200, 200);
  stroke(232,244,248);
  


  fill(0);
  triangle (50, 150, 100, 50, 150, 150);
  triangle (100, 50, 100, 1, 1, 50);
 triangle (100, 50, 200, 50, 100, 1);
 triangle (100, 200, 1, 150, 200, 150);
  line (100, 1, 100, 200); 
}

