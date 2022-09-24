'use strict'

const btn = document.querySelector('.btn-country')
const countriesContainer = document.querySelector('.countries')
const countryInput = document.querySelector('.search')

console.log(countryInput.innerText)

///////////////////////////////////////
const cardHTML = `
      <div class="countries">
        <article class="country">
          <img class="country__img" src="" />
          <div class="country__data">
            <h3 class="country__name">COUNTRY</h3>
            <h4 class="country__region">REGION</h4>
            <p class="country__row"><span>👫</span>POP people</p>
            <p class="country__row"><span>🗣️</span>LANG</p>
            <p class="country__row"><span>💰</span>CUR</p>
          </div>
        </article>
      </div>
`
