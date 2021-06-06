let data;

function preload() {
  data = loadTable("covid data/data.csv", "csv", "header");
}

function setup() {
  createCanvas(600,600);
  frameRate(5);


}

function draw() {
   let o=random(50,230);
  
    background(o); 


  let rowCount = data.getRowCount(); 

  let n = data.getColumn("number");
  let minn = min(n);
  let maxn = max(n);


  for (let i = 0; i < rowCount; i++) {
    let ni = data.getNum(i, "number"); 
    
      

    let x = map(i, 10, rowCount - 1, 10, width); //y
    let y = map(ni, minn, maxn, height, 0);
    let white = map(ni, minn, maxn, 10, 250);
    
    
    
  
    fill(white);
    stroke(white);
    //strokeWeight(80);
    //stroke(white, white, white);
    rect(x, y, 10, 700);
    
  }
  //vertex (width, height);
}