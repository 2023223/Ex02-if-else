function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(14);
  noFill();
  stroke(0);
}

function draw() {
  background(255);

  //quad1 top left
  if (mouseX < width/2) {
    if (mouseY > height/2) {
      fill(38,51, 133);
    } else {
      fill(74, 143, 79);
    }
  } else {
    if (mouseY > height/2) {
      fill(99, 193, 207);
    } else {
      fill(207, 99, 157);
    }
  }

  strokeWeight(10);
  quad(0, 0, width/3, 0, width/3, height/3, 0, height/3);

  //quad2 abaixo

  fill(237, 225, 218);
  strokeWeight(10);
  quad(0, height/3, width/3, height/3, width/3, height/2, 0, height/2);

  //quad3 curto

     if (mouseX < width/2) {
    if (mouseY > height/2) {
      fill(38, 51, 133);
    } else {
      fill(74, 143, 79);
    }
  } else {
    if (mouseY > height/2) {
      fill(99, 193, 207);
    } else {
      fill(207, 99, 157);
    }
  }

  strokeWeight(10);
  quad(0, height/2, width/5, height/2, width/5, height/1.2, 0, height/1.2);

  //quad4 longo

       if (mouseX < width/2) {
    if (mouseY > height/2) {
      fill(74, 143, 79);
    } else {
      fill(38,51, 133);
    }
  } else {
    if (mouseY > height/2) {
      fill(207, 99, 157);
    } else {
      fill(99, 193, 207);
    }
  }

  strokeWeight(10);
  quad(0, height/1.2, width/3, height/1.2, width/3, height/1, 0, height/1);

  //quad4 acima do quadlongo

  fill(237, 225, 218);
  strokeWeight(10);
  quad( width/5, height/2, width/2, height/2, width/2, height/1.2, width/5, height/1.2);

  //big rectangle

         if (mouseX < width/2) {
    if (mouseY > height/2) {
      fill(74, 143, 79);
    } else {
      fill(38,51, 133);
    }
  } else {
    if (mouseY > height/2) {
      fill(207, 99, 157);
    } else {
      fill(99, 193, 207);
    }
  }

  strokeWeight(10);
  quad( width/3, 0, width/1.8, 0, width/1.8, height/1.2, width/3, height/1.2);

  //second bottom quad

   fill(237, 225, 218);
  strokeWeight(10);
  quad( width/3, height/1.2, width/2, height/1.2, width/2, height/1, width/3, height/1);

  //quad next to the big rectangle

  fill(237, 225, 218);
  strokeWeight(10);
  quad(width/1.8, 0, width/1.2, 0, width/1.2, height/2, width/1.8, height/2);

  //quad upper right corner

             if (mouseX < width/2) {
    if (mouseY > height/2) {
      fill(74, 143, 79);
    } else {
      fill(38,51, 133);
    }
  } else {
    if (mouseY > height/2) {
      fill(207, 99, 157);
    } else {
      fill(99, 193, 207);
    }
  }

  strokeWeight(10);
  quad(width/1.2, 0, width/1, 0, width/1, height/3, width/1.2, height/3);

  //under second to last quad next to big rectangle

  fill(237, 225, 218);
  strokeWeight(10);
  quad(width/1.8, height/2, width/1.4, height/2, width/1.4, height/1.2, width/1.8, height/1.2);

  //under second to last quad next to small square

               if (mouseX < width/2) {
    if (mouseY > height/2) {
      fill(74, 143, 79);
    } else {
      fill(38,51, 133);
    }
  } else {
    if (mouseY > height/2) {
      fill(207, 99, 157);
    } else {
      fill(99, 193, 207);
    }
  }

  strokeWeight(10);
  quad(width/1.4, height/2, width/1.2, height/2, width/1.2, height/1.2, width/1.4, height/1.2);

  //right side cross rectangle

               if (mouseX < width/2) {
    if (mouseY > height/2) {
      fill(38, 51, 133);
    } else {
      fill(74, 143, 79);
    }
  } else {
    if (mouseY > height/2) {
      fill(99, 193, 207);
    } else {
      fill(207, 99, 157);
    }
  }

  strokeWeight(10);
  quad(width/1.2, height/3, width/1, height/3, width/1, height/1.2, width/1.2, height/1.2);

  //bottom right rectangle

  fill(237, 225, 218);
  strokeWeight(10);
  quad(width/1.3, height/1.2, width/1, height/1.2, width/1, height/1, width/1.3, height/1);

  //quad leftover space

                   if (mouseX < width/2) {
    if (mouseY > height/2) {
      fill(38, 51, 133);
    } else {
      fill(74, 143, 79);
    }
  } else {
    if (mouseY > height/2) {
      fill(99, 193, 207);
    } else {
      fill(207, 99, 157);
    }
  }

  strokeWeight(10);
  quad(width/2, height/1.2, width/1.3, height/1.2, width/1.3, height/1, width/2, height/1);
}