function setup(){
	createCanvas(windowWidth, windowHeight, WEBGL)
}

function draw(){
	
	background(0,0,0)

	

	let lato = 500

	if (mouseIsPressed) randomSeed(0)
	
	stroke(200)
	noFill()
	beginShape(LINES)
	for(let i=0; i<500; i=i+1){
		let lunghezza = random(20, 70)
		let posX = random(-lato, lato)
		let posY = random(-lato, lato)
		let posZ = random(-lato, lato)
		vertex(posX, posY, posZ)
		vertex(posX, posY + lunghezza, posZ)
	}
	endShape()
}