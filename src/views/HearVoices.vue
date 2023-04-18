<template>
    <section class="voices">
        <div @click="this.$router.push('/hints')" class="arrow">
            <img  src="../assets/Vector.png" alt="">
        </div>
        <div class="div-intro-text-1">
            <p >
                Wow, that was impressive! Your team is amazing. Ok, let´s focus. Now, you should be able to hear something, it´s Rick´s intergalactic voice messages.
                <br>
                Please try to decipher what the messages say! Can you tell us <span class="torqoise">which</span> of these subjects is <span class="torqoise">talking</span>?
            </p>
        </div>
        <div class="grid-9-voices">
            <div @click="changeColor" class="grid-box-9">
                <img src="../assets/Billie.png" alt="">
                <p>Billie Eilish</p>
            </div>
            <div @click="changeColor" class="grid-box-9">
                <img src="../assets/summer-1.png" alt="">
                <p>Summer</p>
            </div>
            <div @click="changeColor" class="grid-box-9">
                <img src="../assets/Beth.png" alt="">
                <p>Beth</p>
            </div>
            <div @click="changeColor" class="grid-box-9">
                <img src="../assets/Jerry.png" alt="">
                <p>Jerry</p>
            </div>
            <div @click="changeColor" class="grid-box-9">
                <img src="../assets/Zendeya.png" alt="">
                <p>Zendaya</p>
            </div>
            <div @click="changeColor" class="grid-box-9">
                <img src="../assets/squache.png" alt="">
                <p>Squanchy</p>
            </div>
            <div @click="changeColor" class="grid-box-9">
                <img src="../assets/obama.png" alt="">
                <p>Obama</p>
            </div>
            <div @click="changeColor" class="grid-box-9">
                <img src="../assets/Morty.png" alt="">
                <p>Morty</p>
            </div>
            <div @click="changeColor" class="grid-box-9">
                <img src="../assets/rick.png" alt="">
                <p>Rick</p>
            </div>
        </div>
        <div>
            <button class="voices-button">Enter your choice</button>
        </div>
    </section>
</template>

<style>
    .voices{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .grid-9-voices{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        grid-gap: 30px;
        margin: 20px 0 20px 0;

    }
    .div-intro-text-1{
        margin-top:30px;
        margin-left: 40px;
        margin-right: 20px;
        width: 316px;
    }
    .div-intro-text-1 p{
        color:  #C7DDFF!important;
        text-align: left;
    }
    .grid-box-9{
        width: 80px;
        height: 100px;
        border-radius: 0px;
        border-color:  #C7DDFF!important;
        border-width: 1px;
        border-style: solid;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
    }
    .grid-box-9 img{
        width: 50px;
        height: 50px;
        border-radius: 10px;
        margin-top:15px;
    }
    .grid-box-9 p{
        color:  #C7DDFF!important;
        font-size: 13px;
        font-weight: 500;
        width: 100%;
        border-left: 0px;
        border-right: 0px; 
        border-top: 1px solid #C7DDFF;
        border-bottom: 1px solid  #C7DDFF;
    }
    .voices-button{
        margin-top:30px;
        width: 200px;
        height: 40px;
        background-color: black;
        border-radius: 0px;
        color: #00FFE0;
        border-color:#00FFE0;
        font-size: 18px;
        font-weight: 500;
    }
    .arrow img {
        width: 45px;
        height: 23.5px;
        margin-top: 30px;
    }
    .torqoise{
        color: #00FFE0;
    }
</style>

<script>
export default {
    name: 'HearVoices',
    data() {
        return {
            voices: [],
        }
    }
    ,
    methods: {

        //change the color of borders when selected
        changeColor(event){
            console.log(event.target.parentElement)
            if (event.target.parentElement.style.borderColor === 'rgb(199, 221, 255)'){
                event.target.parentElement.style.borderColor = '#00FFE0'
            }
            else{
                event.target.parentElement.style.borderColor = '#C7DDFF'
            }
        },
        // when clickin on the grid boxes, select them and add names into the array
        voicesCollect(event){
            // if character is in the array, remove it
            if (this.voices.includes(event.target.parentElement.children[1].innerText)){
                this.voices.splice(this.voices.indexOf(event.target.parentElement.children[1].innerText), 1)
            }
            // if character is not in the array, add it
            else{
                this.voices.push(event.target.parentElement.children[1].innerText)
            }
            console.log(this.voices)
        }
        // when clicking on the button, send the array to the backend
    }
}
</script>