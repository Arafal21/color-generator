const redKnob = document.querySelector('.red-color')
const greenKnob = document.querySelector('.green-color')
const blueKnob = document.querySelector('.blue-color')

const rgbDisplay = document.querySelector('.rgb-color-display')
const currentColorOnBillboard = document.querySelector('.current-color')

const generateBtn = document.querySelector('.generate-btn')
const copyBtn = document.querySelector('.copy-btn')

let red = redKnob.value
let green = greenKnob.value
let blue = blueKnob.value

const displayRgbInParagraph = () => {
	rgbDisplay.textContent = `rgb(${red}, ${green}, ${blue})`

	currentColorOnBillboard.style.background = `rgb(${red}, ${green}, ${blue})`

	currentColorOnBillboard.style.boxShadow = `3px 3px 30px rgb(${red}, ${green}, ${blue})`
}

redKnob.addEventListener('input', () => {
	red = redKnob.value
	displayRgbInParagraph()
})

greenKnob.addEventListener('input', () => {
	green = greenKnob.value
	displayRgbInParagraph()
})

blueKnob.addEventListener('input', () => {
	blue = blueKnob.value
	displayRgbInParagraph()
})

const copyRgb = () => {
	let redToCopy = redKnob.value
	let greenToCopy = greenKnob.value
	let blueToCopy = blueKnob.value

	navigator.clipboard.writeText(`rgb(${redToCopy}, ${greenToCopy}, ${blueToCopy})`)
}

const generateRgb = () => {
	let red = Math.floor(Math.random() * 256)
	let green = Math.floor(Math.random() * 256)
	let blue = Math.floor(Math.random() * 256)

	rgbDisplay.textContent = `rgb(${red}, ${green}, ${blue})`
	currentColorOnBillboard.style.background = `rgb(${red}, ${green}, ${blue})`

	currentColorOnBillboard.style.boxShadow = `3px 3px 30px rgb(${red}, ${green}, ${blue})`

	redKnob.value = red
	greenKnob.value = green
	blueKnob.value = blue
}

generateBtn.addEventListener('click', generateRgb)
copyBtn.addEventListener('click', copyRgb)
