const FPS = 1 // frames per second
const CANVAS_SIZE_MULTIPLIER = 40
const CANVAS_HEIGHT = 7 * CANVAS_SIZE_MULTIPLIER // canvas height in pixels
const CANVAS_WIDTH = 4 * CANVAS_SIZE_MULTIPLIER // canvas width in pixels
const HEX = [
	0x7E, 0x30, 0x6D, 0x79, 0x33, 0x5B, 0x5F, 0x70,
	0x7F,	0x7B, 0x77,	0x1F, 0x4E, 0x3D, 0x4F, 0x47
] // hexidecimal numbers to cycle through
const BACKGROUND_COLOR = 'rgb(40, 0, 0)'

/** @type {HTMLCanvasElement} */
const canv = document.getElementById('myCanvas')
const ctx = canv.getContext('2d')

// setup parameters
let index = 0

// draw and color the canvas
const drawBackground = () => {
	canv.height = CANVAS_HEIGHT
	canv.width = CANVAS_WIDTH
	ctx.fillStyle = BACKGROUND_COLOR
	ctx.fillRect(0, 0, canv.width, canv.height)
}

// get the segment color
const getColor = (val, shift) => {
	const r = 220
	const g = 20
	const b = 60
	const a = 0.2 + 0.8 * ((val >> shift) & 1)
	return `rgba(${r}, ${g}, ${b}, ${a})`
}

// draw the segments
const drawSegments = (val) => {
	const segHeight = canv.height / 7
	const segWidth = canv.width / 4

	// A
	ctx.fillStyle = getColor(val, 6)
	ctx.strokeStyle = BACKGROUND_COLOR
	ctx.beginPath(val, 6)
	ctx.moveTo(segWidth * 0.5, segHeight * 0.5)
	ctx.lineTo(segWidth, 0)
	ctx.lineTo(segWidth * 3, 0)
	ctx.lineTo(segWidth * 3.5, segHeight * 0.5)
	ctx.lineTo(segWidth * 3, segHeight)
	ctx.lineTo(segWidth, segHeight)
	ctx.fill()
	ctx.stroke()

	// B
	ctx.fillStyle = getColor(val, 5)
	ctx.beginPath(val, 6)
	ctx.moveTo(segWidth * 3.5, segHeight * 0.5)
	ctx.lineTo(segWidth * 4, segHeight)
	ctx.lineTo(segWidth * 4, segHeight * 3)
	ctx.lineTo(segWidth * 3.5, segHeight * 3.5)
	ctx.lineTo(segWidth * 3, segHeight * 3)
	ctx.lineTo(segWidth * 3, segHeight)
	ctx.fill()
	ctx.stroke()

	// C
	ctx.fillStyle = getColor(val, 4)
	ctx.beginPath(val, 6)
	ctx.moveTo(segWidth * 3.5, segHeight * 3.5)
	ctx.lineTo(segWidth * 4, segHeight * 4)
	ctx.lineTo(segWidth * 4, segHeight * 6)
	ctx.lineTo(segWidth * 3.5, segHeight * 6.5)
	ctx.lineTo(segWidth * 3, segHeight * 6)
	ctx.lineTo(segWidth * 3, segHeight * 4)
	ctx.fill()
	ctx.stroke()
	
	// D
	ctx.fillStyle = getColor(val, 3)
	ctx.beginPath(val, 6)
	ctx.moveTo(segWidth * 0.5, segHeight * 6.5)
	ctx.lineTo(segWidth, segHeight * 6)
	ctx.lineTo(segWidth * 3, segHeight * 6)
	ctx.lineTo(segWidth * 3.5, segHeight * 6.5)
	ctx.lineTo(segWidth * 3, segHeight * 7)
	ctx.lineTo(segWidth, segHeight * 7)
	ctx.fill()
	ctx.stroke()

	// E
	ctx.fillStyle = getColor(val, 2)
	ctx.beginPath(val, 6)
	ctx.moveTo(segWidth * 0.5, segHeight * 3.5)
	ctx.lineTo(segWidth, segHeight * 4)
	ctx.lineTo(segWidth, segHeight * 6)
	ctx.lineTo(segWidth * 0.5, segHeight * 6.5)
	ctx.lineTo(0, segHeight * 6)
	ctx.lineTo(0, segHeight * 4)
	ctx.fill()
	ctx.stroke()

	// F
	ctx.fillStyle = getColor(val, 1)
	ctx.beginPath(val, 6)
	ctx.moveTo(segWidth * 0.5, segHeight * 0.5)
	ctx.lineTo(segWidth, segHeight)
	ctx.lineTo(segWidth, segHeight * 3)
	ctx.lineTo(segWidth * 0.5, segHeight * 3.5)
	ctx.lineTo(0, segHeight * 3)
	ctx.lineTo(0, segHeight)
	ctx.fill()
	ctx.stroke()

	// G
	ctx.fillStyle = getColor(val, 0)
	ctx.beginPath(val, 6)
	ctx.moveTo(segWidth * 0.5, segHeight * 3.5)
	ctx.lineTo(segWidth, segHeight * 3)
	ctx.lineTo(segWidth * 3, segHeight * 3)
	ctx.lineTo(segWidth * 3.5, segHeight * 3.5)
	ctx.lineTo(segWidth * 3, segHeight * 4)
	ctx.lineTo(segWidth, segHeight * 4)
	ctx.fill()
	ctx.stroke()
}

// update the canvas
const update = () => {
	drawBackground()
	drawSegments(HEX[index])
	index = (index + 1) % HEX.length
}

// setup the loop
setInterval(update, 1000 / FPS)
