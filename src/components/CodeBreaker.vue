<template>
    <div>
      <h2>Code Breaker</h2>
      <form>
        <input v-model="guess" type="text" />
        <button @click.prevent="submitGuess">Guess</button>
      </form>
      <ul>
        <li v-for="(guess, index) in guesses" :key="index">
          {{ guess.guess }} - Black Pegs: {{ guess.feedback.black }} White Pegs: {{ guess.feedback.white }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        guess: '',
        guesses: []
      }
    },
    methods: {
      submitGuess() {
        if (this.guess.length !== 4) {
          alert('Your guess must be a four-digit code')
          return
        }
  
        let feedback = Guess.checkGuess(this.guess, this.$parent.secretCode)
        this.guesses.push({ guess: this.guess, feedback: feedback })
        this.guess = ''
      }
    }
  }
  
  const Guess = {
    checkGuess(guess, secretCode) {
      let blackPegs = 0
      let whitePegs = 0
      let codeArray = secretCode.split('')
      let guessArray = guess.split('')
  
      for (let i = 0; i < 4; i++) {
        if (guessArray[i] === codeArray[i]) {
          blackPegs++
          codeArray[i] = null
          guessArray[i] = null
        }
      }
  
      for (let i = 0; i < 4; i++) {
        if (guessArray[i] === null) continue
        let index = codeArray.indexOf(guessArray[i])
        if (index > -1) {
          whitePegs++
          codeArray[index] = null
        }
      }
  
      return { black: blackPegs, white: whitePegs }
    }
  }
  </script>
  