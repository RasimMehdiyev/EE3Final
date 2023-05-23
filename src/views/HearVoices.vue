<template>
    <section class="voices">
        <div v-if="this.done == true" @click="this.$router.push('/hints-3')" class="arrow">
            <img  src="../assets/Vector.png" alt="">
        </div>
        <div v-if="this.done == false" @click="this.$router.push('/hints-2')" class="arrow">
            <img  src="../assets/Vector.png" alt="">
        </div>
            <RickModal @click="disableModal" id="rick-modal" style="display:none;position:fixed"/>
            <RickModalSuccess @click="disableModal" id="rick-modal-success" style="display:none;position:fixed"/>
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
                <label for="billie"><p>Billie Eilish</p></label>
                <input type="radio" id="billie" value="Billie Eilish">
                <br>
            </div>
            <div @click="changeColor" class="grid-box-9">
                <img src="../assets/summer-1.png" alt="">
                <label for="summer"><p>Summer</p></label>
                <input type="radio" id="summer" value="Summer">
                <br>
            </div>
            <div @click="changeColor" class="grid-box-9">
                <img src="../assets/Beth.png" alt="">
                <label for="Beth"><p>Beth</p></label>
                <input type="radio" id="Beth" value="Beth">
                <br>            </div>
            <div @click="changeColor" class="grid-box-9">
                <img src="../assets/Jerry.png" alt="">
                <label for="Jerry"><p>Jerry</p></label>
                <input type="radio" id="Jerry" value="Jerry">
                <br>
            </div>
            <div @click="changeColor" class="grid-box-9">
                <img src="../assets/Zendeya.png" alt="">
                <label for="Zendeya"><p>Zendeya</p></label>
                <input type="radio" id="Zendeya" value="Zendeya">
                <br>
            </div>
            <div @click="changeColor" class="grid-box-9">
                <img src="../assets/squache.png" alt="">
                <label for="Squanchy"><p>Squanchy</p></label>
                <input type="radio" id="Squanchy" value="Squanchy">
                <br>
            </div>
            <div @click="changeColor" class="grid-box-9">
                <img src="../assets/obama.png" alt="">
                <label for="Obama"><p>Obama</p></label>
                <input type="radio" id="Obama" value="Obama">
                <br>            
            </div>
            <div @click="changeColor" class="grid-box-9">
                <img src="../assets/Morty.png" alt="">
                <label for="Morty"><p>Morty</p></label>
                <input type="radio" id="Morty" value="Morty">
                <br>            
            </div>
            <div @click="changeColor" class="grid-box-9">
                <img src="../assets/rick.png" alt="">
                <label for="Rick"><p>Rick</p></label>
                <input type="radio" id="Rick" value="Rick">
                <br>            
            </div>
        </div>
        <div>
            <button @click="getVoices" class="voices-button">Enter your choice</button>
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
import RickModal from '../components/RickModal.vue'
import RickModalSuccess from '../components/RickModalSuccess.vue'
export default {
    name: 'HearVoices',
    components: {
        RickModal,
        RickModalSuccess
    },
    data() {
        return {
            voices: [],
            show: false,
            error: false,
            correct_voices:['Rick', 'Morty'],
            done: false
        }
    }
    ,
    methods: {
        getVoices(){

            // get the value from the checked radio buttons and push them to the array
            let checked = document.querySelectorAll('input[type="radio"]:checked')
            // console.log(checked[0].value)
            for (let i = 0; i < checked.length; i++){
                this.voices.push(checked[i].value)
            }
            // first sort both arrays by alphabetical order
            this.voices.sort()
            this.correct_voices.sort()
            // then compare them
            if (JSON.stringify(this.voices) === JSON.stringify(this.correct_voices)){
                this.error = false
                this.done = true
                this.voices = []
                this.rickModal()
                // uncheck the radio buttons
                for (let i = 0; i < checked.length; i++){
                    checked[i].checked = false
                }
            } else {
                this.error = true
                this.voices = []
                for (let i = 0; i < checked.length; i++){
                    checked[i].checked = false
                }
                this.rickModal()
                // after two seconds redirect to /hints-3

            }

        },
        rickModal(){
            if (this.error === true){
                this.show = true
                document.getElementById('rick-modal').style.display = 'flex'
            }
            else if (this.done === true && this.error === false){
                this.show = true
                document.getElementById('rick-modal-success').style.display = 'flex'
                setTimeout(() => {
                    this.$router.push('/hints-3')
                }, 2000);
            }
        },
        disableModal(){
            this.show = false
            document.getElementById('rick-modal').style.display = 'none'
            document.getElementById('rick-modal-success').style.display = 'none'
        },
        
        // when clicking on the button, send the array to the backend
    }
}
</script>