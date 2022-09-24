'use strict'

const btnSearch = document.querySelector('.btn-search')
const countryCard = document.querySelector('.country-card')
const countryInput = document.querySelector('.search')
const form = document.querySelector('#form')

const BASE_URL = 'https://restcountries.com/v3.1/name/'

form.addEventListener('submit', async e => {
  e.preventDefault()
  processUserInput()
})

btnSearch.addEventListener('click', async e => {
  e.preventDefault()
  processUserInput()
})

const processUserInput = async () => {
  const userInput = checkInputString(countryInput.value)
  let countryData = await getCountryData(userInput)

  countryData = buildCountryCard(countryData)
  insertCardData(countryData)

  countryInput.value = ''
}

const getCountryData = async countryName => {
  const res = await fetch(`${BASE_URL}${countryName}`)
  const [data] = await res.json()

  return data
}

const checkInputString = userInput => {
  // check string is not empty
  if (userInput === '') {
    alert('Please insert a country.')
  } else {
    const userInputClean = userInput.toLowerCase()
    return userInputClean
  }
}

const buildCountryCard = data => {
  const cardHTML = `
  <article class="country">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        data.population / 1000000
      ).toFixed(2)} Mio</p>
      <p class="country__row"><span>🗣️</span>${
        Object.values(data.languages)[0]
      }</p>
      <p class="country__row"><span>💰</span>${
        Object.values(data.currencies)[0].name
      }</p>
    </div>
  </article>
  `
  return cardHTML
}

const insertCardData = cardHTML => {
  countryCard.innerHTML = cardHTML
  countryCard.style.opacity = 1
}
