//your parameter variables go here!

let strokelight = 1.75;
let strokecolour = strokelight + 1.25;
let strokewhite = 1.75;
let stroketriangle = strokelight + 2;


let lightdestx = 100;
let lightdesty = lightdestx;

let red = "rgb(255, 0, 0)";
let orange = "rgb(250, 100, 50)";
let yellow = "rgb(255, 255, 0)";
let green = "rgb(0, 250, 0)";
let blue = "rgb(0, 0, 250)";
let pink = "rgb(250, 0 , 250)";
let purple = "rgb(150, 0, 150)";
let triangleblue = "rgb(232, 244, 248)";
let white = "rbg(255, 255, 255)";

let toptrix1 = 1;
let toptrix2 = 200;
let toptrix3 = 100;
let toptriy1 = 50;
let toptriy2 = 1;

let bottrix1 = 100; 
let bottrix2 = 1; 
let bottrix3 = 200;
let bottriy1 = 200;
let bottriy2 = 150;

let fillb = 0;

let cellW = 200;
let cellH = 200;



if (lightdesty < 100) {
  strokecolour = 0;
  strokewhite = 10;
  strokelight = 4
}

if (lightdesty > 100) {
  strokewhite = 0;
  strokecolour = 10;
  strokelight = 4
}



 

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = cellW;
  pWallpaper.grid_settings.cell_height = cellH;
  pWallpaper.grid_settings.row_offset  = 100;
}

function wallpaper_background() {
  background(0); //
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  strokeWeight (strokelight);

  stroke (white);
  fill(fillb); 
  rect (0, 0, 200, 200);

  strokeWeight(4);
  //triangle (toptrix1, meetmiddle - 2, toptrix2, meetmiddle - 2, toptrix3, toptriy2); //top triangle  
 //triangle (bottrix1, bottriy1, bottrix2, meetmiddle + 2, bottrix3, meetmiddle + 2); //bottom triangle
 strokeWeight (strokelight);
 triangle (100, 1, 100, 200, 1, 100); //left triangle
 
  triangle ( 100, 1, 100, 200, 200, 100); //righttriangle


strokeWeight(strokelight);
  //line (100, 5, 100, 200); //top down
  //line (130, 0, 30, 200); //top right to left
  //line (70, 0, 170, 200);
  line (0, 150, 200, 150); //top of triangle
  line (0, 50, 200, 50); // bottom of triangle
  //line (100, 0, 0, 50);
  //line (100, 0, 200, 50);
  //line (100, 200, 0, 150);
  //line (100, 200, 200, 150);

  strokeWeight (strokewhite);
  
  line (1, 1, lightdestx, lightdesty); // line 1
  line (1, 34, lightdestx, lightdesty); // line 2
  line (1, 67, lightdestx, lightdesty); // line 3
  line (1, 100, lightdestx, lightdesty); // line 4
  line (1, 133, lightdestx, lightdesty); // line 5
  line (1, 166, lightdestx, lightdesty); // line 6
  line (1, 200, lightdestx, lightdesty); // line 7


  
strokeWeight (strokecolour);

  stroke (red) //red
line (lightdestx, lightdesty, 200, 1); // red
stroke (orange); // orange
line (lightdestx, lightdesty, 200, 34); //orange
stroke (yellow); //yellow
line (lightdestx, lightdesty, 200, 67); //yellow
stroke(green); //green
line (lightdestx, lightdesty, 200, 100); //green
stroke (blue); // bluee
line (lightdestx, lightdesty, 200, 133); //blue
stroke (pink); //pink
line (lightdestx, lightdesty, 200, 166); //pinkk
stroke (purple); //purple
line (lightdestx, lightdesty, 200, 200); //purple
  
stroke(triangleblue);
  
strokeWeight (stroketriangle);
  fill(fillb);
  triangle (lightdestx / 2, lightdesty * 1.5, lightdestx, lightdesty / 2, lightdestx * 1.5, lightdesty * 1.5); //center triangle
  //triangle (100, 50, 100, 1, 1, 50);
  //line (100, 1, 100, 200); //line straight down middle

  //strokeWeight(finaltriangle);
  //fill (transparent);
  //triangle (toptrix1, 100, toptrix2, 100, toptrix3, toptriy2); //top triangle  
 //triangle (bottrix1, bottriy1, bottrix2, 100, bottrix3, 100); //bottom triangle
}

