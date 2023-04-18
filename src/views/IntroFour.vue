<template>
    <section>
        <div style="margin:20px 0 20px 0">
            <p class="title-app">Rick's Madness</p>
        </div>
        <div class="div-intro-text-2">
            <p>
                Remember that, like in every mission, you are not alone.
            </p>
        </div>        
        <div class="div-img">
            <img src="../assets/image_7.png" alt="">
        </div>
        <div class="div-intro-text-2">
            <p>   
                Here in the Galactic Federation we are monitoring the mission, helping you solving clues and giving you intelligence support with this communication device.
                <br>
                <br>
                Please protect this device and NEVER close communication            
            </p>
        </div>

        <div class="buttons-flex">
            <button @click="back">
                Back
            </button>
            <button @click="forward">
                Forward
            </button>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'IntoThree',
        data() {

        },

        created() {
        },

        methods: {
            forward(){
                this.$router.push('/intro5')
            },
            back(){
                this.$router.push('/intro3')
            }
        },
    };
</script>


<style>
.title-app{
    font-family: "Get Schwifty" , sans-serif;
    font-size: 36px;
    color: #1B244C!important;
    -webkit-text-stroke: 1px #F9FF69!important;
}
.div-img{
    margin-top: 40px;
    margin-bottom: 40px;
}
.div-img img{
    width:320px;
    height:100%;
}
.div-intro-text-2{
    margin-top:40px;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 20px!important;
}
.div-intro-text-2 p{
    text-align: left !important;
    color: white!important;
}
.buttons-flex button{
    width: 100px;
    height: 40px;
    background-color: black;
    font-family: "Get Schwifty", sans-serif;
    -webkit-text-stroke: #F9FF69 0.5px;
    border-radius: 10px;
    border: none;
    color: #1B244C;
    font-size: 18px;
    font-weight: 500;
}

.buttons-flex{
    display: flex;
    justify-content: space-between;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 60px;
}
</style>