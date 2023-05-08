<template>
    <div>
      <h2>Code Maker</h2>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        secretCode: '1234'
      }
    },
    created() {
      this.secretCode = SecretCode.generateCode()
    }
  }
  
  const SecretCode = {
    generateCode() {
      let code = ''
      for (let i = 0; i < 4; i++) {
        code += Math.floor(Math.random() * 6) + 1
      }
      return code
    }
  }
  </script>
  