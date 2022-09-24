'use strict'

const btnSearch = document.querySelector('.btn-search')
const countryCard = document.querySelector('.country-card')
const countryInput = document.querySelector('.search')

const BASE_URL = 'https://restcountries.com/v3.1/name/'

btnSearch.addEventListener('click', e => {
  console.log(countryInput.value)
  // take input as API search parameter
  checkInputString()

  // call api
  getCountryData()

  // put data into cardHTML
  // buildCountryCard(data)

  insertCardData(cardHTML)

  countryInput.value = ''
})

const getCountryData = async countryName => {
  // built search param
  // fecth data from api
  // destructure data and return it
}

const checkInputString = countryName => {
  // check string is not empty
  // convert to lower case
  // return string
}

/* const buildCountryCard = (data) => {
  const cardHTML =  `
  <article class="country">
    <img class="country__img" src="${}" />
    <div class="country__data">
      <h3 class="country__name">COUNTRY${}</h3>
      <h4 class="country__region">REGION${}</h4>
      <p class="country__row"><span>👫</span>POP people${}</p>
      <p class="country__row"><span>🗣️</span>LANG${}</p>
      <p class="country__row"><span>💰</span>CUR${}</p>
    </div>
  </article>
  `
  return cardHTML
} */

const insertCardData = cardHTML => {
  countryCard.innerHTML = cardHTML
  countryCard.style.opacity = 1
}
