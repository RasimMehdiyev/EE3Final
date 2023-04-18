<template>
    <section>
        <div style="margin:20px 0 20px 0">
            <p class="title-app">Rick's Madness</p>
        </div>
        <div class="div-intro-text-2">
            <p>
                We have received messages from the leaders in planet 321650, or Earth as their inhabitants call it, asking for help.
            </p>
            <br>
            <p>   
                Apparently there is a bomb in Rick’s Sanchez lab. You and your team must deactivate it before it destroys everything. 
            </p>
        </div>
        <div class="div-img">
            <img src="../assets/image_6.png" alt="">
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
                this.$router.push('/intro4')
            },
            back(){
                this.$router.push('/intro2')
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
}
.div-img img{
    width:390px;
    height:100%;
}
.div-intro-text-2{
    margin-top:40px;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 60px!important;
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