/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const length_conversion = 3.281
const volume_conversion = 0.264
const mass_conversion = 2.204

const convertBtn = document.getElementById("convert-btn")
const amountInput = document.getElementById("amount-input")
const lengthText = document.getElementById("length-text")
const volumeText = document.getElementById("volume-text")
const massText = document.getElementById("mass-text")

function generateText(amount, conversion, metric_unit, imp_unit) {
    const imp_converted = amount * conversion
    const metric_converted = amount / conversion
    return `${amount} ${metric_unit} = ${imp_converted.toFixed(3)} ${imp_unit} | ${amount} ${imp_unit} = ${metric_converted.toFixed(3)} ${metric_unit}`
}

function displayConversions() {
    const amount = Number(amountInput.value)
    lengthText.textContent = generateText(amount, length_conversion, "meters", "feet")
    volumeText.textContent = generateText(amount, volume_conversion, "liters", "gallons")
    massText.textContent = generateText(amount, mass_conversion, "kilos", "pounds")
}

convertBtn.addEventListener("click", displayConversions)

displayConversions()