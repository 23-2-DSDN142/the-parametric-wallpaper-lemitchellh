//your parameter variables go here!

let strokelight = 3;

let lightdest = 100;

let red = "rgb(255, 0, 0)";
let orange = "rgb(250, 100, 50)";
let yellow = "rgb(255, 255, 0)";
let green = "rgb(0, 250, 0)";
let blue = "rgb(0, 0, 250)";
let pink = "rgb(250, 0 , 250)";
let purple = "rgb(150, 0, 150)";

let triangleblue = "rgb(232, 244, 248)";

let white = "rbg(255, 255, 255)";

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
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
  strokeWeight (strokelight);

  stroke (white);
  fill(0); 
  rect (0, 0, 200, 200);


  triangle (1, 50, 200, 50, 100, 1); //top triangle  
 triangle (100, 200, 1, 150, 200, 150); //bottom triangle
 triangle (100, 1, 100, 200, 1, 100);
 
  triangle ( 100, 1, 100, 200, 200, 100); 


strokeWeight(strokelight);
  line (100, 5, 100, 200); //top down
  line (130, 0, 30, 200); //top right to left
  line (70, 0, 170, 200);
  line (0, 150, 200, 150);
  line (0, 50, 200, 50);
  line (100, 0, 0, 50);
  line (100, 0, 200, 50);
  line (100, 200, 0, 150);
  line (100, 200, 200, 150);
  
  line (1, 1, lightdest, lightdest); // line 1
  line (1, 34, lightdest, lightdest); // line 2
  line (1, 67, lightdest, lightdest); // line 3
  line (1, 100, lightdest, lightdest); // line 4
  line (1, 133, lightdest, lightdest); // line 5
  line (1, 166, lightdest, lightdest); // line 6
  line (1, 200, lightdest, lightdest); // line 7


  
strokeWeight (strokelight + 2)

  stroke (red) //red
line (lightdest, lightdest, 200, 1); // red

stroke (orange); // orange
line (lightdest, lightdest, 200, 34); //orange

stroke (yellow); //yellow
line (lightdest, lightdest, 200, 67); //yellow

stroke(green); //green
line (lightdest, lightdest, 200, 100); //green
stroke (blue); // bluee
line (lightdest, lightdest, 200, 133); //blue
stroke (pink); //pink
line (lightdest, lightdest, 200, 166); //pinkk
stroke (purple); //purple
line (lightdest, lightdest, 200, 200); //purple
  
stroke(triangleblue);
  
strokeWeight (strokelight + 2)
  fill(0);
  triangle (50, 150, 100, 50, 150, 150); //center triangle
  //triangle (100, 50, 100, 1, 1, 50);
  //line (100, 1, 100, 200); //line straight down middle
}

